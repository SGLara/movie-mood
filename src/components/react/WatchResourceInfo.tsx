import { selectedResource } from '@/store/watch-resource'
import type { Genre, MovieDetails } from '@/types/TMDBApi'
import { useStore } from '@nanostores/react'

export default function WatchResourceInfo (): JSX.Element {
  const resource = useStore(selectedResource) as MovieDetails
  const isLoading = Object.keys(resource).length === 0

  const runtimeFormated = (minutes: number): string => {
    const hours = Math.floor(minutes / 60)
    const minutesLeft = minutes % 60
    return `${hours} h ${minutesLeft} mins`
  }

  return (
    <section className='relative flex w-full h-full overflow-hidden'>
      <div className='absolute bottom-0 gap-5 flex flex-row justify-between items-center w-full h-64 p-10 bg-gradient-to-t from-50% from-black/60 to-100%'>
        <div className='flex flex-col justify-center items-start gap-5 overflow-hidden w-full h-full'>
          <ul className='flex flex-row justify-between items-center gap-10 uppercase text-lg font-light'>
            {isLoading
              ? Array(4)
                .fill(0)
                .map((_, i) => (
                  <li key={i}>
                    <div className='w-full h-full px-14 py-4 animate-pulse bg-slate-300 rounded-sm' />
                  </li>
                ))
              : resource?.genres
                .slice(0, 4)
                .map((genre: Genre) => <li key={genre.id}>{genre.name}</li>)}
          </ul>

          <h1 className='text-5xl font-bold uppercase spacing tracking-wide'>
            {isLoading
              ? (
                <div className='w-full h-full px-80 py-10 animate-pulse bg-slate-300 rounded-sm' />
                )
              : (
                  resource?.title
                )}
          </h1>
          <p className='text-md'>
            {isLoading
              ? (
                <div className='w-full h-full px-14 py-3 animate-pulse bg-slate-300 rounded-sm' />
                )
              : (
                  runtimeFormated(resource.runtime)
                )}
          </p>
        </div>

        <div className='flex flex-col justify-evenly items-center overflow-hidden w-full h-full'>
          <h3 className='text-lg uppercase tracking-widest'>Storyline</h3>
          <p>
            {isLoading
              ? (
                <div className='w-full h-full px-96 py-80 animate-pulse bg-slate-300 rounded-sm' />
                )
              : (
                  resource.overview
                )}
          </p>
        </div>
      </div>
    </section>
  )
}
