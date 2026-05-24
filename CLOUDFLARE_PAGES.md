# Cloudflare Pages Deployment

This repository is primarily a React Native Android app. Cloudflare Pages cannot serve the native Android bundle directly, so the repo includes a static web preview for the public Pages URL.

Use these Cloudflare Pages settings:

- Build command: `npm run build`
- Build output directory: `dist`
- Branch: `master`
- Root directory: leave empty
- Node version: `22.11.0` or newer

If Cloudflare is currently configured with no build command and output directory as the repository root, the committed root `index.html` still works as a fallback.

The Android app is still started with:

```bash
npm install
npm run android
```

