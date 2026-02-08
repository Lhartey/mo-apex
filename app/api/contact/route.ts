import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    try {
        const { name, email, subject, message } = await req.json();

        if (!name || !email || !subject || !message) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        const { data, error } = await resend.emails.send({
            from: 'Mo Apex Contact <onboarding@resend.dev>', // You will need to verify your domain in Resend to change this
            to: ['moapexdesignandbuild@gmail.com'],
            subject: `New Project Inquiry: ${subject}`,
            replyTo: email,
            html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #121212;">
          <h2 style="border-bottom: 2px solid #C5A059; padding-bottom: 10px;">New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <div style="background: #f5f5f5; padding: 20px; border-radius: 4px; margin-top: 20px;">
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          <p style="margin-top: 30px; font-size: 12px; color: #888;">This email was sent from the Mo Apex Design and Build contact form.</p>
        </div>
      `,
        });

        if (error) {
            console.error('Resend Error:', error);
            return NextResponse.json({ error: error.message }, { status: 400 });
        }

        return NextResponse.json({ success: true, data });
    } catch (err: any) {
        console.error('API Error:', err);
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}
