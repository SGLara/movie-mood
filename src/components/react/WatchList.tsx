
import WatchElement from '@/components/react/WatchElement'
import useWatchResource from '@/hooks/useWatchResource'
import { useEffect } from 'react'

export default function WatchList (): JSX.Element {
  const { movies, getMoviesData, getMovieInfo } = useWatchResource()

  useEffect(() => {
    void getMoviesData()
  }, [])

  useEffect(() => {
    if (movies.length > 0) {
      void getMovieInfo(movies[0].id)
    }
  }, [movies])

  const handleResourceClick = (id: number): void => {
    void getMovieInfo(id)
  }

  return (
    <ul
      className='flex flex-col w-full mt-2 gap-3 rounded-lg overflow-x-auto scroll-hidden'
    >
      {
        movies.map((resource: any, index: number) => (
          <WatchElement key={resource.id} resource={resource} index={index} handleResourceClick={handleResourceClick} />
        ))
      }
    </ul>
  )
}
