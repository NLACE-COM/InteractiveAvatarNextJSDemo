import { createClient } from "@supabase/supabase-js";

const key =
  process.env.SUPABASE_SERVICE_ROLE_KEY ?? process.env.SUPABASE_ANON_KEY;

if (!key) throw new Error("Missing Supabase key");

export const supabase = createClient(process.env.SUPABASE_URL!, key);
