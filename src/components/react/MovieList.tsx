
import moviesData from '@/api/movies.json'
import { selectedMovie } from '@/store/movies'
import { useEffect } from 'react'

export default function MovieList (): JSX.Element {
  const movies = moviesData.results

  useEffect(() => {
    if (movies.length > 0) {
      const movieId = movies[0].id

      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json'
        }
      }

      const getMovieInfo = async (movieId: number): Promise<void> => {
        const movie = await fetch(`${import.meta.env.PUBLIC_TMDB_API_URL}/movie/${movieId}?append_to_response=images,videos&language=en-US&api_key=${import.meta.env.PUBLIC_TMDB_API_KEY}`, options)
        const movieInfo = await movie.json()

        selectedMovie.set(movieInfo)
      }

      void getMovieInfo(movieId)
    }
  }, [movies])

  const handleMovieClick = async (movieId: number): Promise<void> => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json'
      }
    }

    const movie = await fetch(`${import.meta.env.PUBLIC_TMDB_API_URL}/movie/${movieId}?append_to_response=images,videos&language=en-US&api_key=${import.meta.env.PUBLIC_TMDB_API_KEY}`, options)
    const movieInfo = await movie.json()

    selectedMovie.set(movieInfo)
  }

  return (
    <ul
      className='flex flex-col w-full mt-2 gap-3 rounded-lg overflow-x-auto scroll-hidden'
    >
      {
        movies.map((movie, index: number) => (
          <li
            key={movie.id}
            className='flex flex-col text-center h-auto'
            onClick={() => { void handleMovieClick(movie.id) }}
          >
            <img
              loading={index < 3 ? 'eager' : 'lazy'}
              decoding='async'
              src={'https://image.tmdb.org/t/p/original/' + movie.poster_path}
              alt={`${movie.title.toLowerCase()}-image`}
              className='rounded-lg h-56 object-cover cursor-pointer hover:scale-105 duration-300'
            />
            <p className='pt-2'>{movie.title}</p>
          </li>
        ))
      }
    </ul>
  )
}
