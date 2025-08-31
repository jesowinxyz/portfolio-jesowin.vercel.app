# Jesowin Portfolio Website

*Automatically synced with your [v0.dev](https://v0.dev) deployments*

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/jesowinraja6-3375s-projects/v0-jesowin-portfolio-website)
[![Built with v0](https://img.shields.io/badge/Built%20with-v0.dev-black?style=for-the-badge)](https://v0.dev/chat/projects/yLkxzSD6P7o)

## Overview

This repository will stay in sync with your deployed chats on [v0.dev](https://v0.dev).
Any changes you make to your deployed app will be automatically pushed to this repository from [v0.dev](https://v0.dev).

## Deployment

Your project is live at:

**[https://vercel.com/jesowinraja6-3375s-projects/v0-jesowin-portfolio-website](https://vercel.com/jesowinraja6-3375s-projects/v0-jesowin-portfolio-website)**

## Build your app

Continue building your app on:

**[https://v0.dev/chat/projects/yLkxzSD6P7o](https://v0.dev/chat/projects/yLkxzSD6P7o)**

## How It Works

1. Create and modify your project using [v0.dev](https://v0.dev)
2. Deploy your chats from the v0 interface
3. Changes are automatically pushed to this repository
4. Vercel deploys the latest version from this repository

<!-- Added Cloudflare Pages deployment instructions -->
## Deploy to Cloudflare Pages

This project has been configured for static export and is ready to deploy on Cloudflare Pages.

### Method 1: Connect GitHub Repository

1. Go to [Cloudflare Pages](https://pages.cloudflare.com/)
2. Click "Create a project" → "Connect to Git"
3. Select this repository
4. Configure build settings:
   - **Build command**: `npm run build`
   - **Build output directory**: `out`
   - **Root directory**: `/` (leave empty)
5. Click "Save and Deploy"

### Method 2: Direct Upload

1. Clone this repository locally
2. Install dependencies: `npm install`
3. Build the project: `npm run build`
4. Go to [Cloudflare Pages](https://pages.cloudflare.com/)
5. Click "Create a project" → "Upload assets"
6. Upload the contents of the `out` folder
7. Your site will be deployed instantly

### Build Configuration

The project uses:
- **Static Export**: Configured with `output: 'export'` in `next.config.mjs`
- **Trailing Slashes**: Enabled for better compatibility
- **Unoptimized Images**: Ready for static hosting

Your Cloudflare Pages deployment will automatically handle routing and serve your portfolio as a fast, globally distributed static site.
