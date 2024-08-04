import { selectedMovie } from '@/store/movies'
import type { Genres } from '@/types/Movie'
import { useStore } from '@nanostores/react'

export default function MovieInfo (): JSX.Element {
  const movie = useStore(selectedMovie)

  if (!movie.title) return <div>Loading...</div>

  const runtimeFormated = (minutes: number): string => {
    const hours = Math.floor(minutes / 60)
    const minutesLeft = minutes % 60
    return `${hours} h ${minutesLeft} mins`
  }

  return (
    <section className='relative flex w-full h-full overflow-hidden'>
      <div
        className='absolute bottom-0 flex flex-row justify-between items-center w-full h-64 p-10 bg-gradient-to-t from-50% from-black/60 to-100%'
      >
        <div
          className='flex flex-col justify-center items-start overflow-hidden w-full h-full'
        >
          <ul
            className='flex flex-row justify-between items-center gap-10 uppercase text-lg font-light'
          >
            {
              movie.genres.slice(0, 4).map((genre: Genres) => (
                <li key={genre.id}>
                  {genre.name}
                </li>
              ))
            }
          </ul>

          <h1
            className='text-5xl font-bold uppercase spacing tracking-wide'
          >
            {movie.title}
          </h1>
          <p className='text-md'>{runtimeFormated(movie.runtime)}</p>
        </div>

        <div
          className='flex flex-col justify-evenly items-center overflow-hidden w-full h-full'
        >
          <h3 className='text-lg uppercase tracking-widest'>Storyline</h3>
          <p>
            {movie.overview}
          </p>
        </div>
      </div>
    </section>
  )
}
