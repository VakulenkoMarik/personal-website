'use client'

import { useState } from 'react'
import { Play } from 'lucide-react'
import { projects, type Project } from '@/lib/site-data'

type FormatTab = 'portrait' | 'landscape'

// Доступні категорії для кожного з форматів
const categoriesByFormat: Record<FormatTab, string[]> = {
  portrait: ['All', 'Commercial', 'Dynamic', 'Entertainment', 'Motion Graphics'],
  landscape: ['All', 'Trailers', 'Entertainment', 'Motion Graphics'],
}

function YouTubeFacade({ project }: { project: Project }) {
  const [playing, setPlaying] = useState(false)

  if (playing) {
    return (
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${project.youtubeId}?autoplay=1`}
        title={project.title}
        className="absolute inset-0 size-full border-0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    )
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      aria-label={`Play ${project.title}`}
      className="group absolute inset-0 size-full cursor-pointer"
    >
      <img
        src={`https://i.ytimg.com/vi/${project.youtubeId}/hqdefault.jpg`}
        alt=""
        loading="lazy"
        decoding="async"
        className="size-full object-cover"
      />
      <span className="absolute inset-0 bg-black/20 transition-colors group-hover:bg-black/35" />
      <span className="absolute left-1/2 top-1/2 grid size-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-black/70 text-white transition-transform group-hover:scale-110">
        <Play className="ml-0.5 size-6 fill-current" aria-hidden="true" />
      </span>
    </button>
  )
}

export function Portfolio() {
  const [activeFormat, setActiveFormat] = useState<FormatTab>('portrait')
  const [activeCategory, setActiveCategory] = useState<string>('All')

  const handleFormatChange = (format: FormatTab) => {
    setActiveFormat(format)
    setActiveCategory('All')
  }

  const filteredProjects = projects.filter((project) => {
    if (project.aspect !== activeFormat) return false
    if (activeCategory !== 'All' && project.category !== activeCategory) return false
    return true
  })

  return (
    <section id="portfolio" className="py-20 border-t border-zinc-900 bg-zinc-950">
      <div className="max-w-6xl mx-auto px-4 space-y-10">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Featured Work & Showreel
          </h2>
          <p className="text-zinc-400 max-w-xl mx-auto text-sm md:text-base">
            Select a format below to explore high-retention vertical edits or cinematic trailers.
          </p>

          {/* 1-й рівень: Формати (9:16 та 16:9) */}
          <div className="flex justify-center gap-3 pt-2">
            <button
              onClick={() => handleFormatChange('portrait')}
              className={`px-5 py-2.5 rounded-xl font-semibold transition text-xs md:text-sm ${
                activeFormat === 'portrait'
                  ? 'bg-white text-zinc-950 shadow-lg'
                  : 'bg-zinc-900/80 text-zinc-400 hover:text-white border border-zinc-800/60'
              }`}
            >
              Short-Form (9:16)
            </button>
            <button
              onClick={() => handleFormatChange('landscape')}
              className={`px-5 py-2.5 rounded-xl font-semibold transition text-xs md:text-sm ${
                activeFormat === 'landscape'
                  ? 'bg-white text-zinc-950 shadow-lg'
                  : 'bg-zinc-900/80 text-zinc-400 hover:text-white border border-zinc-800/60'
              }`}
            >
              Horizontal & Trailers (16:9)
            </button>
          </div>

          {/* 2-й рівень: Підкатегорії */}
          <div className="flex justify-center gap-1.5 flex-wrap pt-1">
            {categoriesByFormat[activeFormat].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition ${
                  activeCategory === cat
                    ? 'bg-zinc-800 text-white border border-zinc-700'
                    : 'text-zinc-500 hover:text-zinc-300 bg-transparent'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Сітка проєктів */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredProjects.map((project) => (
              <div 
                key={project.id} 
                className="bg-zinc-900/30 border border-zinc-900 rounded-2xl overflow-hidden p-4 md:p-5 flex flex-col justify-between hover:border-zinc-800 transition"
              >
                {/* Контейнер відеоплеєра */}
                <div className={`w-full bg-zinc-950 rounded-xl overflow-hidden relative mb-4 flex items-center justify-center ${
                  project.aspect === 'portrait' 
                    ? 'aspect-[9/16] max-w-[240px] md:max-w-[260px] mx-auto max-h-[380px]' 
                    : 'aspect-video'
                }`}>
                  <YouTubeFacade project={project} />
                </div>

                {/* Інформація про проєкт */}
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-medium text-zinc-400 tracking-wide uppercase px-2 py-0.5 bg-zinc-900 rounded-md border border-zinc-800">
                      {project.category}
                    </span>
                    <span className="text-[11px] text-zinc-600 uppercase">
                      {project.aspect === 'portrait' ? '9:16' : '16:9'}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                  <p className="text-xs md:text-sm text-zinc-400 leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.tools.map((tool, i) => (
                      <span key={i} className="text-[11px] bg-zinc-900/60 text-zinc-400 px-2 py-0.5 rounded border border-zinc-800/50">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 text-zinc-500 text-sm">
            No projects found for this sub-category yet.
          </div>
        )}
      </div>
    </section>
  )
}