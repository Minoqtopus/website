# reCAPTCHA + EmailJS Setup Guide

## Why reCAPTCHA?
Since domain whitelisting requires EmailJS paid plan, reCAPTCHA provides free abuse protection by:
- Blocking automated bots
- Preventing spam submissions
- Adding human verification

## Setup Steps

### 1. Create Google reCAPTCHA Account
1. Go to [https://www.google.com/recaptcha/admin](https://www.google.com/recaptcha/admin)
2. Sign in with your Google account
3. Click "+" to create new site

### 2. Configure reCAPTCHA
- **Label**: Minoqtopus Contact Form
- **reCAPTCHA type**: Choose **v2 - Invisible reCAPTCHA badge**
  - This provides seamless protection without user interaction
  - Badge appears in bottom-right corner (can be hidden with CSS)
- **Domains**: Add:
  ```
  localhost
  minoqtopus.com
  www.minoqtopus.com
  ```

### 3. Get Your Keys
After creating, you'll receive:
- **Site Key**: (public, goes in .env.local)
- **Secret Key**: (keep private, not needed for client-side)

### 4. Update .env.local
```
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_actual_site_key_here
```

### 5. Enable in EmailJS Dashboard
1. Go to [EmailJS Dashboard](https://dashboard.emailjs.com)
2. Navigate to your template
3. Click "Settings" tab
4. Enable "reCAPTCHA" option
5. Save changes

### 6. Test the Integration
1. Restart dev server: `npm run dev`
2. Go to `/contact`
3. Fill form and complete reCAPTCHA
4. Submit and check email

## How It Works (Invisible Badge)
1. User fills form and clicks submit
2. Invisible reCAPTCHA runs automatically in background
3. Most users pass without seeing anything
4. Suspicious users may see a challenge
5. Token sent with form data to EmailJS
6. Email only sent if verification passes

## Protection Layers
With invisible reCAPTCHA, you have:
- ✅ **Invisible reCAPTCHA**: Blocks bots without user friction
- ✅ **Smart challenges**: Only suspicious users see verification
- ✅ **Client-side rate limiting**: 10-second cooldown
- ✅ **EmailJS rate limit**: 200 emails/month (free tier)
- ✅ **Zero friction**: Legitimate users submit forms seamlessly

## Troubleshooting
- **reCAPTCHA not showing**: Check site key in .env.local
- **"Invalid domain" error**: Add domain to reCAPTCHA settings
- **EmailJS rejecting**: Enable reCAPTCHA in EmailJS template settings
- **Still getting spam**: Consider upgrading to reCAPTCHA v3 (invisible)

## Hiding the Badge (Optional)
Google requires the badge OR the privacy text. Since we show the privacy text, you can hide the badge:
```css
.grecaptcha-badge { 
  visibility: hidden;
}
```

## Remove reCAPTCHA
To disable reCAPTCHA, simply leave `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` empty in .env.local