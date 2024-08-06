
import movieGenres from '@/api/movie-genres.json'
import type { EmojiList } from '@/types/Emoji'
import type { MovieDetails } from '@/types/TMDBApi'
import { createOpenAI } from '@ai-sdk/openai'
import { generateText } from 'ai'

if (import.meta.env.PUBLIC_PERPLEXITY_API_KEY === '') {
  throw new Error(
    'PUBLIC_PERPLEXITY_API_KEY environment variable is required. You can get this via https://vercel.com/docs/integrations/ai'
  )
}

const perplexity = createOpenAI({
  apiKey: import.meta.env.PUBLIC_PERPLEXITY_API_KEY ?? '',
  baseURL: 'https://api.perplexity.ai/'
})

export async function AISuggestions (resourceData: MovieDetails[], mood: EmojiList): Promise<any> {
  if (resourceData.length === 0) return false

  const promptText = `I would like you to suggest me a list of movies to watch based on the following data: ${JSON.stringify(resourceData)}. 
    I would like you to return a list of movies IDs that you consider that adapts easily to this mood: "${mood.label}"; taking into account each overview and the following genres id that matches the movies 'genre_id' field:
    ${JSON.stringify(movieGenres)}.
    
    Please only return the movie IDs array as a response. I don't want any other text that is NOT the movie IDs array. Get 10 movies min and max.
    DO NOT RETURN ANYTHING ELSE. JUST RETURN THE MOVIE IDs ARRAY. Example of a valid response:
    ["idExample3", "idExample2"]`

  const { text } = await generateText({
    model: perplexity('llama-3-sonar-small-32k-chat'),
    prompt: promptText
  })

  return text
}
