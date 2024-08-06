import type { MovieDetails } from '@/types/TMDBApi'
import { atom } from 'nanostores'

export const selectedResource = atom<MovieDetails | {}>({})
