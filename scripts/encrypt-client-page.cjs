#!/usr/bin/env node
/**
 * Encrypts an HTML page with AES-256-GCM so the content is unreadable without the password.
 *
 * Usage:
 *   node scripts/encrypt-client-page.js <source.html> <output.html> <password> [--title "Page Title"]
 *
 * The output is a self-contained HTML page with:
 *   - A password form styled in Vitolero's Swiss Rational aesthetic
 *   - The encrypted content as a base64 blob
 *   - Client-side PBKDF2 key derivation + AES-GCM decryption
 */

const fs = require('fs');
const crypto = require('crypto');
const path = require('path');

const args = process.argv.slice(2);
if (args.length < 3) {
  console.error('Usage: node encrypt-client-page.js <source.html> <output.html> <password> [--title "Title"]');
  process.exit(1);
}

const [sourcePath, outputPath, password] = args;
const titleIdx = args.indexOf('--title');
const pageTitle = titleIdx !== -1 ? args[titleIdx + 1] : 'Protected Page';

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
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${pageTitle}</title>
<link href="https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700&display=swap" rel="stylesheet">
<style>
* { margin: 0; padding: 0; box-sizing: border-box; }

body {
  font-family: 'Sora', sans-serif;
  background: #fff;
  color: #111;
  min-height: 100vh;
  -webkit-font-smoothing: antialiased;
}

.gate {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 24px;
}

.gate-card {
  max-width: 380px;
  width: 100%;
  text-align: center;
}

.gate-label {
  font-size: 0.6rem;
  font-weight: 600;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #0052FF;
  margin-bottom: 24px;
}

.gate-title {
  font-size: 1.4rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  margin-bottom: 8px;
}

.gate-sub {
  font-size: 0.8rem;
  color: #666;
  font-weight: 300;
  margin-bottom: 32px;
  line-height: 1.5;
}

.gate-input {
  width: 100%;
  padding: 12px 16px;
  font-family: 'Sora', sans-serif;
  font-size: 0.85rem;
  font-weight: 400;
  border: 1px solid #E0E0E0;
  border-radius: 4px;
  outline: none;
  transition: border-color 0.2s;
  text-align: center;
  letter-spacing: 0.04em;
}

.gate-input:focus {
  border-color: #0052FF;
}

.gate-input.error {
  border-color: #dc2626;
  animation: shake 0.4s ease;
}

@keyframes shake {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-6px); }
  75% { transform: translateX(6px); }
}

.gate-btn {
  width: 100%;
  margin-top: 12px;
  padding: 12px;
  font-family: 'Sora', sans-serif;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  background: #111;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.2s;
}

.gate-btn:hover { background: #333; }

.gate-error {
  font-size: 0.72rem;
  color: #dc2626;
  margin-top: 12px;
  opacity: 0;
  transition: opacity 0.2s;
}

.gate-error.visible { opacity: 1; }

.gate-footer {
  margin-top: 40px;
  font-size: 0.65rem;
  color: #AAA;
  letter-spacing: 0.04em;
}

.gate.hidden { display: none; }

/* Spinner */
.gate-btn.loading {
  pointer-events: none;
  opacity: 0.7;
}
</style>
</head>
<body>

<div class="gate" id="gate">
  <div class="gate-card">
    <div class="gate-label">Vitolero</div>
    <h1 class="gate-title">Protected Content</h1>
    <p class="gate-sub">Enter the password to view this deliverable.</p>
    <form id="gateForm">
      <input type="password" class="gate-input" id="gateInput" placeholder="Password" autocomplete="off" autofocus>
      <button type="submit" class="gate-btn" id="gateBtn">Unlock</button>
      <p class="gate-error" id="gateError">Incorrect password. Please try again.</p>
    </form>
    <div class="gate-footer">Fixed to Flow &middot; Confidential</div>
  </div>
</div>

<div id="content" style="display:none"></div>

<script id="payload" type="application/octet-stream">${payloadB64}</script>

<script>
(function() {
  const ITERATIONS = ${ITERATIONS};
  const STORAGE_KEY = 'vtl_auth';

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
    btn.textContent = 'Decrypting...';

    // Small delay to let the UI update before heavy PBKDF2
    await new Promise(r => setTimeout(r, 50));

    const ok = await unlock(pw);
    if (!ok) {
      btn.classList.remove('loading');
      btn.textContent = 'Unlock';
      input.classList.add('error');
      errorEl.classList.add('visible');
      setTimeout(() => input.classList.remove('error'), 400);
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
