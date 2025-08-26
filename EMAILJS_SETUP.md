# EmailJS Setup Guide

## Quick Setup Steps

1. **Create EmailJS Account**
   - Go to [https://www.emailjs.com](https://www.emailjs.com)
   - Sign up for a free account (200 emails/month)

2. **Add Email Service**
   - In dashboard, click "Email Services" → "Add New Service"
   - Choose Gmail/Outlook/other provider
   - Connect your email account
   - Copy the **Service ID** (looks like: `service_abc123`)

3. **Create Email Template**
   - Click "Email Templates" → "Create New Template"
   - Use this template:

   **Subject:** New Contact Form Submission from {{from_name}}
   
   **Content:**
   ```
   You have a new contact form submission:
   
   Name: {{from_name}}
   Email: {{from_email}}
   Company: {{company}}
   Project Type: {{project_type}}
   Budget: {{budget}}
   
   Message:
   {{message}}
   ```
   
   - Set "To Email" to your email address
   - Copy the **Template ID** (looks like: `template_xyz789`)

4. **Get Your Public Key**
   - Click "Account" → "API Keys"
   - Copy your **Public Key**

5. **Update .env.local**
   ```
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_abc123
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xyz789
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
   ```

6. **Restart Development Server**
   ```bash
   npm run dev
   ```

## Testing
- Fill out the contact form on `/contact`
- Check your email inbox
- Form will show success message if email sent

## Troubleshooting
- Check browser console for errors
- Verify all three environment variables are set
- Ensure email service is active in EmailJS dashboard
- Check spam folder for test emails