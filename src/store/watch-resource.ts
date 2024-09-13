import type { MovieDetails } from '@/types/TMDBApi'
import { persistentAtom } from '@nanostores/persistent'

export const selectedResource = persistentAtom<MovieDetails | {}>('selectedResource', {}, {
  encode: JSON.stringify,
  decode: JSON.parse
})
