import { watchMode } from '@/store/watch-mode'
import { useStore } from '@nanostores/react'

export default function WatchMenu (): JSX.Element {
  const mode = useStore(watchMode)

  return (
    <ul
      className='flex flex-col items-center gap-5 rounded-lg uppercase text-lg font-light cursor-pointer'
    >
      <li
        className={`hover:bg-slate-300/20 rounded-md px-5 py-2 w-full ${mode === 'movie' ? 'bg-slate-300/30' : ''}`}
        onClick={() => { watchMode.set('movie') }}
      >
        Movies
      </li>
      {/* <li
        className={`hover:bg-slate-300/20 rounded-md px-5 py-2 w-full ${mode === 'tv' ? 'bg-slate-300/30' : ''}`}
        onClick={() => { watchMode.set('tv') }}
      >
        Tv Series
      </li> */}
    </ul>
  )
}
