import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

let supabase = null
try {
  if (supabaseUrl && supabaseAnonKey) {
    supabase = createClient(supabaseUrl, supabaseAnonKey)
  }
} catch (e) {
  console.warn('Supabase init failed:', e.message)
}

export { supabase }

export async function submitLead({ full_name, phone, form_source }) {
  if (!full_name?.trim() || !phone?.trim()) {
    return { error: 'Name and phone are required' }
  }
  if (!supabase) {
    console.warn('Supabase not configured — lead not saved')
    return { error: null }
  }
  try {
    const { error } = await supabase.from('leads').insert([{
      full_name: full_name.trim(),
      phone: phone.trim(),
      form_source,
      page_url: typeof window !== 'undefined' ? window.location.href : '',
      created_at: new Date().toISOString(),
    }])
    return { error: error?.message ?? null }
  } catch (e) {
    return { error: 'Ошибка отправки. Попробуйте позже.' }
  }
}
