import { selectedResource } from '@/store/watch-resource'
import type { MovieDetails } from '@/types/TMDBApi'
import { useStore } from '@nanostores/react'

export default function SuggestionBackground (): JSX.Element {
  const movie = useStore(selectedResource) as MovieDetails

  return (
    <img
      loading='eager'
      decoding='async'
      className='h-screen w-full absolute bg-cover bg-center bg-no-repeat'
      src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
    />
  )
}
