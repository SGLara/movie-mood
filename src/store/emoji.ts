import type { EmojiCategorySelected, EmojiMoodSelected } from '@/types/Emoji'
import { atom } from 'nanostores'

export const mood = atom<EmojiMoodSelected>([])
export const category = atom<EmojiCategorySelected[]>([])
export const emojiMode = atom<'mood' | 'category'>('mood')
