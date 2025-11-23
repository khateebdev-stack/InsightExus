import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

// Logo as base64 - This allows embedding in emails without external hosting
const LOGO_BASE64 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="; // Replace with actual logo

export async function POST(request) {
    try {
        const body = await request.json();
        const { name, email, subject, service, budget, message, files: fileData } = body;

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_APP_PASSWORD
            }
        });

        const attachments = fileData && fileData.length > 0
            ? fileData.map(file => ({
                filename: file.name,
                content: Buffer.from(file.data, 'base64'),
                contentType: file.type
            }))
            : [];

        // Admin Email - Professional & Information-Rich
        const adminMailOptions = {
            from: process.env.GMAIL_USER,
            to: process.env.ADMIN_EMAIL,
            subject: `📧 New Contact: ${subject}`,
            html: `
                <!DOCTYPE html>
                <html>
                <head>
                    <meta charset="utf-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                </head>
                <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background: #f3f4f6;">
                    <table width="100%" cellpadding="0" cellspacing="0" style="background: #f3f4f6; padding: 40px 20px;">
                        <tr>
                            <td align="center">
                                <table width="600" cellpadding="0" cellspacing="0" style="background: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
                                    <!-- Header -->
                                    <tr>
                                        <td style="background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%); padding: 40px 30px; text-align: center;">
                                            <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: bold;">New Contact Submission</h1>
                                            <p style="margin: 10px 0 0 0; color: #e0e7ff; font-size: 14px;">You have a new inquiry from your website</p>
                                        </td>
                                    </tr>
                                    
                                    <!-- Content -->
                                    <tr>
                                        <td style="padding: 40px 30px;">
                                            <!-- Subject Badge -->
                                            <div style="background: #f3e8ff; border-left: 4px solid #8b5cf6; padding: 16px 20px; border-radius: 8px; margin-bottom: 30px;">
                                                <div style="color: #6b7280; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px;">Subject</div>
                                                <div style="color: #111827; font-size: 18px; font-weight: 600;">${subject}</div>
                                            </div>
                                            
                                            <!-- Contact Info -->
                                            <table width="100%" cellpadding="12" cellspacing="0" style="background: #f9fafb; border-radius: 12px; margin-bottom: 30px;">
                                                <tr>
                                                    <td style="padding: 20px;">
                                                        <table width="100%" cellpadding="0" cellspacing="0">
                                                            <tr>
                                                                <td width="120" style="color: #6b7280; font-size: 14px; padding-bottom: 12px;">👤 Name:</td>
                                                                <td style="color: #111827; font-size: 14px; font-weight: 600; padding-bottom: 12px;">${name}</td>
                                                            </tr>
                                                            <tr>
                                                                <td style="color: #6b7280; font-size: 14px; padding-bottom: 12px;">📧 Email:</td>
                                                                <td style="color: #6366f1; font-size: 14px; font-weight: 600; padding-bottom: 12px;">
                                                                    <a href="mailto:${email}" style="color: #6366f1; text-decoration: none;">${email}</a>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td style="color: #6b7280; font-size: 14px; padding-bottom: 12px;">💼 Service:</td>
                                                                <td style="color: #111827; font-size: 14px; font-weight: 600; padding-bottom: 12px;">${service}</td>
                                                            </tr>
                                                            <tr>
                                                                <td style="color: #6b7280; font-size: 14px;">💰 Budget:</td>
                                                                <td style="color: #111827; font-size: 14px; font-weight: 600;">${budget}</td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                            
                                            <!-- Message -->
                                            <div style="margin-bottom: 30px;">
                                                <h3 style="margin: 0 0 16px 0; color: #111827; font-size: 16px; font-weight: 600;">Message:</h3>
                                                <div style="background: #ffffff; border: 2px solid #e5e7eb; border-left: 4px solid #6366f1; padding: 20px; border-radius: 8px; color: #374151; line-height: 1.6; font-size: 14px;">
                                                    ${message}
                                                </div>
                                            </div>
                                            
                                            ${attachments.length > 0 ? `
                                            <!-- Attachments -->
                                            <div style="background: #fef3c7; border: 2px solid #fcd34d; border-radius: 8px; padding: 16px 20px;">
                                                <strong style="color: #92400e; font-size: 14px;">📎 ${attachments.length} Attachment${attachments.length > 1 ? 's' : ''}</strong>
                                                <div style="margin-top: 8px; color: #92400e; font-size: 13px;">${attachments.map(a => a.filename).join(', ')}</div>
                                            </div>
                                            ` : ''}
                                            
                                            <!-- Action Button -->
                                            <div style="text-align: center; margin-top: 40px;">
                                                <a href="mailto:${email}" style="display: inline-block; background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%); color: #ffffff; padding: 14px 32px; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 14px; box-shadow: 0 4px 6px rgba(99, 102, 241, 0.3);">
                                                    Reply to ${name}
                                                </a>
                                            </div>
                                        </td>
                                    </tr>
                                    
                                    <!-- Footer -->
                                    <tr>
                                        <td style="background: #f9fafb; padding: 24px 30px; text-align: center; border-top: 1px solid #e5e7eb;">
                                            <p style="margin: 0; color: #6b7280; font-size: 12px;">
                                                Sent from Insightexus Contact Form<br>
                                                ${new Date().toLocaleString('en-US', { dateStyle: 'full', timeStyle: 'short' })}
                                            </p>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                </body>
                </html>
            `,
            attachments: attachments
        };

        // Client Confirmation Email - Welcoming & Professional
        const clientMailOptions = {
            from: process.env.GMAIL_USER,
            to: email,
            subject: `✅ Message Confirmation  - ${subject}`,
            html: `
                <!DOCTYPE html>
                <html>
                <head>
                    <meta charset="utf-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                </head>
                <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background: #0f172a;">
                    <table width="100%" cellpadding="0" cellspacing="0" style="background: linear-gradient(180deg, #1e293b 0%, #0f172a 100%); padding: 40px 20px;">
                        <tr>
                            <td align="center">
                                <table width="600" cellpadding="0" cellspacing="0" style="background: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.5);">
                                    <!-- Header with Logo -->
                                    <tr>
                                        <td style="background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%); padding: 50px 30px; text-align: center;">
                                            <div style="background: #ffffff; width: 80px; height: 80px; margin: 0 auto 20px; border-radius: 16px; display: flex; align-items: center; justify-content: center; box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);">
                                                <img src="${process.env.NEXT_PUBLIC_SITE_URL}/logo2.png" alt="Insightexus" style="width: 60px; height: 60px; object-fit: contain;" />
                                            </div>
                                            <h1 style="margin: 0; color: #ffffff; font-size: 32px; font-weight: bold;">Insightexus</h1>
                                            <p style="margin: 12px 0 0 0; color: #e0e7ff; font-size: 16px; font-weight: 500;">Your Digital Engine Team</p>
                                        </td>
                                    </tr>
                                    
                                    <!-- Content -->
                                    <tr>
                                        <td style="padding: 50px 40px;">
                                            <div style="text-align: center; margin-bottom: 30px;">
                                                <div style="background: #10b981; width: 64px; height: 64px; margin: 0 auto; border-radius: 50%; display: flex; align-items: center; justify-content: center;">
                                                    <span style="color: #ffffff; font-size: 32px;">✓</span>
                                                </div>
                                            </div>
                                            
                                            <h2 style="margin: 0 0 16px 0; color: #111827; font-size: 28px; font-weight: bold; text-align: center;">Thank You, ${name.split(' ')[0]}!</h2>
                                            <p style="margin: 0 0 30px 0; color: #6b7280; font-size: 16px; line-height: 1.6; text-align: center;">
                                                We've successfully received your message and our team is reviewing it now.
                                            </p>
                                            
                                            <!-- Summary Card -->
                                            <div style="background: linear-gradient(135deg, #f3e8ff 0%, #ddd6fe 100%); border-radius: 12px; padding: 30px; margin-bottom: 30px;">
                                                <h3 style="margin: 0 0 20px 0; color: #6b21a8; font-size: 18px; font-weight: 600; text-align: center;">Submission Summary</h3>
                                                <table width="100%" cellpadding="0" cellspacing="0">
                                                    <tr>
                                                        <td style="padding: 10px 0;">
                                                            <strong style="color: #6b21a8; font-size: 14px;">Subject:</strong><br>
                                                            <span style="color: #111827; font-size: 16px;">${subject}</span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style="padding: 10px 0; border-top: 1px solid #c4b5fd;">
                                                            <strong style="color: #6b21a8; font-size: 14px;">Service Interest:</strong><br>
                                                            <span style="color: #111827; font-size: 16px;">${service}</span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style="padding: 10px 0; border-top: 1px solid #c4b5fd;">
                                                            <strong style="color: #6b21a8; font-size: 14px;">Budget Range:</strong><br>
                                                            <span style="color: #111827; font-size: 16px;">${budget}</span>
                                                        </td>
                                                    </tr>
                                                    ${attachments.length > 0 ? `
                                                    <tr>
                                                        <td style="padding: 10px 0; border-top: 1px solid #c4b5fd;">
                                                            <strong style="color: #6b21a8; font-size: 14px;">Attachments:</strong><br>
                                                            <span style="color: #111827; font-size: 16px;">${attachments.length} file${attachments.length > 1 ? 's' : ''}</span>
                                                        </td>
                                                    </tr>
                                                    ` : ''}
                                                </table>
                                            </div>
                                            
                                            <!-- Your Message -->
                                            <div style="background: #f9fafb; border-left: 4px solid #6366f1; padding: 20px; border-radius: 8px; margin-bottom: 30px;">
                                                <h4 style="margin: 0 0 12px 0; color: #111827; font-size: 14px; font-weight: 600;">Your Message:</h4>
                                                <div style="color: #374151; font-size: 14px; line-height: 1.6;">
                                                    ${message}
                                                </div>
                                            </div>
                                            
                                            <!-- What's Next -->
                                            <div style="background: #ecfdf5; border: 2px solid #10b981; border-radius: 12px; padding: 24px; margin-bottom: 30px;">
                                                <h3 style="margin: 0 0 12px 0; color: #065f46; font-size: 18px; font-weight: 600;">⚡ What Happens Next?</h3>
                                                <ul style="margin: 0; padding-left: 20px; color: #047857; font-size: 14px; line-height: 1.8;">
                                                    <li>Our team reviews your requirements within <strong>24 hours</strong></li>
                                                    <li>We'll reach out to schedule an initial consultation</li>
                                                    <li>Together, we'll craft a tailored solution for your needs</li>
                                                </ul>
                                            </div>
                                            
                                            <!-- CTA Button -->
                                            <div style="text-align: center; margin-bottom: 30px;">
                                                <a href="${process.env.NEXT_PUBLIC_SITE_URL}" style="display: inline-block; background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%); color: #ffffff; padding: 16px 40px; text-decoration: none; border-radius: 12px; font-weight: 600; font-size: 16px; box-shadow: 0 10px 15px -3px rgba(99, 102, 241, 0.4);">
                                                    Explore Our Portfolio
                                                </a>
                                            </div>
                                            
                                            <!-- Divider -->
                                            <div style="height: 1px; background: #e5e7eb; margin: 30px 0;"></div>
                                            
                                            <!-- Contact Info -->
                                            <p style="margin: 0; color: #6b7280; font-size: 14px; line-height: 1.6; text-align: center;">
                                                Questions? Feel free to reply to this email or reach us at<br>
                                                <a href="mailto:${process.env.ADMIN_EMAIL}" style="color: #6366f1; text-decoration: none; font-weight: 600;">${process.env.ADMIN_EMAIL}</a>
                                            </p>
                                        </td>
                                    </tr>
                                    
                                    <!-- Footer -->
                                    <tr>
                                        <td style="background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%); padding: 40px 30px; text-align: center;">
                                            <p style="margin: 0 0 12px 0; color: #e0e7ff; font-size: 16px; font-weight: 600;">
                                                Building Digital Engines for Tomorrow
                                            </p>
                                            <p style="margin: 0; color: #94a3b8; font-size: 12px;">
                                                © ${new Date().getFullYear()} Insightexus. All rights reserved.<br>
                                                <em>This is an automated confirmation. Please do not reply if you don't need assistance.</em>
                                            </p>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                </body>
                </html>
            `
        };

        await transporter.sendMail(adminMailOptions);
        await transporter.sendMail(clientMailOptions);

        return NextResponse.json({
            success: true,
            message: 'Emails sent successfully'
        });

    } catch (error) {
        console.error('Email sending error:', error);
        return NextResponse.json(
            { success: false, error: 'Failed to send email', details: error.message },
            { status: 500 }
        );
    }
}
