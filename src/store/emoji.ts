import type { EmojiList } from '@/types/Emoji'
import { persistentAtom } from '@nanostores/persistent'

export const mood = persistentAtom<EmojiList[]>('mood', [], {
  encode: JSON.stringify,
  decode: JSON.parse
})
export const category = persistentAtom<EmojiList[]>('category', [], {
  encode: JSON.stringify,
  decode: JSON.parse
})
export const emojiMode = persistentAtom<'mood' | 'category'>('emojiMode', 'mood')
