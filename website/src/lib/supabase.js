import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Supabase env vars missing: VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY are required')
}

export const supabase = createClient(supabaseUrl ?? '', supabaseAnonKey ?? '')

export async function submitLead({ full_name, phone, form_source }) {
  if (!full_name?.trim() || !phone?.trim()) {
    return { error: 'Name and phone are required' }
  }
  const { error } = await supabase.from('leads').insert([{
    full_name: full_name.trim(),
    phone: phone.trim(),
    form_source,
    page_url: typeof window !== 'undefined' ? window.location.href : '',
    created_at: new Date().toISOString(),
  }])
  return { error: error?.message ?? null }
}
