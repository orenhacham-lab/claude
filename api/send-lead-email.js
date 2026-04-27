export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end()

  const { full_name, phone, form_source } = req.body || {}
  if (!full_name || !phone) return res.status(400).json({ error: 'missing fields' })

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) return res.status(500).json({ error: 'RESEND_API_KEY not set' })

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: 'onboarding@resend.dev',
      to: 'doritgt@gmail.com',
      subject: `ליד חדש מהאתר — ${full_name}`,
      html: `
        <div dir="rtl" style="font-family: Arial, sans-serif; font-size: 16px;">
          <h2 style="color: #1a3a6b;">ליד חדש מהאתר</h2>
          <p><strong>שם:</strong> ${full_name}</p>
          <p><strong>טלפון:</strong> ${phone}</p>
          <p><strong>מקור:</strong> ${form_source}</p>
        </div>
      `,
    }),
  })

  if (!response.ok) {
    const err = await response.text()
    console.error('[Resend] error:', err)
    return res.status(500).json({ error: 'email send failed' })
  }

  return res.status(200).json({ ok: true })
}
