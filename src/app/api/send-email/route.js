import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(request) {
    try {
        const body = await request.json();
        const { name, email, service, budget, message, files: fileData } = body;

        // Create transporter with Gmail
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_APP_PASSWORD
            }
        });

        // Prepare attachments if files are provided
        const attachments = fileData && fileData.length > 0
            ? fileData.map(file => ({
                filename: file.name,
                content: Buffer.from(file.data, 'base64'),
                contentType: file.type
            }))
            : [];

        // Admin Email (detailed submission with attachments)
        const adminMailOptions = {
            from: process.env.GMAIL_USER,
            to: process.env.ADMIN_EMAIL,
            subject: `New Contact Form Submission from ${name}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #6366f1;">New Contact Form Submission</h2>
                    
                    <div style="background: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
                        <p><strong>Name:</strong> ${name}</p>
                        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
                        <p><strong>Service Interest:</strong> ${service}</p>
                        <p><strong>Budget:</strong> ${budget}</p>
                    </div>
                    
                    <div style="margin: 20px 0;">
                        <h3>Message:</h3>
                        <div style="background: white; padding: 15px; border-left: 4px solid #6366f1;">
                            ${message}
                        </div>
                    </div>
                    
                    ${attachments.length > 0 ? `
                    <div style="margin: 20px 0;">
                        <p><strong>📎 Attachments:</strong> ${attachments.length} file(s) attached</p>
                    </div>
                    ` : ''}
                    
                    <hr style="border: 1px solid #e5e7eb; margin: 30px 0;">
                    
                    <p style="color: #6b7280; font-size: 14px;">
                        This email was sent from the Insightexus contact form.
                    </p>
                </div>
            `,
            attachments: attachments
        };

        // Client Confirmation Email (includes copy of their message)
        const clientMailOptions = {
            from: process.env.GMAIL_USER,
            to: email,
            subject: 'Thank you for contacting Insightexus - We received your message!',
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <div style="background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%); padding: 40px; text-align: center; border-radius: 8px 8px 0 0;">
                        <h1 style="color: white; margin: 0;">Insightexus</h1>
                    </div>
                    
                    <div style="padding: 40px; background: #f9fafb; border-radius: 0 0 8px 8px;">
                        <h2 style="color: #111827;">Hi ${name},</h2>
                        
                        <p style="color: #374151; line-height: 1.6;">
                            Thank you for reaching out to us! We've received your inquiry and wanted to confirm the details you submitted:
                        </p>
                        
                        <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #6366f1;">
                            <p style="margin: 0; color: #6b7280;"><strong>Service Interest:</strong> ${service}</p>
                            <p style="margin: 10px 0; color: #6b7280;"><strong>Budget Range:</strong> ${budget}</p>
                            ${attachments.length > 0 ? `<p style="margin: 10px 0 0 0; color: #6b7280;"><strong>Attachments:</strong> ${attachments.length} file(s) submitted</p>` : ''}
                        </div>
                        
                        <div style="background: #f3f4f6; padding: 15px; border-radius: 8px; margin: 20px 0;">
                            <h3 style="margin: 0 0 10px 0; color: #111827; font-size: 16px;">Your Message:</h3>
                            <div style="color: #374151; line-height: 1.6;">
                                ${message}
                            </div>
                        </div>
                        
                        <p style="color: #374151; line-height: 1.6;">
                            Our team will carefully review your requirements and get back to you within <strong>24 hours</strong>.
                        </p>
                        
                        <p style="color: #374151; line-height: 1.6;">
                            If you have any additional information or questions in the meantime, feel free to reply to this email.
                        </p>
                        
                        <div style="text-align: center; margin: 30px 0;">
                            <a href="${process.env.NEXT_PUBLIC_SITE_URL}" 
                               style="background: #6366f1; color: white; padding: 12px 30px; text-decoration: none; border-radius: 6px; display: inline-block; font-weight: bold;">
                                Visit Our Website
                            </a>
                        </div>
                        
                        <hr style="border: 1px solid #e5e7eb; margin: 30px 0;">
                        
                        <p style="color: #6b7280; font-size: 14px; text-align: center;">
                            Best regards,<br>
                            <strong>The Insightexus Team</strong>
                        </p>
                        
                        <p style="color: #9ca3af; font-size: 12px; text-align: center; margin-top: 20px;">
                            This is an automated confirmation email. Please do not reply to this email if you need assistance - instead, send a new message through our contact form.
                        </p>
                    </div>
                </div>
            `
        };

        // Send both emails
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
