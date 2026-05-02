import type { NextApiRequest, NextApiResponse } from 'next'

const rateLimit = new Map<string, number>()
const defaultContactEmail = 'justin.graham1616@gmail.com'
const defaultFromEmail = 'Justin Graham <onboarding@resend.dev>'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { message } = req.body
  const trimmedMessage = typeof message === 'string' ? message.trim() : ''

  if (!trimmedMessage || trimmedMessage.length > 5000) {
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
  if (!process.env.RESEND_API_KEY) {
    console.error('Contact form is missing RESEND_API_KEY')
    return res.status(503).json({ error: 'Email is not configured' })
  }

  try {
    const { Resend } = await import('resend')
    const resend = new Resend(process.env.RESEND_API_KEY)
    const to = process.env.CONTACT_EMAIL || defaultContactEmail
    const from = process.env.FROM_EMAIL || defaultFromEmail

    const { data, error } = await resend.emails.send({
      from,
      to,
      subject: 'New message from justingraham.dev',
      text: `New contact form message:\n\n${trimmedMessage}\n\nSent from justingraham.dev contact form.`,
    })

    if (error) {
      console.error('Email send failed:', error)
      return res.status(502).json({ error: 'Failed to send message' })
    }

    rateLimit.set(ip, Date.now())
    return res.status(200).json({ success: true, id: data?.id })
  } catch (error) {
    console.error('Email send failed:', error)
    return res.status(500).json({ error: 'Failed to send message' })
  }
}
