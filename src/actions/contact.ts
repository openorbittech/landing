import { defineAction } from 'astro:actions';
import { z } from 'zod';
import sgMail from '@sendgrid/mail';

// Initialize SendGrid with API key from environment variables
if (import.meta.env.SENDGRID_API_KEY) {
  sgMail.setApiKey(import.meta.env.SENDGRID_API_KEY);
}

export const contact = defineAction({
  accept: 'form',
  input: z.object({
    email: z.string().email(),
    name: z.string().optional(),
    company: z.string().optional(),
    message: z.string().optional(),
    type: z.enum(['contact', 'newsletter']).default('contact'),
  }),
  handler: async (input) => {
    const { email, name, company, message, type } = input;

    // Get recipient email from environment variables
    const toEmail = import.meta.env.CONTACT_EMAIL || 'hello@openorbit.io';
    const fromEmail = import.meta.env.FROM_EMAIL || 'noreply@openorbit.io';
    const companyName = import.meta.env.COMPANY_NAME || 'OpenOrbit';

    // Prepare admin notification email
    let adminSubject = 'New Contact Form Submission';
    let adminText = `New submission from: ${email}`;
    let adminHtml = '';

    if (type === 'newsletter') {
      adminSubject = 'New Newsletter Subscription';
      adminText = `New newsletter subscription from: ${email}`;
      adminHtml = `
        <h2>New Newsletter Subscription</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
      `;
    } else {
      // Contact form
      adminSubject = name 
        ? `New Lead: ${name} from ${company || 'Unknown Company'}` 
        : 'New Contact Form Submission';
      
      adminText = `
        New contact form submission:
        
        Name: ${name || 'Not provided'}
        Email: ${email}
        Company: ${company || 'Not provided'}
        Message: ${message || 'No message provided'}
        
        Date: ${new Date().toLocaleString()}
      `;
      
      adminHtml = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: #f5f5f5;">
          <div style="background: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h2 style="color: #4F6DFF; margin-bottom: 20px;">🚀 New Lead Alert</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px; border-bottom: 1px solid #eee; font-weight: bold; color: #333;">Name:</td>
                <td style="padding: 12px; border-bottom: 1px solid #eee;">${name || 'Not provided'}</td>
              </tr>
              <tr>
                <td style="padding: 12px; border-bottom: 1px solid #eee; font-weight: bold; color: #333;">Email:</td>
                <td style="padding: 12px; border-bottom: 1px solid #eee;"><a href="mailto:${email}" style="color: #4F6DFF;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 12px; border-bottom: 1px solid #eee; font-weight: bold; color: #333;">Company:</td>
                <td style="padding: 12px; border-bottom: 1px solid #eee;">${company || 'Not provided'}</td>
              </tr>
              <tr>
                <td style="padding: 12px; border-bottom: 1px solid #eee; font-weight: bold; color: #333; vertical-align: top;">Message:</td>
                <td style="padding: 12px; border-bottom: 1px solid #eee;">${message || 'No message provided'}</td>
              </tr>
              <tr>
                <td style="padding: 12px; font-weight: bold; color: #333;">Date:</td>
                <td style="padding: 12px;">${new Date().toLocaleString()}</td>
              </tr>
            </table>
            <div style="margin-top: 30px; padding-top: 20px; border-top: 2px solid #eee;">
              <a href="mailto:${email}?subject=Re: Your Inquiry" style="display: inline-block; padding: 12px 24px; background: #4F6DFF; color: white; text-decoration: none; border-radius: 5px; font-weight: bold;">Reply to Lead</a>
            </div>
          </div>
          <p style="text-align: center; color: #999; font-size: 12px; margin-top: 20px;">
            This email was sent from your website contact form
          </p>
        </div>
      `;
    }

    // Prepare user confirmation email
    const userSubject = type === 'newsletter' 
      ? `Welcome to ${companyName} Newsletter!`
      : `We received your message - ${companyName}`;
    
    const userHtml = type === 'newsletter'
      ? `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: #f5f5f5;">
          <div style="background: white; padding: 30px; border-radius: 10px; text-align: center;">
            <h2 style="color: #4F6DFF;">Welcome to Our Newsletter!</h2>
            <p>Thank you for subscribing. You'll receive our latest updates and insights.</p>
          </div>
        </div>
      `
      : `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: #f5f5f5;">
          <div style="background: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h2 style="color: #4F6DFF; margin-bottom: 20px;">Thank you for reaching out!</h2>
            <p style="color: #333; line-height: 1.6;">Hi ${name || 'there'},</p>
            <p style="color: #333; line-height: 1.6;">We've received your message and our team will get back to you within <strong>24 hours</strong>.</p>
            
            <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #333; margin-bottom: 10px;">Your Message:</h3>
              <p style="color: #666; font-style: italic;">${message || 'No details provided'}</p>
            </div>
            
            <p style="color: #333; line-height: 1.6;">In the meantime, feel free to explore our <a href="https://openorbit.io/portfolio" style="color: #4F6DFF;">portfolio</a> or read our <a href="https://openorbit.io/blog" style="color: #4F6DFF;">latest insights</a>.</p>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 2px solid #eee;">
              <p style="color: #666; font-size: 14px;">Best regards,<br><strong>The ${companyName} Team</strong></p>
            </div>
          </div>
          <p style="text-align: center; color: #999; font-size: 12px; margin-top: 20px;">
            You're receiving this because you submitted a form on our website
          </p>
        </div>
      `;

    // Only send emails if SendGrid is configured
    if (import.meta.env.SENDGRID_API_KEY) {
      // Send admin notification
      const adminMsg = {
        to: toEmail,
        from: fromEmail,
        subject: adminSubject,
        text: adminText,
        html: adminHtml,
      };

      // Send user confirmation
      const userMsg = {
        to: email,
        from: fromEmail,
        subject: userSubject,
        text: `Thank you for contacting us! We'll get back to you within 24 hours.`,
        html: userHtml,
      };

      // Send both emails
      await sgMail.send([adminMsg, userMsg]);
    } else {
      // Log the email details for development
      console.log('SendGrid not configured. Emails would have been sent:');
      console.log('Admin:', { to: toEmail, subject: adminSubject });
      console.log('User:', { to: email, subject: userSubject });
    }

    return { 
      success: true,
      message: 'Message sent successfully'
    };
  },
});

export const server = {
  contact,
};
