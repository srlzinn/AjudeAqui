import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://xasyxnzqmdfsawpfowem.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhhc3l4bnpxbWRmc2F3cGZvd2VtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzMxNDU2ODgsImV4cCI6MjA0ODcyMTY4OH0.1as-IYQp9Ov86nMXdQuv4oegHo-yTEk59mzuK_MuzfM';

const supabaseInstance = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export default {
  install: (app) => {
    app.config.globalProperties.$supabase = supabaseInstance
  }
}


