import type { EmojiList } from '@/types/Emoji'
import { atom } from 'nanostores'

export const mood = atom<EmojiList[]>([])
export const category = atom<EmojiList[]>([])
export const emojiMode = atom<'mood' | 'category'>('mood')
