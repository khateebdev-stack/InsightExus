# Gmail Email Configuration Guide

## Setup Instructions

1. **Create `.env.local` file** in the project root with these variables:

```env
# Gmail Configuration
GMAIL_USER=your-email@gmail.com
GMAIL_APP_PASSWORD=your-app-password-here

# Admin Email (where contact form submissions are sent)
ADMIN_EMAIL=admin@insightexus.com

# Site Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

2. **Get Gmail App Password**:
   - Go to your Google Account: https://myaccount.google.com/
   - Security → 2-Step Verification (enable if not already)
   - Scroll down to "App passwords"
   - Create new app password for "Mail"
   - Copy the 16-character password
   - Paste it as `GMAIL_APP_PASSWORD` in `.env.local`

3. **Update Gmail User**:
   - Replace `your-email@gmail.com` with your actual Gmail address

4. **Set Admin Email**:
   - Replace `admin@insightexus.com` with the email where you want to receive contact form submissions

5. **Restart Dev Server**:
   ```bash
   npm run dev
   ```

## How It Works

- **Admin Email**: You receive a detailed email with the client's message, service interest, budget, and attachments
- **Client Email**: The client receives an automatic confirmation email thanking them for contacting you

## Security Notes

- Never commit `.env.local` to Git (it's already in `.gitignore`)
- Use App Password, not your regular Gmail password
- Keep your credentials secure
