import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';

// Initialize Redis and Rate Limiter if environment variables are available
const redis = process.env.UPSTASH_REDIS_REST_URL
  ? new Redis({
      url: process.env.UPSTASH_REDIS_REST_URL,
      token: process.env.UPSTASH_REDIS_REST_TOKEN || '',
    })
  : null;

// Allow 3 requests per minute per IP
const ratelimit = redis
  ? new Ratelimit({
      redis: redis,
      limiter: Ratelimit.slidingWindow(3, '1 m'),
    })
  : null;

// Initialize Resend with the API key from environment variables
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    // 1. Rate Limiting Check
    if (ratelimit) {
      const ip = req.headers.get('x-forwarded-for') ?? '127.0.0.1';
      const { success } = await ratelimit.limit(ip);

      if (!success) {
        return NextResponse.json(
          {
            error:
              'Too many requests. Please wait a minute before trying again.',
          },
          { status: 429 }
        );
      }
    }

    const formData = await req.formData();
    const data = {
      name:
        (formData.get('name') as string) ||
        (formData.get('fullName') as string),
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      company: formData.get('company') as string,
      service: formData.get('service') as string,
      date: formData.get('date') as string,
      time: formData.get('time') as string,
      message: formData.get('message') as string,
      description: formData.get('description') as string,
    };

    const file = formData.get('file') as File | null;
    let attachments = [];

    // 2. Turnstile CAPTCHA Verification
    const turnstileToken = formData.get('cf-turnstile-response') as
      | string
      | null;

    if (!turnstileToken) {
      return NextResponse.json(
        { error: 'Security challenge failed. Please complete the CAPTCHA.' },
        { status: 400 }
      );
    }

    const verifyEndpoint =
      'https://challenges.cloudflare.com/turnstile/v0/siteverify';
    const secretKey = process.env.TURNSTILE_SECRET_KEY as string;

    const captchaResponse = await fetch(verifyEndpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `secret=${encodeURIComponent(secretKey)}&response=${encodeURIComponent(turnstileToken)}`,
    });

    const captchaOutcome = await captchaResponse.json();

    if (!captchaOutcome.success) {
      return NextResponse.json(
        { error: 'CAPTCHA verification failed. Please try again.' },
        { status: 400 }
      );
    }

    // 3. Process File Attachments
    if (file && file.size > 0) {
      const buffer = Buffer.from(await file.arrayBuffer());
      attachments.push({
        filename: file.name,
        content: buffer,
      });
    }

    // Basic validation
    if (!data.email || !data.name) {
      return NextResponse.json(
        { error: 'Name and email are required fields.' },
        { status: 400 }
      );
    }

    // Construct the email content dynamically based on the provided fields
    let htmlContent = `<h2>New Form Submission</h2>`;
    htmlContent += `<p><strong>Name:</strong> ${data.name}</p>`;
    htmlContent += `<p><strong>Email:</strong> ${data.email}</p>`;

    if (data.phone)
      htmlContent += `<p><strong>Phone:</strong> ${data.phone}</p>`;
    if (data.company)
      htmlContent += `<p><strong>Company:</strong> ${data.company}</p>`;
    if (data.service)
      htmlContent += `<p><strong>Service of Interest:</strong> ${data.service}</p>`;
    if (data.date)
      htmlContent += `<p><strong>Preferred Date:</strong> ${data.date}</p>`;
    if (data.time)
      htmlContent += `<p><strong>Preferred Time:</strong> ${data.time}</p>`;
    if (data.message || data.description) {
      htmlContent += `<h3>Message/Description</h3>`;
      htmlContent += `<p>${data.message || data.description}</p>`;
    }

    // Send the email using Resend
    const result = await resend.emails.send({
      from: 'The Vigital Contact <hello@thevigital.com>', // Send from your verified domain
      to: 'hello@thevigital.com', // The destination email address
      subject: `New Lead: ${data.name} - ${data.service || 'General Inquiry'}`,
      html: htmlContent,
      replyTo: data.email, // Allows you to hit "Reply" directly to the user
      attachments: attachments.length > 0 ? attachments : undefined,
    });

    if (result.error) {
      console.error('Resend Error:', result.error);
      return NextResponse.json(
        {
          error:
            result.error.message || 'Failed to send email. Provider error.',
        },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, id: result.data?.id });
  } catch (error) {
    console.error('API Route Error:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred.' },
      { status: 500 }
    );
  }
}
