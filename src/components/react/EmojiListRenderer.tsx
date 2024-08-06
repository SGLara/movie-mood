import { MAX_CATEGORY_EMOJI_SELECTED, MAX_MOOD_EMOJI_SELECTED } from '@/config/emoji'
import { emojisCategory, emojisMood } from '@/helpers/emoji'
import { category, mood } from '@/store/emoji'
import type { EmojiList, EmojiMode } from '@/types/Emoji'
import { useStore } from '@nanostores/react'

export default function EmojiListRenderer (
  { mode }: { mode: EmojiMode }
): JSX.Element {
  let emojis: EmojiList[] = []
  let selectedEmojisState: EmojiList[] = []

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

  const handleEmojiClick = (emoji: EmojiList, mode: EmojiMode): void => {
    switch (mode) {
      case 'mood':
        if (selectedEmojisState.length < MAX_MOOD_EMOJI_SELECTED && (selectedEmojisState.find((moodEmoji: EmojiList) => moodEmoji.label === emoji.label) == null)) {
          mood.set([...selectedEmojisState, emoji])
        } else {
          mood.set([...selectedEmojisState.filter((moodEmoji: EmojiList) => moodEmoji.label !== emoji.label)])
        }
        break
      case 'category':
        if (selectedEmojisState.length < MAX_CATEGORY_EMOJI_SELECTED && (selectedEmojisState.find((categoryEmoji: EmojiList) => categoryEmoji.label === emoji.label) == null)) {
          category.set([...selectedEmojisState, emoji])
        } else {
          category.set([...selectedEmojisState.filter((categoryEmoji: EmojiList) => categoryEmoji.label !== emoji.label)])
        }
        break
    }
  }

  return (
    <ul id={`${mode}-emoji-list`} className='grid justify-center items-center grid-rows-2 grid-cols-5 gap-5 overflow-auto w-full'>
      {
        emojis.map((emoji: EmojiList) => (
          <li
            className={`${(selectedEmojisState.find((selectedEmoji: EmojiList) => selectedEmoji.label === emoji.label) != null) ? 'bg-slate-300/30' : ''} flex flex-col justify-center items-center text-center w-28 hover:bg-slate-300/20 hover:border-slate-100 hover:border-[1px] active:bg-slate-300/30 rounded-lg px-5 cursor-pointer border-[1px] border-slate-300/0 transition-all`}
            key={emoji.label}
            onClick={() => handleEmojiClick(emoji, mode)}
          >
            <img loading='eager' decoding='async' src={emoji.src} alt={emoji.alt} width={50} height={50} />
            <p>{emoji.label.charAt(0).toUpperCase() + emoji.label.slice(1).toLowerCase()}</p>
          </li>
        ))
      }
    </ul>
  )
}
