export const socials = {
  github: 'https://github.com/marianvakulenko',
  linkedin: 'https://www.linkedin.com/in/marianvakulenko',
  instagram: 'https://www.instagram.com/marchewwwka',
  telegram: 'https://t.me/Marchewwwka',
  email: 'hello@marianvakulenko.com',
} as const

export const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#skills', label: 'Skills' },
  { href: '#contacts', label: 'Contacts' },
] as const

export type ProjectCategory = 'AI Video' | 'Game Trailer' | 'Commercial'

export type Project = {
  id: string
  title: string
  category: ProjectCategory
  description: string
  poster: string
  video: string
  duration: string
  tools: string[]
}

const SAMPLE = 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample'

export const projects: Project[] = [
  {
    id: 'lunar-drift',
    title: 'Lunar Drift',
    category: 'AI Video',
    description:
      'A surreal AI-generated short built from Flow sequences, cut to an original ElevenLabs voiceover.',
    poster: '/projects/ai-dreamscape.png',
    video: `${SAMPLE}/ElephantsDream.mp4`,
    duration: '0:58',
    tools: ['Flow', 'Gemini', 'ElevenLabs', 'DaVinci Resolve'],
  },
  {
    id: 'neon-protocol',
    title: 'Neon Protocol',
    category: 'Game Trailer',
    description:
      'High-energy reveal trailer with beat-synced cuts, speed ramps and custom motion typography.',
    poster: '/projects/game-trailer.png',
    video: `${SAMPLE}/TearsOfSteel.mp4`,
    duration: '1:24',
    tools: ['DaVinci Resolve', 'Illustrator', 'Auphonic'],
  },
  {
    id: 'weightless',
    title: 'Weightless',
    category: 'Commercial',
    description:
      'Product spot for a sneaker drop — slow-motion hero shots, sound design and vertical cutdowns.',
    poster: '/projects/commercial-sneaker.png',
    video: `${SAMPLE}/ForBiggerBlazes.mp4`,
    duration: '0:30',
    tools: ['DaVinci Resolve', 'CapCut', 'Photoshop'],
  },
  {
    id: 'dissolve',
    title: 'Dissolve',
    category: 'AI Video',
    description:
      'Experimental AI portrait piece exploring identity, graded for a cold, cinematic look.',
    poster: '/projects/ai-portrait.png',
    video: `${SAMPLE}/Sintel.mp4`,
    duration: '1:12',
    tools: ['Gemini', 'Flow', 'DaVinci Resolve'],
  },
  {
    id: 'stoneborn',
    title: 'Stoneborn',
    category: 'Game Trailer',
    description:
      'Epic fantasy announcement trailer — scale-driven pacing, layered SFX and title animation.',
    poster: '/projects/game-fantasy.png',
    video: `${SAMPLE}/BigBuckBunny.mp4`,
    duration: '2:05',
    tools: ['DaVinci Resolve', 'ElevenLabs', 'Illustrator'],
  },
  {
    id: 'morning-ritual',
    title: 'Morning Ritual',
    category: 'Commercial',
    description:
      'Moody coffee brand edit designed for Reels & TikTok with hook-first storytelling.',
    poster: '/projects/commercial-coffee.png',
    video: `${SAMPLE}/ForBiggerEscapes.mp4`,
    duration: '0:22',
    tools: ['CapCut', 'Auphonic', 'Photoshop'],
  },
]

export const skillGroups = [
  {
    title: 'Edit & Color',
    items: [
      { name: 'DaVinci Resolve', note: 'Editing, color grading, Fusion' },
      { name: 'CapCut', note: 'Fast social-first edits' },
    ],
  },
  {
    title: 'AI Production',
    items: [
      { name: 'Flow', note: 'AI video generation' },
      { name: 'Gemini', note: 'Ideation, scripting, prompts' },
      { name: 'ElevenLabs', note: 'Voiceover & dubbing' },
    ],
  },
  {
    title: 'Audio',
    items: [{ name: 'Auphonic', note: 'Loudness & audio mastering' }],
  },
  {
    title: 'Design',
    items: [
      { name: 'Photoshop', note: 'Thumbnails & compositing' },
      { name: 'Illustrator', note: 'Vector assets for motion' },
    ],
  },
] as const
