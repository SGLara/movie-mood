const options = {
  method: 'GET',
  headers: {
    accept: 'application/json'
  }
}

export const getMovieDetails = async (movieId: number): Promise<any> => {
  try {
    const movie = await fetch(`${import.meta.env.PUBLIC_TMDB_API_URL}/movie/${movieId}?append_to_response=images,videos&language=en-US&api_key=${import.meta.env.PUBLIC_TMDB_API_KEY}`, options)
    const movieInfo = await movie.json()
    return movieInfo
  } catch (error) {
    throw new Error('Movie not found')
  }
}

export const getTvSerieDetails = async (tvSerieId: number): Promise<any> => {
  try {
    const tvSerie = await fetch(`${import.meta.env.PUBLIC_TMDB_API_URL}/tv/${tvSerieId}?append_to_response=images,videos&language=en-US&api_key=${import.meta.env.PUBLIC_TMDB_API_KEY}`, options)
    const tvSerieInfo = await tvSerie.json()
    return tvSerieInfo
  } catch (error) {
    throw new Error('Tv Serie not found')
  }
}

export const getMovies = async (): Promise<any[]> => {
  try {
    const movies = await fetch(`${import.meta.env.PUBLIC_TMDB_API_URL}/discover/movie?language=en-US&api_key=${import.meta.env.PUBLIC_TMDB_API_KEY}`, options)
    const moviesInfo = await movies.json()
    return moviesInfo.results
  } catch (error) {
    throw new Error('Movies not found')
  }
}

export const getTvSeries = async (): Promise<any[]> => {
  try {
    const tvSeries = await fetch(`${import.meta.env.PUBLIC_TMDB_API_URL}/discover/tv?language=en-US&api_key=${import.meta.env.PUBLIC_TMDB_API_KEY}`, options)
    const tvSeriesInfo = await tvSeries.json()
    return tvSeriesInfo.results
  } catch (error) {
    throw new Error('Tv Series not found')
  }
}
