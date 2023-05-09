import { createClient } from '@supabase/supabase-js'
import { Configuration, OpenAIApi } from 'openai'
import dotenv from 'dotenv'
//import { supabaseClient } from './'

dotenv.config();


function getToys() {

}

async function generateEmbeddings() {
  const configuration = new Configuration({ apiKey: process.env.OPENAI_API_KEY })
  const openAi = new OpenAIApi(configuration)

  const supabase = createClient(process.env.VITE_SUPABASE_URL, process.env.VITE_SUPABASE_ANON_KEY);

//   const supabase ARMAR SUPABASE CON CONFIG
//const toys = await getToys() // Your custom function to load docs

  const toys = [
    {
        id: 1,
        title: "Pelota",
        description: "Es para jugar futbol",
        content: "Content 1",

    }
    // {
    //     id: 2,
    //     title: "Castillo",
    //     description: "Es para crear historias",
    //     content: "Content 2",

    // },
    // {
    //     id: 3,
    //     title: "Pileta",
    //     description: "Es para nadar",
    //     content: "Content 3",

    // }
  ]

  // Assuming each document is a string
  for (const toy of toys) {
    // OpenAI recommends replacing newlines with spaces for best results
    //const input = toy.replace(/\n/g, ' ')
    const input = toy.description

    const embeddingResponse = await openAi.createEmbedding({
      model: 'text-embedding-ada-002',
      input
    });

    const [{ embedding }] = embeddingResponse.data.data

    // In production we should handle possible errors
    await supabase.from('toys').insert({
      
      id: toys.id,
      title: title.id,
      description: description.id,  
      content: toys.content,
      embedding,

    })
  }
}

(async () => {
    await generateEmbeddings();
})();