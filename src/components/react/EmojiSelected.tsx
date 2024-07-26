import { emojisCategory, emojisMood } from '@/helpers/emoji'
import { category, mood } from '@/store/emojiStore'
import type { EmojiMode } from '@/types/Emoji'
import { useStore } from '@nanostores/react'

export default function EmojiSelected ({ mode }: { mode: EmojiMode }): JSX.Element {
  const $mood = useStore(mood)
  const $category = useStore(category)

  const emojis = mode === 'mood' ? emojisMood : emojisCategory
  const emojisSelected = mode === 'mood' ? $mood : $category

  return (
    <div className='flex flex-row justify-center items-center gap-5'>
      {
        emojisSelected.length > 0 &&
            emojisSelected.map((emojiSelected: string) => (
              <img
                key={`${emojiSelected}-${mode}`}
                src={
                        emojis.find(
                          (emoji) =>
                            emoji.label === emojiSelected
                        )?.src
                    }
                alt={emojiSelected}
                width={50}
                height={50}
              />
            ))
      }
    </div>
  )
}
