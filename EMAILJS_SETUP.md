# EmailJS Setup Guide

To enable actual email sending (admin notification + client confirmation), follow these steps:

## 1. Create EmailJS Account
Visit [https://www.emailjs.com/](https://www.emailjs.com/) and create a free account.

## 2. Setup Email Service
1. Go to "Email Services" and connect your email provider (Gmail, Outlook, etc.)
2. Note your **Service ID**

## 3. Create Email Templates

### Admin Template (for receiving contact form submissions)
Create a template with these variables:
- `{{from_name}}` - Client's name
- `{{from_email}}` - Client's email  
- `{{service}}` - Service they're interested in
- `{{budget}}` - Their budget
- `{{message}}` - Their formatted message (HTML)
- `{{files}}` - List of attached files

Example template:
```
New Contact Form Submission

From: {{from_name}} ({{from_email}})
Service: {{service}}
Budget: {{budget}}

Message:
{{message}}

Attachments: {{files}}
```

Note the **Template ID**.

### Client Template (for confirmation email)
Create a template with these variables:
- `{{to_name}}` - Client's name
- `{{service}}` - Service they inquired about
- `{{budget}}` - Their budget

Example template:
```
Hi {{to_name}},

Thank you for contacting Insightexus! We've received your inquiry about {{service}}.

Our team will review your request and get back to you within 24 hours.

Best regards,
The Insightexus Team
```

Note the **Template ID**.

## 4. Get Public Key
Go to "Account" → "API Keys" and copy your **Public Key**.

## 5. Update Code
Open `src/components/ImprovedContactForm.jsx` and replace:

```javascript
// Line ~52-53: Uncomment and replace these:
await emailjs.send('YOUR_SERVICE_ID', 'ADMIN_TEMPLATE_ID', adminParams, 'YOUR_PUBLIC_KEY');
await emailjs.send('YOUR_SERVICE_ID', 'CLIENT_TEMPLATE_ID', clientParams, 'YOUR_PUBLIC_KEY');
```

With your actual credentials:
```javascript
await emailjs.send('service_abc123', 'template_admin_xyz', adminParams, 'user_XYZ123ABC');
await emailjs.send('service_abc123', 'template_client_xyz', clientParams, 'user_XYZ123ABC');
```

## 6. Test
1. Run `npm run dev`
2. Go to `/contact`
3. Fill out and submit the form
4. Check both admin and client emails

## Free Tier Limits
- 200 emails/month
- Perfect for testing and small sites
- Upgrade if you need more
