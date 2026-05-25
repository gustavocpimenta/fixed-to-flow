#!/usr/bin/env node
/**
 * Encrypts an arbitrary binary asset (e.g. a .zip) with AES-256-GCM so it can be
 * served publicly yet only decrypted in the browser by someone who has the password.
 *
 * Output layout matches encrypt-client-page.cjs so the same client-side decrypt
 * logic applies: salt(16) + iv(12) + authTag(16) + ciphertext.
 *
 * Usage:
 *   node scripts/encrypt-client-asset.cjs <source-file> <output.enc> <password>
 */

const fs = require('fs');
const crypto = require('crypto');

const [sourcePath, outputPath, password] = process.argv.slice(2);
if (!sourcePath || !outputPath || !password) {
  console.error('Usage: node encrypt-client-asset.cjs <source-file> <output.enc> <password>');
  process.exit(1);
}

const ITERATIONS = 600000;
const salt = crypto.randomBytes(16);
const iv = crypto.randomBytes(12);
const key = crypto.pbkdf2Sync(password, salt, ITERATIONS, 32, 'sha256');

const data = fs.readFileSync(sourcePath);
const cipher = crypto.createCipheriv('aes-256-gcm', key, iv);
const encrypted = Buffer.concat([cipher.update(data), cipher.final()]);
const authTag = cipher.getAuthTag();

const payload = Buffer.concat([salt, iv, authTag, encrypted]);
fs.writeFileSync(outputPath, payload);

console.log(`Encrypted ${sourcePath} -> ${outputPath}`);
console.log(`  Source: ${(data.length / 1024).toFixed(1)} KB  Output: ${(payload.length / 1024).toFixed(1)} KB`);
console.log(`  Iterations: ${ITERATIONS}`);
