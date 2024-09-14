import type { APIRoute } from 'astro'

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json'
  }
}

export const GET: APIRoute = async ({ params }) => {
  try {
    const movieId: number = params.movieId
    const response = await fetch(`${import.meta.env.TMDB_API_URL}/movie/${movieId}?append_to_response=images,videos&language=en-US&api_key=${import.meta.env.PUBLIC_TMDB_API_KEY}`, options)
    const data = await response.json()

    return new Response(
      JSON.stringify({
        data
      })
    )
  } catch (error) {
    throw new Error('Movie not found')
  }
}
