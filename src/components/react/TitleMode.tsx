import { emojiMode } from '@/store/emoji'
import { useStore } from '@nanostores/react'
import { useEffect } from 'react'

export default function TitleMode (): JSX.Element {
  const mode = useStore(emojiMode)

  useEffect(() => {
    const title = document.querySelector('h1')
    const subtitle = document.querySelector('h2')

    switch (mode) {
      case 'mood':
        title?.classList.add('animate-sway')
        subtitle?.classList.add('animate-sway')
        break
      case 'category':
        title?.classList.add('animate-slide-out-top')
        subtitle?.classList.add('animate-slide-out-top')
        break
    }
  }, [mode])

  return (
    <>
      <h1 className='text-4xl font-bold text-white'>
        {
            mode === 'mood'
              ? 'How do you feel?'
              : 'What do you want to watch?'
        }
      </h1>
      <h2>
        {
            mode === 'mood'
              ? 'Pick an emoji based on your current mood'
              : 'Choose your favorite categories'
        }
      </h2>
    </>
  )
}
