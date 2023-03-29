import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.REACT_APP_SUPABASE;
const supabaseAnonkey = process.env.REACT_APP_SUPABASE_ANON_KEY;

export const supabase = createClient (supabaseUrl, supabaseAnonkey);
