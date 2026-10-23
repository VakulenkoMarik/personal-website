'use client'

import { useState } from 'react'
import { projects } from '@/lib/site-data'

export function Portfolio() {
  const [activeTab, setActiveTab] = useState<'all' | 'portrait' | 'landscape'>('all')

  // Фільтрація проєктів залежно від обраної вкладки
  const filteredProjects = projects.filter((project) => {
    if (activeTab === 'portrait') return project.aspect === 'portrait'
    if (activeTab === 'landscape') return project.aspect === 'landscape'
    return true
  })

  return (
    <section id="portfolio" className="py-20 border-t border-zinc-800 bg-zinc-950">
      <div className="max-w-6xl mx-auto px-4 space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Featured Work & Showreel</h2>
          <p className="text-zinc-400 max-w-xl mx-auto">
            A curated selection of high-retention vertical edits and cinematic horizontal trailers.
          </p>

          {/* Вкладки перемикання форматів */}
          <div className="flex justify-center gap-3 pt-4">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-5 py-2.5 rounded-xl font-medium transition text-sm ${
                activeTab === 'all'
                  ? 'bg-[#38BDF8] text-black font-bold'
                  : 'bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white'
              }`}
            >
              All Works
            </button>
            <button
              onClick={() => setActiveTab('portrait')}
              className={`px-5 py-2.5 rounded-xl font-medium transition text-sm ${
                activeTab === 'portrait'
                  ? 'bg-[#38BDF8] text-black font-bold'
                  : 'bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white'
              }`}
            >
              Short-Form (9:16)
            </button>
            <button
              onClick={() => setActiveTab('landscape')}
              className={`px-5 py-2.5 rounded-xl font-medium transition text-sm ${
                activeTab === 'landscape'
                  ? 'bg-[#38BDF8] text-black font-bold'
                  : 'bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white'
              }`}
            >
              Horizontal & Trailers (16:9)
            </button>
          </div>
        </div>

        {/* Сітка проєктів */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="bg-zinc-900/50 border border-zinc-800 rounded-2xl overflow-hidden p-5 flex flex-col justify-between hover:border-zinc-700 transition"
            >
              {/* Відеоплеєр із суворим дотриманням пропорцій */}
              <div className={`w-full bg-zinc-950 rounded-xl overflow-hidden relative mb-4 flex items-center justify-center ${
                project.aspect === 'portrait' ? 'aspect-[9/16] max-w-[280px] mx-auto' : 'aspect-video'
              }`}>
                <video
                  src={project.video}
                  controls
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-contain bg-black"
                />
              </div>

              {/* Інформація про проєкт */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#38BDF8] tracking-wide uppercase px-2.5 py-1 bg-[#38BDF8]/10 rounded-full">
                    {project.category}
                  </span>
                  <span className="text-xs text-zinc-500 uppercase">
                    {project.aspect === 'portrait' ? '9:16 Vertical' : '16:9 Cinematic'}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">{project.description}</p>

                {/* Інструменти */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tools.map((tool, i) => (
                    <span key={i} className="text-xs bg-zinc-800 text-zinc-300 px-2.5 py-1 rounded-md">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}