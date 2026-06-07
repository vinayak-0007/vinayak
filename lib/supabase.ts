import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

// Server-side client using service role key to bypass RLS
// Only used in Server Actions and API routes — never exposed to the client
export const supabase = createClient(supabaseUrl, supabaseServiceKey);
