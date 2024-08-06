import { AISuggestions } from '@/lib/ai-suggestions'
import { getMovieDetails, getMovies } from '@/services/TMDB'
import { category, mood } from '@/store/emoji'
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
  const categorySelected = useStore(category)
  const moodSelected = useStore(mood)

  const getMoviesData = async (): Promise<any> => {
    const mappedCategories = categorySelected.map((category: EmojiList) => category.id) as number[]
    const movies = await getMovies({ categoryIds: mappedCategories })

    const suggestions = await AISuggestions(movies, moodSelected[0])

    if (suggestions === false) {
      setMovies(movies)
    } else {
      const suggestionData = movies.filter((movie: any) => suggestions.includes(movie.id))
      setMovies(suggestionData)
    }
  }

  const getMovieInfo = async (movieId: number): Promise<any> => {
    const movieInfo = await getMovieDetails(movieId)
    selectedResource.set(movieInfo)
  }

  return {
    movies,
    getMoviesData,
    getMovieInfo
  }
}
