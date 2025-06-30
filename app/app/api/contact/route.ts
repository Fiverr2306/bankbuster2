// app/api/contact/route.ts

import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  const { name, email, subject, message } = await req.json()

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
  }

  try {
    const data = await resend.emails.send({
      from: process.env.EMAIL_FROM || 'onboarding@resend.dev',
      to: process.env.EMAIL_TO || 'save@bankbuster.net',
      subject: subject || 'New Contact Form Submission',
      html: `
        <h3>Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${subject ? `<p><strong>Subject:</strong> ${subject}</p>` : ''}
        <p><strong>Message:</strong><br/>${message.replace(/\n/g, '<br/>')}</p>
      `
    })

    return NextResponse.json({ success: true, data })
  } catch (error) {
    console.error('Email sending error:', error)
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
  }
}
