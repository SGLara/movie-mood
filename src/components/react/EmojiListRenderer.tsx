import { MAX_CATEGORY_EMOJI_SELECTED, MAX_MOOD_EMOJI_SELECTED } from '@/config/emoji'
import { emojisCategory, emojisMood } from '@/helpers/emoji'
import { category, mood } from '@/store/emojiStore'
import type { EmojiList, EmojiMode, EmojiSelected } from '@/types/Emoji'
import { useStore } from '@nanostores/react'

export default function EmojiListRenderer (
  { mode }: { mode: EmojiMode }
): JSX.Element {
  let emojis: EmojiList[] = []
  let selectedEmojisState: EmojiSelected = []

  switch (mode) {
    case 'mood':
      emojis = emojisMood
      selectedEmojisState = useStore(mood)
      break
    case 'category':
      emojis = emojisCategory
      selectedEmojisState = useStore(category)
      break
  }

  const handleEmojiClick = (emojiLabel: string, mode: EmojiMode): void => {
    switch (mode) {
      case 'mood':
        if (selectedEmojisState.length < MAX_MOOD_EMOJI_SELECTED && !selectedEmojisState.includes(emojiLabel)) {
          mood.set([...selectedEmojisState, emojiLabel])
        } else {
          mood.set([...selectedEmojisState.filter((moodEmoji: string) => moodEmoji !== emojiLabel)])
        }
        break
      case 'category':
        if (selectedEmojisState.length < MAX_CATEGORY_EMOJI_SELECTED && !selectedEmojisState.includes(emojiLabel)) {
          category.set([...selectedEmojisState, emojiLabel])
        } else {
          category.set([...selectedEmojisState.filter((categoryEmoji: string) => categoryEmoji !== emojiLabel)])
        }
        break
    }
  }

  return (
    <ul id={`${mode}-emoji-list`} className='grid justify-center items-center grid-rows-2 grid-cols-5 gap-5 overflow-auto w-full'>
      {
        emojis.map((emoji) => (
          <li
            className={`${selectedEmojisState.includes(emoji.label) ? 'bg-slate-300' : ''} flex flex-col justify-center items-center text-center w-28 hover:bg-slate-500 active:bg-slate-500 rounded-lg px-5 cursor-pointer`}
            key={emoji.label}
            onClick={() => handleEmojiClick(emoji.label, mode)}
          >
            <img src={emoji.src} alt={emoji.alt} width={50} height={50} />
            <p>{emoji.label.charAt(0).toUpperCase() + emoji.label.slice(1).toLowerCase()}</p>
          </li>
        ))
      }
    </ul>
  )
}
