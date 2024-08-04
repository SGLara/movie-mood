
import SparklesIcon from '@/assets/icons/react/SparklesIcon'
import EmojiListRenderer from '@/components/react/EmojiListRenderer'
import EmojiSelected from '@/components/react/EmojiSelected'
import { MAX_MOOD_EMOJI_SELECTED } from '@/config/emoji'
import { category, emojiMode, mood } from '@/store/emoji'
import { useStore } from '@nanostores/react'
import { useEffect } from 'react'

export default function EmojiPickerComponent (): JSX.Element {
  const $mood = useStore(mood)
  const $category = useStore(category)
  const $emojiMode = useStore(emojiMode)

  useEffect(() => {
    if ($mood.length === MAX_MOOD_EMOJI_SELECTED) {
      const moodEmojis = document.getElementById('mood-emoji-list')
      if (moodEmojis != null) {
        moodEmojis.childNodes.forEach(node => {
          (node as HTMLElement).classList.add('animate-zoom-out')
        })
      }

      setTimeout(() => {
        emojiMode.set('category')
      }, 1000)
    }
  }, [$mood])

  useEffect(() => {
    if ($emojiMode === 'category') {
      const categoryEmojis = document.getElementById('category-emoji-list')
      if (categoryEmojis != null) {
        categoryEmojis.childNodes.forEach(node => {
          (node as HTMLElement).classList.add('animate-zoom-in')
        })
      }
    }
  }, [$emojiMode])

  return (
    <div
      className='flex flex-col justify-between items-center h-full w-full'
      style={{ viewTransitionName: 'form' }}
    >
      <div className='flex flex-row justify-between items-center gap-5 h-full w-full px-5'>
        <div
          className='flex flex-col justify-between items-center bg-slate-300/20 rounded-lg p-5 h-28 w-44'
          style={{ viewTransitionName: 'moodList' }}
        >
          <p className='text-center'>Mood</p>
          <EmojiSelected mode='mood' />
        </div>

        <div className='flex flex-col justify-center items-center p-5 bg-slate-300/20 rounded-lg h-auto'>
          <EmojiListRenderer mode={$emojiMode} />
        </div>

        <div
          className='flex flex-col justify-between items-center bg-slate-300/20 rounded-lg p-5 h-28 w-44'
          style={{ viewTransitionName: 'categoryList' }}
        >
          <p className='text-center'>Category</p>
          <EmojiSelected mode='category' />
        </div>
      </div>
      {
      ($mood.length === MAX_MOOD_EMOJI_SELECTED && $category.length > 0) &&
        <a
          href='/suggestions'
          className='flex justify-between gap-2 bg-slate-400 px-5 py-2 rounded-lg text-white hover:bg-slate-500'
        >
          Let's go! <SparklesIcon />
        </a>
      }
    </div>
  )
}
