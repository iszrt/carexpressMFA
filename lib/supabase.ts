import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://gjpnuafjidunmoqwprmy.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdqcG51YWZqaWR1bm1vcXdwcm15Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQyMTAyODYsImV4cCI6MjA1OTc4NjI4Nn0.jl9OTRFySOEJRQDRBRy_3S4P0NYo6gEcLhqcVsiWfOs';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})