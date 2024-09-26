// @ts-nocheck
import type { APIRoute } from 'astro'

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json'
  }
}

export const GET: APIRoute = async ({ url }) => {
  try {
    const categoryIds: string = url.searchParams.get('category_ids')

    const response = await fetch(`${import.meta.env.TMDB_API_URL}/discover/movie?language=en-US&with_genres=${categoryIds}&api_key=${import.meta.env.TMDB_API_KEY}`, options)
    const results = await response.json()

    return new Response(
      JSON.stringify({
        data: results.results
      })
    )
  } catch (error) {
    throw new Error('Movies not found')
  }
}
