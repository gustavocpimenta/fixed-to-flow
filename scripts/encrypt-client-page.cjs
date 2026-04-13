#!/usr/bin/env node
/**
 * Encrypts an HTML page with AES-256-GCM so the content is unreadable without the password.
 *
 * Usage:
 *   node scripts/encrypt-client-page.cjs <source.html> <output.html> <password> \
 *     [--title "Page Title"] [--label "Gate Label"] [--storage-key "session_key"]
 *
 * The output is a self-contained HTML page with:
 *   - A password form with a clean gate styled for any client
 *   - The encrypted content as a base64 blob
 *   - Client-side PBKDF2 key derivation + AES-GCM decryption
 */

const fs = require('fs');
const crypto = require('crypto');
const path = require('path');

const args = process.argv.slice(2);
if (args.length < 3) {
  console.error('Usage: node encrypt-client-page.cjs <source.html> <output.html> <password> [--title "Title"] [--label "Label"] [--storage-key "key"]');
  process.exit(1);
}

const [sourcePath, outputPath, password] = args;

function getFlag(name, fallback) {
  const idx = args.indexOf(name);
  return idx !== -1 && args[idx + 1] ? args[idx + 1] : fallback;
}

function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, (c) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  })[c]);
}

const pageTitle = getFlag('--title', 'Protected Page');
const gateLabel = getFlag('--label', 'Protected Content');
const storageKey = getFlag('--storage-key', 'fft_auth');

const sourceHtml = fs.readFileSync(sourcePath, 'utf-8');

// Encryption parameters
const ITERATIONS = 600000;
const salt = crypto.randomBytes(16);
const iv = crypto.randomBytes(12);

// Derive key with PBKDF2
const key = crypto.pbkdf2Sync(password, salt, ITERATIONS, 32, 'sha256');

// Encrypt with AES-256-GCM
const cipher = crypto.createCipheriv('aes-256-gcm', key, iv);
let encrypted = cipher.update(sourceHtml, 'utf-8');
encrypted = Buffer.concat([encrypted, cipher.final()]);
const authTag = cipher.getAuthTag();

// Combine: salt (16) + iv (12) + authTag (16) + ciphertext
const payload = Buffer.concat([salt, iv, authTag, encrypted]);
const payloadB64 = payload.toString('base64');

console.log(`Encrypted ${sourcePath} -> ${outputPath}`);
console.log(`  Payload size: ${(payloadB64.length / 1024).toFixed(1)} KB`);
console.log(`  Salt: ${salt.toString('hex')}`);
console.log(`  IV: ${iv.toString('hex')}`);
console.log(`  Iterations: ${ITERATIONS}`);

