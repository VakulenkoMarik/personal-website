import { projects } from '@/lib/site-data'

export function Portfolio() {
  return (
    <section id="portfolio" className="py-20 border-t border-zinc-800 bg-zinc-950">
      <div className="max-w-6xl mx-auto px-4 space-y-12">
        <div className="text-center space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Featured Work & Showreel</h2>
          <p className="text-zinc-400 max-w-xl mx-auto">
            A curated selection of high-retention videos, commercial spots, and cinematic motion graphics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="bg-zinc-900/50 border border-zinc-800 rounded-2xl overflow-hidden p-5 flex flex-col justify-between hover:border-zinc-700 transition"
            >
              {/* Динамічний відеоплеєр під 9:16 або 16:9 */}
              <div className={`w-full bg-zinc-950 rounded-xl overflow-hidden relative mb-4 flex items-center justify-center ${
                project.aspect === 'portrait' ? 'aspect-[9/16] max-w-sm mx-auto' : 'aspect-video'
              }`}>
                <video
                  src={project.video}
                  controls
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Інформація про проєкт */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#38BDF8] tracking-wide uppercase px-2.5 py-1 bg-[#38BDF8]/10 rounded-full">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">{project.description}</p>

                {/* Інструменти / Стеки */}
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