// @ts-nocheck

import { AISuggestions } from '@/lib/ai-suggestions'
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
    const res = await fetch('api/movies.json?category_ids=' + mappedCategories.join(','))
    const movies = await res.json()

    const suggestions = await AISuggestions(movies.data, moodSelected[0])

    if (suggestions === false) {
      setMovies(movies.data)
    } else {
      const suggestionData = movies.data.filter((movie: any) => suggestions.includes(movie.id))
      setMovies(suggestionData)
    }
  }

  const getMovieInfo = async (movieId: number): Promise<any> => {
    const res = await fetch(`api/movies-details/${movieId}`)
    const movieInfo = await res.json()

    selectedResource.set(movieInfo.data)
  }

  return {
    movies,
    getMoviesData,
    getMovieInfo
  }
}
