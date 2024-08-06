import { emojisCategory, emojisMood } from '@/helpers/emoji'
import { category, mood } from '@/store/emoji'
import type { EmojiList, EmojiMode } from '@/types/Emoji'
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
            emojisSelected.map((emojiSelected: EmojiList) => (
              <img
                loading='eager'
                decoding='async'
                key={`${emojiSelected.alt}-${mode}`}
                src={
                      emojis.find(
                        (emoji) =>
                          emoji.label === emojiSelected.label
                      )?.src
                    }
                alt={emojiSelected.alt}
                width={50}
                height={50}
              />
            ))
      }
    </div>
  )
}
