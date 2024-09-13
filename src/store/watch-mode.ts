import type { WatchMode } from '@/types/Watch'
import { persistentAtom } from '@nanostores/persistent'

export const watchMode = persistentAtom<WatchMode>('watchMode', 'movie')
