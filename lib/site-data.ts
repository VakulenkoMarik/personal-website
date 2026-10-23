export const socials = {
  github: 'https://github.com/VakulenkoMarik',
  linkedin: 'https://www.linkedin.com/in/marian-vakulenko-19b688362/',
  instagram: 'https://www.instagram.com/_the_marik_',
  telegram: 'https://t.me/Marchewwwka',
  email: 'vakulenkomaran100@gmail.com',
} as const

export const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
] as const

export type ProjectCategory = 'Dynamic' | 'Trailers' | 'Entertainment' | 'Motion Graphics' | 'Commercial'

export type Project = {
  id: string
  title: string
  category: ProjectCategory
  description: string
  youtubeId: string
  aspect: 'portrait' | 'landscape'
  tools: string[]
}

export const projects: Project[] = [
  {
    id: 'ldent-clinic',
    title: "L'dent Clinic Promo",
    category: 'Commercial',
    description: "Dynamic commercial spot for L'dent dental clinic, crafted with fast pacing and engagement hooks.",
    youtubeId: 'n2OqRZ8T1DY',
    aspect: 'portrait',
    tools: ['CapCut'],
  },
  {
    id: 'dynamic-ads',
    title: 'Dynamic Subtitle Ads',
    category: 'Commercial',
    description: 'Commercial short featuring engaging kinetic typography and fast retention editing.',
    youtubeId: 'PD0moT1_M4U',
    aspect: 'portrait',
    tools: ['CapCut'],
  },
  {
    id: 'dental-technician',
    title: 'Dental Technician Atmosphere',
    category: 'Entertainment',
    description: 'Immersive atmospheric edit capturing the meticulous work of a dental technician, synced to RushE music.',
    youtubeId: 'gPt_7BAx3TU',
    aspect: 'landscape',
    tools: ['DaVinci Resolve'],
  },
  {
    id: 'game-trailer',
    title: 'Custom Game Trailer',
    category: 'Trailers',
    description: 'Fully illustrated custom game trailer built from scratch with dedicated voiceover and cinematic pacing.',
    youtubeId: 'kmSCX6Z2sC8',
    aspect: 'landscape',
    tools: ['Photoshop', 'CapCut', 'ElevenLabs'],
  },
  {
    id: 'football-intro',
    title: 'Football YouTube Intro',
    category: 'Entertainment',
    description: 'High-energy motion graphics intro created for a football YouTube channel.',
    youtubeId: 'TC1y2xgdDzE',
    aspect: 'landscape',
    tools: ['CapCut', 'Photoshop', 'Illustrator'],
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
      { name: 'Photoshop', note: 'Image editing' },
      { name: 'Illustrator', note: 'Vector assets for motion' },
      { name: 'Canva', note: 'Thumbnails & compositing' },
    ],
  },
] as const