// Build the loader page
const loaderHtml = `<!DOCTYPE html>
<html lang="pt">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${escapeHtml(pageTitle)}</title>
<meta name="robots" content="noindex, nofollow">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Outfit:wght@300;400;500;600;700&display=swap" rel="stylesheet">
<style>
:root {
  --red: #E63B2E;
  --red-dark: #C42B1C;
  --red-glow: rgba(230, 59, 46, 0.15);
  --cream: #FAF7F2;
  --black: #111111;
  --gray: #555555;
  --white: #FFFFFF;
}

* { margin: 0; padding: 0; box-sizing: border-box; }

body {
  font-family: 'Outfit', sans-serif;
  background-color: var(--cream);
  color: var(--black);
  line-height: 1.7;
  overflow: hidden;
  min-height: 100vh;
  -webkit-font-smoothing: antialiased;
}

.password-overlay {
  position: fixed;
  inset: 0;
  background: var(--black);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.password-overlay::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 150vmax;
  height: 150vmax;
  background: radial-gradient(circle, var(--red-glow) 0%, transparent 50%);
  transform: translate(-50%, -50%);
  animation: pulse-glow 4s ease-in-out infinite;
}

@keyframes pulse-glow {
  0%, 100% { opacity: 0.5; transform: translate(-50%, -50%) scale(1); }
  50% { opacity: 0.8; transform: translate(-50%, -50%) scale(1.1); }
}

.password-card {
  background: var(--cream);
  padding: 56px 48px;
  border-radius: 24px;
  box-shadow: 0 25px 80px rgba(0, 0, 0, 0.4);
  max-width: 420px;
  width: 90%;
  text-align: center;
  position: relative;
  z-index: 1;
  animation: card-enter 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s both;
}

@keyframes card-enter {
  from { opacity: 0; transform: translateY(40px) scale(0.95); }
  to { opacity: 1; transform: translateY(0) scale(1); }
}

.password-logo {
  margin-bottom: 40px;
}

.password-logo img {
  height: 22px;
  width: auto;
}

.password-label {
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--red);
  margin-bottom: 16px;
}

.password-title {
  font-family: 'Instrument Serif', Georgia, serif;
  font-size: 2rem;
  font-weight: 400;
  margin-bottom: 12px;
  color: var(--black);
  line-height: 1.2;
}

.password-subtitle {
  font-size: 1rem;
  color: var(--gray);
  margin-bottom: 36px;
}

.password-input-group {
  position: relative;
  margin-bottom: 24px;
}

.password-input {
  width: 100%;
  padding: 18px 24px;
  font-size: 1rem;
  font-family: 'Outfit', sans-serif;
  border: 2px solid #E5E5E5;
  border-radius: 14px;
  outline: none;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
  background: var(--white);
  color: var(--black);
}

.password-input:focus {
  border-color: var(--red);
  box-shadow: 0 0 0 4px var(--red-glow);
}

.password-input.error {
  border-color: var(--red);
  animation: shake 0.5s ease;
}

@keyframes shake {
  0%, 100% { transform: translateX(0); }
  20%, 60% { transform: translateX(-8px); }
  40%, 80% { transform: translateX(8px); }
}

.password-error {
  color: var(--red);
  font-size: 0.9rem;
  margin-top: 12px;
  display: none;
}

.password-error.visible {
  display: block;
  animation: fade-in 0.3s ease;
}

@keyframes fade-in {
  from { opacity: 0; transform: translateY(-5px); }
  to { opacity: 1; transform: translateY(0); }
}

.password-btn {
  width: 100%;
  padding: 18px 32px;
  background: var(--red);
  color: var(--white);
  border: none;
  border-radius: 100px;
  font-size: 1rem;
  font-weight: 600;
  font-family: 'Outfit', sans-serif;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease, opacity 0.3s ease;
}

.password-btn:hover:not(.loading) {
  background: var(--red-dark);
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(230, 59, 46, 0.35);
}

.password-btn.loading {
  pointer-events: none;
  opacity: 0.7;
}
</style>
</head>
<body>

<div class="password-overlay" id="gate">
  <div class="password-card">
    <div class="password-logo">
      <img src="/logo.svg" alt="Fixed to Flow">
    </div>
    <div class="password-label">${escapeHtml(gateLabel)}</div>
    <p class="password-subtitle">Introduza password para aceder.</p>
    <form id="gateForm">
      <div class="password-input-group">
        <input
          type="password"
          class="password-input"
          id="gateInput"
          placeholder="Password"
          autocomplete="off"
          autofocus
        >
        <p class="password-error" id="gateError">Password incorrecta. Tente novamente.</p>
      </div>
      <button type="submit" class="password-btn" id="gateBtn">Ver Proposta</button>
    </form>
  </div>
</div>

<script id="payload" type="application/octet-stream">${payloadB64}</script>

<script>
(function() {
  const ITERATIONS = ${ITERATIONS};
  const STORAGE_KEY = ${JSON.stringify(storageKey)};

  const gate = document.getElementById('gate');
  const contentEl = document.getElementById('content');
  const form = document.getElementById('gateForm');
  const input = document.getElementById('gateInput');
  const btn = document.getElementById('gateBtn');
  const errorEl = document.getElementById('gateError');
  const payloadB64 = document.getElementById('payload').textContent;

  function b64ToBytes(b64) {
    const bin = atob(b64);
    const bytes = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
    return bytes;
  }

  async function decrypt(password) {
    const data = b64ToBytes(payloadB64);
    const salt = data.slice(0, 16);
    const iv = data.slice(16, 28);
    const authTag = data.slice(28, 44);
    const ciphertext = data.slice(44);

    // Combine ciphertext + authTag for WebCrypto (it expects them concatenated)
    const combined = new Uint8Array(ciphertext.length + authTag.length);
    combined.set(ciphertext);
    combined.set(authTag, ciphertext.length);

    const enc = new TextEncoder();
    const keyMaterial = await crypto.subtle.importKey('raw', enc.encode(password), 'PBKDF2', false, ['deriveKey']);
    const key = await crypto.subtle.deriveKey(
      { name: 'PBKDF2', salt: salt, iterations: ITERATIONS, hash: 'SHA-256' },
      keyMaterial,
      { name: 'AES-GCM', length: 256 },
      false,
      ['decrypt']
    );

    const decrypted = await crypto.subtle.decrypt({ name: 'AES-GCM', iv: iv }, key, combined);
    return new TextDecoder().decode(decrypted);
  }

  async function unlock(password) {
    try {
      const html = await decrypt(password);
      // Replace the entire document with the decrypted content
      document.open();
      document.write(html);
      document.close();
      // Store password for cross-page auth
      try { sessionStorage.setItem(STORAGE_KEY, password); } catch(e) {}
      return true;
    } catch(e) {
      return false;
    }
  }

  // Try stored password first
  (async function() {
    try {
      const stored = sessionStorage.getItem(STORAGE_KEY);
      if (stored) {
        const ok = await unlock(stored);
        if (ok) return;
        sessionStorage.removeItem(STORAGE_KEY);
      }
    } catch(e) {}
  })();

  form.addEventListener('submit', async function(e) {
    e.preventDefault();
    const pw = input.value;
    if (!pw) return;

    btn.classList.add('loading');
    btn.textContent = 'A desencriptar...';

    // Small delay to let the UI update before heavy PBKDF2
    await new Promise(r => setTimeout(r, 50));

    const ok = await unlock(pw);
    if (!ok) {
      btn.classList.remove('loading');
      btn.textContent = 'Ver Proposta';
      input.classList.add('error');
      errorEl.classList.add('visible');
      setTimeout(() => input.classList.remove('error'), 500);
    }
  });

  input.addEventListener('input', function() {
    errorEl.classList.remove('visible');
  });
})();
</script>

</body>
</html>`;

// Ensure output directory exists
const outputDir = path.dirname(outputPath);
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

fs.writeFileSync(outputPath, loaderHtml, 'utf-8');
console.log('Done.');
