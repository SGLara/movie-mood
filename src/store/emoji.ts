import type { EmojiSelected } from '@/types/Emoji'
import { atom } from 'nanostores'

export const mood = atom<EmojiSelected>([])
export const category = atom<EmojiSelected>([])
export const emojiMode = atom<'mood' | 'category'>('mood')
