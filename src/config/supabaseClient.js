import { createClient } from "@supabase/supabase-js";
// import dotenv from 'dotenv'

//dotenv.config();

const supabaseClient = createClient("https://bgitqfphuplxykecaexv.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJnaXRxZnBodXBseHlrZWNhZXh2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODMyMDg2NTgsImV4cCI6MTk5ODc4NDY1OH0.Uzya4hqcBx7fEB9rwI7id3fZ9yqqIObzWdxRUHfqZkg");


// const supabaseURL = process.env.SUPABASE_ANON_KEY
// const supabaseKey = process.env.SUPABASE_KEY
// const supabase = createClient(supabaseURL, supabaseKey)

export default supabaseClient;