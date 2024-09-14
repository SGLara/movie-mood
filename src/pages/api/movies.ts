// @ts-nocheck
import type { APIRoute } from 'astro'

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json'
  }
}

export const GET: APIRoute = async ({ params }) => {
  try {
    const categoryIds: number[] = params.categoryIds
    const response = await fetch(`${import.meta.env.TMDB_API_URL}/discover/movie?language=en-US&with_genres=${categoryIds.join(',')}&api_key=${import.meta.env.TMDB_API_KEY}`, options)
    const results = await response.json()
    const data = results.results

    return new Response(
      JSON.stringify({
        data
      })
    )
  } catch (error) {
    throw new Error('Movies not found')
  }
}
