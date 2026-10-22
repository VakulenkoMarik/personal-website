'use client'

import { useState } from 'react'
import { projects, type ProjectCategory } from '@/lib/site-data'
import { SectionHeading } from '@/components/section-heading'
import { ProjectCard } from '@/components/project-card'
import { cn } from '@/lib/utils'

const filters: Array<'All' | ProjectCategory> = ['All', 'AI Video', 'Game Trailer', 'Commercial']

export function Portfolio() {
  const [active, setActive] = useState<(typeof filters)[number]>('All')
  const visible = active === 'All' ? projects : projects.filter((p) => p.category === active)

  return (
    <section id="portfolio" className="scroll-mt-20 px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="02 — Portfolio"
            title="Selected work."
            description="Click any card to play it right here."
          />
          <div role="group" aria-label="Filter projects" className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActive(filter)}
                aria-pressed={active === filter}
                className={cn(
                  'h-9 rounded-full border px-4 text-sm transition-colors',
                  active === filter
                    ? 'border-primary bg-primary text-primary-foreground'
                    : 'border-border text-muted-foreground hover:border-primary/50 hover:text-foreground',
                )}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <ul className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((project) => (
            <li key={project.id}>
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
