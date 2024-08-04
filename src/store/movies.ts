import type { MovieDetails } from '@/types/TMDBApi'
import { atom } from 'nanostores'

export const selectedMovie = atom<MovieDetails | {}>({})
