import type { MovieDetails } from '@/types/TMDBApi'

export default function WatchElement (
  { resource, index, handleResourceClick }:
  { resource: MovieDetails, index: number, handleResourceClick: (id: number) => void }
): JSX.Element {
  return (
    <li
      key={resource.id}
      className='flex flex-col text-center h-auto'
      onClick={() => { void handleResourceClick(resource.id) }}
    >
      <img
        loading={index < 3 ? 'eager' : 'lazy'}
        decoding='async'
        src={`https://image.tmdb.org/t/p/original/${resource.poster_path}`}
        alt={`${resource.title.toLowerCase()}-image`}
        className='rounded-lg h-56 object-cover cursor-pointer hover:scale-105 duration-300'
      />
      <p className='pt-2'>
        {resource.title}
      </p>
    </li>
  )
}
