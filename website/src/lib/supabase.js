import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

let supabase = null
try {
  if (supabaseUrl && supabaseAnonKey) {
    supabase = createClient(supabaseUrl, supabaseAnonKey)
    console.log('[Supabase] client initialized, url:', supabaseUrl)
  } else {
    console.warn('[Supabase] MISSING env vars — VITE_SUPABASE_URL and/or VITE_SUPABASE_ANON_KEY not set. Leads will NOT be saved.')
  }
} catch (e) {
  console.error('[Supabase] init error:', e.message)
}

export { supabase }

export async function submitLead({ full_name, phone, form_source }) {
  if (!full_name?.trim() || !phone?.trim()) {
    return { error: 'Name and phone are required' }
  }
  if (!supabase) {
    console.error('[Supabase] submitLead called but client is null — env vars missing')
    return { error: 'Сервис временно недоступен. Позвоните нам напрямую.' }
  }
  try {
    console.log('[Supabase] inserting lead:', { full_name: full_name.trim(), phone: phone.trim(), form_source })
    const { data, error } = await supabase.from('leads').insert([{
      full_name: full_name.trim(),
      phone: phone.trim(),
      form_source,
      page_url: typeof window !== 'undefined' ? window.location.href : '',
    }]).select()
    if (error) {
      console.error('[Supabase] insert error:', error)
      return { error: `Ошибка: ${error.message}` }
    }
    console.log('[Supabase] insert success, row:', data)
    return { error: null }
  } catch (e) {
    console.error('[Supabase] unexpected error:', e)
    return { error: 'Ошибка отправки. Попробуйте позже.' }
  }
}
