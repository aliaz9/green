import supabaseClient from '../src/config/supabaseClient.js';
import openAi from '../src/config/openAi.js';

async function generateEmbeddings() {

  // Objeto de ejemplo.
  const toys = [
    {
      id: 1,
      title: "Pelota",
      description: "Es para jugar futbol",
      context: "Es para jugar futbol",

    },
    {
      id: 2,
      title: "Castillo",
      description: "Es para crear historias",
      context: "Es para crear historias",

    },
    {
      id: 3,
      title: "Pileta",
      description: "Es para nadar",
      context: "Es para nadar",

    }
  ]

  for (const toy of toys) {
    const toyDescription = toy.description;
    // OpenAI recommends replacing newlines with spaces for best results
    const input = toyDescription.replace(/\n/g, ' ')
    const embeddingResponse = await openAi.createEmbedding({
      model: 'text-embedding-ada-002',
      input
    });
    const embedding = embeddingResponse.data.data[0].embedding
    await supabaseClient.from('toys').insert({
      //id: toy.id,
      title: toy.title,
      description: toy.description,
      context: toy.context,
      embedding,
    })
  }
}

(async () => {
  await generateEmbeddings();
})();