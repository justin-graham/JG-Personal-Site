import type { NextApiRequest, NextApiResponse } from 'next'

const rateLimit = new Map<string, number>()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { message } = req.body

  if (!message || typeof message !== 'string' || message.length > 5000) {
    return res.status(400).json({ error: 'Invalid message' })
  }

  // Simple rate limit: 1 message per minute per IP
  const ip =
    (req.headers['x-forwarded-for'] as string)?.split(',')[0] || 'unknown'
  const lastSent = rateLimit.get(ip) || 0
  if (Date.now() - lastSent < 60000) {
    return res
      .status(429)
      .json({ error: 'Please wait before sending another message' })
  }
  rateLimit.set(ip, Date.now())

  // If RESEND_API_KEY is configured, send email via Resend
  if (process.env.RESEND_API_KEY) {
    try {
      const { Resend } = await import('resend')
      const resend = new Resend(process.env.RESEND_API_KEY)

      await resend.emails.send({
        from: process.env.FROM_EMAIL || 'Website <onboarding@resend.dev>',
        to: process.env.CONTACT_EMAIL || 'your@email.com',
        subject: 'New message from justingraham.dev',
        text: `New contact form message:\n\n${message}\n\nSent from justingraham.dev contact form.`,
      })

      return res.status(200).json({ success: true })
    } catch (error) {
      console.error('Email send failed:', error)
      return res.status(500).json({ error: 'Failed to send message' })
    }
  }

  // If no email service configured, just log and return success
  console.log('Contact form message (no email configured):', message)
  return res.status(200).json({ success: true })
}
