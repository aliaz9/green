import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({ apiKey: "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" })
const openAi = new OpenAIApi(configuration)

export default openAi;