import { create } from 'zustand'
import { supabase } from '../lib/supabase'

const useAuthStore = create((set) => ({
  user: null,
  loading: false,
  error: null,

  signUp: async (email, password) => {
    set({ loading: true, error: null })
    const { data, error } = await supabase.auth.signUp({ email, password })
    if (error) set({ error: error.message, loading: false })
    else set({ user: data.user, loading: false })
  },

  signIn: async (email, password) => {
    set({ loading: true, error: null })
    const { data, error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) set({ error: error.message, loading: false })
    else set({ user: data.user, loading: false })
  },

  signOut: async () => {
    await supabase.auth.signOut()
    set({ user: null })
  }
}))

export default useAuthStore