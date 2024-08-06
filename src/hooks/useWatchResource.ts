import { getMovieDetails, getMovies, getTvSerieDetails, getTvSeries } from '@/services/TMDB'
import { selectedResource } from '@/store/watch-resource'
import { useState } from 'react'

export default function useWatchResource (): {
  movies: any[]
  getMoviesData: () => Promise<any>
  getMovieInfo: (movieId: number) => Promise<any>
} {
  const [movies, setMovies] = useState<any[]>([])
  const [tvSeries, setTvSeries] = useState<any[]>([])

  const getMoviesData = async (): Promise<any> => {
    const movies = await getMovies()
    setMovies(movies)
  }

  const getMovieInfo = async (movieId: number): Promise<any> => {
    const movieInfo = await getMovieDetails(movieId)
    selectedResource.set(movieInfo)
  }

  const getTvSeriesData = async (): Promise<any> => {
    const tvSeries = await getTvSeries()
    setTvSeries(tvSeries)
  }

  const getTvSerieInfo = async (tvSerieId: number): Promise<any> => {
    const tvSerieInfo = await getTvSerieDetails(tvSerieId)
    selectedResource.set(tvSerieInfo)
  }

  return {
    movies,
    getMoviesData,
    getMovieInfo
  }
}
