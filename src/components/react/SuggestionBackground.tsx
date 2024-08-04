import { selectedMovie } from '@/store/movies'
import type { MovieDetails } from '@/types/TMDBApi'
import { useStore } from '@nanostores/react'

export default function SuggestionBackground (): JSX.Element {
  const movie = useStore(selectedMovie) as MovieDetails

  return (
    <div
      className='h-screen w-full absolute'
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    />
  )
}
