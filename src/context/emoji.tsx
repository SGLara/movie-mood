import { createContext, useState } from 'react'

type EmojiMode = 'mood' | 'category'

export const EmojiContext = createContext({})

export const EmojiProvider = (
  { children }: { children: React.ReactNode }
): JSX.Element => {
  const [mood, setMood] = useState<string[]>([])
  const [category, setCategory] = useState<string[]>([])
  const [emojiMode, setEmojiMode] = useState<EmojiMode>('mood')

  return (
    <EmojiContext.Provider
      value={{
        mood,
        setMood,
        category,
        setCategory,
        emojiMode,
        setEmojiMode
      }}
    >
      {children}
    </EmojiContext.Provider>
  )
}
