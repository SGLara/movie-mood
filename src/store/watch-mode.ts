import type { WatchMode } from '@/types/Watch'
import { atom } from 'nanostores'

export const watchMode = atom<WatchMode>('movie')
