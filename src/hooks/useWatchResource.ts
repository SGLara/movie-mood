import { getMovieDetails, getMovies, getTvSerieDetails, getTvSeries } from '@/services/TMDB'
import { category } from '@/store/emoji'
import { selectedResource } from '@/store/watch-resource'
import type { EmojiList } from '@/types/Emoji'
import { useStore } from '@nanostores/react'
import { useState } from 'react'

export default function useWatchResource (): {
  movies: any[]
  getMoviesData: () => Promise<any>
  getMovieInfo: (movieId: number) => Promise<any>
} {
  const [movies, setMovies] = useState<any[]>([])
  const [tvSeries, setTvSeries] = useState<any[]>([])
  const categorySelected = useStore(category)

  const getMoviesData = async (): Promise<any> => {
    const mappedCategories = categorySelected.map((category: EmojiList) => category.id) as number[]
    const movies = await getMovies({ categoryIds: mappedCategories })
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
