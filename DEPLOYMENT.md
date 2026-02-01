# OpenOrbit Astro - Vercel Deployment

## 🚀 Quick Deploy

### 1. Vercel Dashboard Setup

Go to your Vercel project dashboard and set these environment variables:

```env
# Required for contact forms
SENDGRID_API_KEY=your_sendgrid_api_key_here
CONTACT_EMAIL=hello@openorbit.io
FROM_EMAIL=noreply@openorbit.io
COMPANY_NAME=OpenOrbit

# Optional
NODE_ENV=production
```

### 2. Build Settings

In Vercel dashboard, use these settings:
- **Framework Preset**: Astro
- **Root Directory**: `astro`
- **Build Command**: `pnpm build` (or `npm run build`)
- **Output Directory**: `dist`
- **Install Command**: `pnpm install` (or `npm install`)

### 3. Domain Configuration

Set your domain in `astro.config.mjs`:
```javascript
site: 'https://your-domain.com'
```

## 📋 Pre-Deployment Checklist

- [ ] Environment variables configured in Vercel
- [ ] SendGrid API key is valid
- [ ] Domain configured correctly
- [ ] Images uploaded to public folder:
  - [ ] og-image.jpg (1200x630)
  - [ ] logo.png (512x512)
  - [ ] favicon.ico
  - [ ] apple-touch-icon.png
- [ ] Search console verification codes added to Layout.astro

## 🔧 Build Configuration

The project uses:
- **@astrojs/vercel** adapter for serverless deployment
- **Hybrid rendering**: Static pages + Server API for forms
- **Tailwind CSS v3** for styling
- **Framer Motion** for animations

## 🐛 Troubleshooting

### Build fails with Tailwind errors
- Make sure you're using `@astrojs/tailwind` (v3), not v4
- Check `astro.config.mjs` has the tailwind integration

### Forms not working
- Check `SENDGRID_API_KEY` is set in Vercel environment variables
- Verify email addresses are correct
- Check function logs in Vercel dashboard

### Static assets not loading
- Ensure files are in `/public` directory
- Check that `dist` output is correctly configured

## 📊 Post-Deployment

1. Test contact forms
2. Check all pages load correctly
3. Verify SEO meta tags with [Facebook Debugger](https://developers.facebook.com/tools/debug/)
4. Test with [Google Rich Results Test](https://search.google.com/test/rich-results)
5. Check performance with [PageSpeed Insights](https://pagespeed.web.dev/)
