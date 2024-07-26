import alienEmoji from '@/assets/img/emojis/alien.png'
import angryEmoji from '@/assets/img/emojis/angry.png'
import armBicepsEmoji from '@/assets/img/emojis/arm_biceps.png'
import bombEmoji from '@/assets/img/emojis/bomb.png'
import childEmoji from '@/assets/img/emojis/child.png'
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
import newspaperEmoji from '@/assets/img/emojis/newspaper.png'
import oldPaperEmoji from '@/assets/img/emojis/old_paper.png'
import paintEmoji from '@/assets/img/emojis/paint.png'
import relaxedEmoji from '@/assets/img/emojis/relaxed.png'
import speakingEmoji from '@/assets/img/emojis/speaking.png'
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
  { src: alienEmoji.src, label: 'sci-fi', alt: 'alien-emoji' },
  { src: bombEmoji.src, label: 'action', alt: 'bomb-emoji' },
  { src: childEmoji.src, label: 'kids', alt: 'child-emoji' },
  { src: crossedSwordsEmoji.src, label: 'war', alt: 'crossed-swords-emoji' },
  { src: desertEmoji.src, label: 'western', alt: 'desert-emoji' },
  { src: detectiveEmoji.src, label: 'crime', alt: 'detective-emoji' },
  { src: fairyEmoji.src, label: 'fantasy', alt: 'fairy-emoji' },
  { src: familyEmoji.src, label: 'family', alt: 'family-emoji' },
  { src: ghostEmoji.src, label: 'horror', alt: 'ghost-emoji' },
  { src: knifeEmoji.src, label: 'thriller', alt: 'knife-emoji' },
  { src: laughingEmoji.src, label: 'comedy', alt: 'laughing-emoji' },
  { src: masksEmoji.src, label: 'drama', alt: 'masks-emoji' },
  { src: movieCameraEmoji.src, label: 'documentary', alt: 'movie-camera-emoji' },
  { src: musicalNotesEmoji.src, label: 'music', alt: 'musical-note-emoji' },
  { src: newspaperEmoji.src, label: 'news', alt: 'newspaper-emoji' },
  { src: oldPaperEmoji.src, label: 'history', alt: 'old-paper-emoji' },
  { src: paintEmoji.src, label: 'animation', alt: 'paint-emoji' },
  { src: speakingEmoji.src, label: 'talk', alt: 'speaking-emoji' },
  { src: thinkingEmoji.src, label: 'mistery', alt: 'thinking-emoji' },
  { src: tvEmoji.src, label: 'tv movie', alt: 'tv-emoji' },
  { src: worldMapEmoji.src, label: 'adventure', alt: 'world-map-emoji' },
  { src: heartEmoji.src, label: 'romance', alt: 'heart-emoji' }
]
