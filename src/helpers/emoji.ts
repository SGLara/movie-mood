import alienEmoji from '@/assets/img/emojis/alien.png'
import angryEmoji from '@/assets/img/emojis/angry.png'
import armBicepsEmoji from '@/assets/img/emojis/arm_biceps.png'
import bombEmoji from '@/assets/img/emojis/bomb.png'
import crossedSwordsEmoji from '@/assets/img/emojis/crossed_swords.png'
import cryEmoji from '@/assets/img/emojis/cry.png'
import desertEmoji from '@/assets/img/emojis/desert.png'
import detectiveEmoji from '@/assets/img/emojis/detective.png'
import excitedEmoji from '@/assets/img/emojis/excited.png'
import fairyEmoji from '@/assets/img/emojis/fairy.png'
import familyEmoji from '@/assets/img/emojis/family.png'
import ghostEmoji from '@/assets/img/emojis/ghost.png'
import happyEmoji from '@/assets/img/emojis/happy.png'
import heartEmoji from '@/assets/img/emojis/heart.png'
import knifeEmoji from '@/assets/img/emojis/knife.png'
import laughingEmoji from '@/assets/img/emojis/laughing.png'
import masksEmoji from '@/assets/img/emojis/masks.png'
import movieCameraEmoji from '@/assets/img/emojis/movie_camera.png'
import musicalNotesEmoji from '@/assets/img/emojis/musical_notes.png'
import neutralEmoji from '@/assets/img/emojis/neutral.png'
import oldPaperEmoji from '@/assets/img/emojis/old_paper.png'
import paintEmoji from '@/assets/img/emojis/paint.png'
import relaxedEmoji from '@/assets/img/emojis/relaxed.png'
import thinkingEmoji from '@/assets/img/emojis/thinking.png'
import tiredEmoji from '@/assets/img/emojis/tired.png'
import tvEmoji from '@/assets/img/emojis/tv.png'
import worldMapEmoji from '@/assets/img/emojis/world_map.png'
import type { EmojiList } from '@/types/Emoji'

export const emojisMood: EmojiList[] = [
  { src: happyEmoji.src, label: 'happy', alt: 'happy-emoji' },
  { src: cryEmoji.src, label: 'sad', alt: 'sad-emoji' },
  { src: excitedEmoji.src, label: 'excited', alt: 'excited-emoji' },
  { src: relaxedEmoji.src, label: 'relax', alt: 'relaxed-emoji' },
  { src: angryEmoji.src, label: 'angry', alt: 'angry-emoji' },
  { src: heartEmoji.src, label: 'in loved', alt: 'heart-emoji' },
  { src: worldMapEmoji.src, label: 'adventurous', alt: 'world-map-emoji' },
  { src: neutralEmoji.src, label: 'neutral', alt: 'neutral-emoji' },
  { src: armBicepsEmoji.src, label: 'motivated', alt: 'arm-biceps-emoji' },
  { src: tiredEmoji.src, label: 'tired', alt: 'tired-emoji' }
]

export const emojisCategory: EmojiList[] = [
  { id: 878, src: alienEmoji.src, label: 'sci-fi', alt: 'alien-emoji' },
  { id: 28, src: bombEmoji.src, label: 'action', alt: 'bomb-emoji' },
  // { id: 10762, src: childEmoji.src, label: 'kids', alt: 'child-emoji' }, // series
  { id: 10752, src: crossedSwordsEmoji.src, label: 'war', alt: 'crossed-swords-emoji' },
  { id: 37, src: desertEmoji.src, label: 'western', alt: 'desert-emoji' },
  { id: 80, src: detectiveEmoji.src, label: 'crime', alt: 'detective-emoji' },
  { id: 14, src: fairyEmoji.src, label: 'fantasy', alt: 'fairy-emoji' },
  { id: 10751, src: familyEmoji.src, label: 'family', alt: 'family-emoji' },
  { id: 27, src: ghostEmoji.src, label: 'horror', alt: 'ghost-emoji' },
  { id: 53, src: knifeEmoji.src, label: 'thriller', alt: 'knife-emoji' },
  { id: 35, src: laughingEmoji.src, label: 'comedy', alt: 'laughing-emoji' },
  { id: 18, src: masksEmoji.src, label: 'drama', alt: 'masks-emoji' },
  { id: 99, src: movieCameraEmoji.src, label: 'documentary', alt: 'movie-camera-emoji' },
  { id: 10402, src: musicalNotesEmoji.src, label: 'music', alt: 'musical-note-emoji' },
  // { id: 10763, src: newspaperEmoji.src, label: 'news', alt: 'newspaper-emoji' }, // series
  { id: 36, src: oldPaperEmoji.src, label: 'history', alt: 'old-paper-emoji' },
  { id: 16, src: paintEmoji.src, label: 'animation', alt: 'paint-emoji' },
  // { id: 10767, src: speakingEmoji.src, label: 'talk', alt: 'speaking-emoji' }, // series
  { id: 9648, src: thinkingEmoji.src, label: 'mistery', alt: 'thinking-emoji' },
  { id: 10770, src: tvEmoji.src, label: 'tv movie', alt: 'tv-emoji' },
  { id: 12, src: worldMapEmoji.src, label: 'adventure', alt: 'world-map-emoji' },
  { id: 10749, src: heartEmoji.src, label: 'romance', alt: 'heart-emoji' }
]
