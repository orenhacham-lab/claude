function normalizePhone(phone) {
  const digits = phone.replace(/[\s\-().+]/g, '')
  if (digits.startsWith('972')) return '+' + digits
  if (digits.startsWith('0')) return '+972' + digits.slice(1)
  return '+972' + digits
}

export function pushConversionEvent(name, phone, form_source) {
  const parts = name.trim().split(/\s+/)
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({
    event: 'form_submit_success',
    user_data: {
      phone_number: normalizePhone(phone),
      address: {
        first_name: parts[0] || '',
        last_name: parts.slice(1).join(' ') || '',
      },
    },
    full_name: name,
    phone,
    form_source,
  })
}
