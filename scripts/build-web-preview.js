const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const source = path.join(root, 'web', 'index.html');
const dist = path.join(root, 'dist');
const distIndex = path.join(dist, 'index.html');
const rootIndex = path.join(root, 'index.html');
const edgeFiles = ['_headers', '_redirects'];

if (!fs.existsSync(source)) {
  throw new Error(`Missing web preview source: ${source}`);
}

fs.mkdirSync(dist, { recursive: true });
const html = fs.readFileSync(source, 'utf8');

fs.writeFileSync(distIndex, html);
fs.writeFileSync(rootIndex, html);

for (const file of edgeFiles) {
  const sourceFile = path.join(root, file);
  if (fs.existsSync(sourceFile)) {
    fs.copyFileSync(sourceFile, path.join(dist, file));
  }
}

console.log('Built Cloudflare Pages preview into dist/ and root fallback index.html');
