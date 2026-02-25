import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const email = formData.get('email') as string;
    
    // Capture Lead Tracking Data
    const leadData = {
      source_url: formData.get('source_url') as string,
      form_name: formData.get('form_name') as string,
      utm_source: formData.get('utm_source') as string,
      utm_medium: formData.get('utm_medium') as string,
      utm_campaign: formData.get('utm_campaign') as string,
      utm_term: formData.get('utm_term') as string,
      utm_content: formData.get('utm_content') as string,
    };

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required.' },
        { status: 400 }
      );
    }

    let htmlContent = `<h2>New Newsletter Subscriber</h2>`;
    htmlContent += `<p><strong>Email:</strong> ${email}</p>`;

    if (leadData.form_name) {
      htmlContent += `
        <hr style="margin: 20px 0; border: none; border-top: 1px solid #eaeaea;" />
        <h3>Lead Tracking Data</h3>
        <p><strong>Form Name:</strong> ${leadData.form_name}</p>
        <p><strong>Source URL:</strong> <a href="${leadData.source_url}">${leadData.source_url}</a></p>
      `;
      
      if (leadData.utm_source || leadData.utm_campaign) {
        htmlContent += `<div style="background-color: #f9f9f9; padding: 10px; border-radius: 5px; margin-top: 10px;">
          <p style="margin: 0 0 5px 0;"><strong>UTM Parameters:</strong></p>
          <ul style="margin: 0; padding-left: 20px;">
            ${leadData.utm_source ? `<li><strong>Source:</strong> ${leadData.utm_source}</li>` : ''}
            ${leadData.utm_medium ? `<li><strong>Medium:</strong> ${leadData.utm_medium}</li>` : ''}
            ${leadData.utm_campaign ? `<li><strong>Campaign:</strong> ${leadData.utm_campaign}</li>` : ''}
            ${leadData.utm_term ? `<li><strong>Term:</strong> ${leadData.utm_term}</li>` : ''}
            ${leadData.utm_content ? `<li><strong>Content:</strong> ${leadData.utm_content}</li>` : ''}
          </ul>
        </div>`;
      }
    }

    // Send the email using Resend
    const result = await resend.emails.send({
      from: 'The Vigital Newsletter <hello@thevigital.com>',
      to: 'hello@thevigital.com',
      subject: `New Newsletter Subscriber: ${email}`,
      html: htmlContent,
      replyTo: email,
    });

    if (result.error) {
      console.error('Resend Error:', result.error);
      return NextResponse.json(
        { error: result.error.message || 'Failed to subscribe. Provider error.' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, id: result.data?.id });
  } catch (error) {
    console.error('Newsletter API Route Error:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred.' },
      { status: 500 }
    );
  }
}
