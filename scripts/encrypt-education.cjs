const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const password = '康';
const plaintextPath = path.join(process.cwd(), 'secure', 'education.json');
const outDir = path.join(process.cwd(), 'public', 'secure');
const outPath = path.join(outDir, 'education.enc.json');

if (!fs.existsSync(plaintextPath)) {
  console.error('Missing plaintext file:', plaintextPath);
  process.exit(1);
}

const data = fs.readFileSync(plaintextPath, 'utf8');
const salt = crypto.randomBytes(16);
const iv = crypto.randomBytes(12);
const key = crypto.pbkdf2Sync(Buffer.from(password, 'utf8'), salt, 250000, 32, 'sha256');
const cipher = crypto.createCipheriv('aes-256-gcm', key, iv);
const ctPart = Buffer.concat([cipher.update(data, 'utf8'), cipher.final()]);
const tag = cipher.getAuthTag();
const ct = Buffer.concat([ctPart, tag]);

fs.mkdirSync(outDir, { recursive: true });
const payload = { salt: salt.toString('base64'), iv: iv.toString('base64'), ct: ct.toString('base64') };
fs.writeFileSync(outPath, JSON.stringify(payload));
console.log('Encrypted to', outPath);
