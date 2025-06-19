import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = import.meta.env.VITE_SB_URL;
const SUPABASE_KEY = import.meta.env.VITE_SB_KEY;

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY, () => {
  console.log("Conectado con Supabase ✅");
});
