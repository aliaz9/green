import supabaseClient from '../src/config/supabaseClient.js';
import openAi from '../src/config/openAi.js';

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

async function searchToys() {
  //  Handle CORS
  // if (req.method === 'OPTIONS') {
  //   return new Response('ok', { headers: corsHeaders })
  // }
  // Search query is passed in request payload
  // const { query } = await req.json()
  const query = "Juguete para un nene al que le gusta mucho el agua";
  // OpenAI recommends replacing newlines with spaces for best results
  const input = query.replace(/\n/g, ' ')
  // Generate a one-time embedding for the query itself
  const embeddingResponse = await openAi.createEmbedding({
    model: 'text-embedding-ada-002',
    input,
  })
  const embedding = embeddingResponse.data.data[0].embedding;
  const { data: similarToys } = await supabaseClient.rpc('search_toys', {
    query_embedding: embedding,
    match_threshold: 0.78, // Choose an appropriate threshold for your data
    match_count: 2, // Choose the number of matches
  })
  // return new Response(JSON.stringify(similarToys), {
  //   headers: { ...corsHeaders, 'Content-Type': 'application/json' },
  // })
  console.log(similarToys)
}

(async () => {
  await searchToys();
})();