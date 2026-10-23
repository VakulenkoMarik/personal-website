export const socials = {
  github: 'https://github.com/VakulenkoMarik',
  linkedin: 'https://www.linkedin.com/in/marian-vakulenko-19b688362/',
  instagram: 'https://www.instagram.com/_the_marik_',
  telegram: 'https://t.me/Marchewwwka',
  email: 'vakulenkomarik@gmail.com',
} as const

export const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
] as const

// Оновлені категорії відповідно до твоїх робіт
export type ProjectCategory = 'Dynamic' | 'Trailers' | 'Entertainment' | 'Motion Graphics' | 'Commercial'

export type Project = {
  id: string
  title: string
  category: ProjectCategory
  description: string
  poster?: string
  video: string
  aspect: 'portrait' | 'landscape' // Додали поле для підтримки 9:16 та 16:9
  tools: string[]
}

export const projects: Project[] = [
  {
    id: 'ldent-clinic',
    title: "L'dent Clinic Promo",
    category: 'Commercial',
    description: "Dynamic commercial spot for L'dent dental clinic, crafted with fast pacing and engagement hooks.",
    video: 'https://lh3.googleusercontent.com/d/1rzKRsjaXUFBNEIIKVIdzaeXA-qvXeqyp',
    aspect: 'portrait', // 9:16
    tools: ['CapCut'],
  },
  {
    id: 'dental-technician',
    title: 'Dental Technician Atmosphere',
    category: 'Dynamic',
    description: 'Immersive atmospheric edit capturing the meticulous work of a dental technician, synced to RushE music.',
    video: 'https://lh3.googleusercontent.com/d/1Ih_5VMnttY8ox711dmxIDIFCiDj8tI-3',
    aspect: 'landscape', // 16:9
    tools: ['DaVinci Resolve'],
  },
  {
    id: 'game-trailer',
    title: 'Custom Game Trailer',
    category: 'Trailers',
    description: 'Fully illustrated custom game trailer built from scratch with dedicated voiceover and cinematic pacing.',
    video: 'https://lh3.googleusercontent.com/d/1cK15S1RExqAZJdGrbb5LxFb-R9ytgF8-',
    aspect: 'landscape', // 16:9
    tools: ['Photoshop', 'CapCut', 'ElevenLabs'],
  },
  {
    id: 'football-intro',
    title: 'Football YouTube Intro',
    category: 'Entertainment',
    description: 'High-energy motion graphics intro created for a football YouTube channel.',
    video: 'https://lh3.googleusercontent.com/d/1CofgqfxudvBXE58HieOhfjANS5lUO59h',
    aspect: 'landscape', // 16:9
    tools: ['CapCut', 'Photoshop', 'Illustrator'],
  },
  {
    id: 'dynamic-ads',
    title: 'Dynamic Subtitle Ads',
    category: 'Commercial',
    description: 'Commercial short featuring engaging kinetic typography and fast retention editing.',
    video: 'https://lh3.googleusercontent.com/d/1s0siMEKdzHohrnT9Q8f_ya0fOYKihIPn',
    aspect: 'portrait', // 9:16
    tools: ['CapCut'],
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