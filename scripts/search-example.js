import { serve } from 'https://deno.land/std@0.170.0/http/server.ts'
import 'https://deno.land/x/xhr@0.2.1/mod.ts'
import { Configuration, OpenAIApi } from 'openai'
import supabase from '../src/config/supabaseClient.js';

// export const corsHeaders = {
//   'Access-Control-Allow-Origin': '*',
//   'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
// }


// const supabaseOptions = {
//     headers: {
//       'Content-Type': 'application/json',
//       'apikey': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJnaXRxZnBodXBseHlrZWNhZXh2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODMyMDg2NTgsImV4cCI6MTk5ODc4NDY1OH0.Uzya4hqcBx7fEB9rwI7id3fZ9yqqIObzWdxRUHfqZkg",
//       'Authorization': `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJnaXRxZnBodXBseHlrZWNhZXh2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODMyMDg2NTgsImV4cCI6MTk5ODc4NDY1OH0.Uzya4hqcBx7fEB9rwI7id3fZ9yqqIObzWdxRUHfqZkg"}`,
//     },
//     database: 'toys', // Especifica el nombre de la base de datos aquí
//   }



const handler = async (req) => {
  try {
    //const { query, apiKey, matches } = await req.json();
    const query = "Juguete para niños que les gustan las pelotas";
    const input = query.replace(/\n/g, " ");
    const res = await fetch("https://api.openai.com/v1/embeddings", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${"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"}`
      },
      method: "POST",
      body: JSON.stringify({
        model: "text-embedding-ada-002",
        input
      })
    });
    const json = await res.json();
    const embedding = json.data[0].embedding;
    const { data: toys, error } = await supabase.rpc("search_toys", {
      query_embedding: embedding,
      similarity_threshold: 0.01,
      match_count: matches
    });
    if (error) {
      console.error(error);
      return new Response("Error", { status: 500 });
    }
    return new Response(JSON.stringify(toys), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response("Error", { status: 500 });
  }
};

export default handler;