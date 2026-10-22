'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Play } from 'lucide-react'
import type { Project } from '@/lib/site-data'

export function ProjectCard({ project }: { project: Project }) {
  const [playing, setPlaying] = useState(false)

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-[0_0_40px_-12px_var(--color-primary)]">
      <div className="relative aspect-video overflow-hidden bg-black">
        {playing ? (
          <video
            src={project.video}
            poster={project.poster}
            controls
            autoPlay
            playsInline
            className="size-full object-cover"
          >
            <track kind="captions" />
          </video>
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            className="absolute inset-0 size-full cursor-pointer"
            aria-label={`Play ${project.title}`}
          >
            <Image
              src={project.poster}
              alt=""
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <span className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent" />
            <span className="absolute left-1/2 top-1/2 grid size-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-primary/60 bg-background/60 text-primary backdrop-blur transition-all group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground">
              <Play className="ml-0.5 size-5 fill-current" />
            </span>
            <span className="absolute left-3 top-3 rounded-full bg-background/70 px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider text-primary backdrop-blur">
              {project.category}
            </span>
            <span className="absolute bottom-3 right-3 rounded bg-background/70 px-2 py-0.5 font-mono text-xs text-foreground backdrop-blur">
              {project.duration}
            </span>
          </button>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-heading text-xl font-semibold">{project.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>
        <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Tools used">
          {project.tools.map((tool) => (
            <li
              key={tool}
              className="rounded border border-border px-2 py-0.5 font-mono text-[11px] text-muted-foreground"
            >
              {tool}
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}
