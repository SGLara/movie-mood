export type EmojiMode = 'mood' | 'category'

export interface EmojiList {
  id?: number
  src: string
  label: string
  alt: string
}

export type EmojiMoodSelected = string[]

export interface EmojiCategorySelected {
  id: number
  name: string
}
