'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ArrowRight, Play } from 'lucide-react'
import { ContactModal } from '@/components/contact-modal'

const stats = [
  { value: '2.5+', label: 'Years editing' },
  { value: '500+', label: 'Videos delivered' },
  { value: 'SMM', label: 'Marketing roots' },
]

export function Hero() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  return (
    <section
      id="top"
      className="relative isolate overflow-hidden px-5 pb-20 pt-20 md:pb-28 md:pt-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-primary/15 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]"
      />

      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-6">
        <div className="relative z-10">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 font-mono text-xs uppercase tracking-widest text-primary">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-primary" />
            </span>
            Available for part-time & project work
          </p>

          <h1 className="max-w-4xl text-balance font-heading text-5xl font-bold leading-[1.02] tracking-tight md:text-6xl xl:text-7xl">
            I cut stories that <span className="text-primary text-glow">stop the scroll</span>{' '}
            — and belong on the big screen.
          </h1>

          <p className="mt-8 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            Marian Vakulenko — Social Media Video Editor & Motion Designer with{' '}
            <span className="text-foreground">2.5+ years</span> of experience crafting entertainment,
            educational content, AI videos, animations, trailers, and commercial edits. Now leveling
            up toward the film industry.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={() => setIsContactModalOpen(true)}
              className="group inline-flex h-12 items-center justify-center gap-2 rounded-md bg-primary px-6 font-medium text-primary-foreground shadow-[0_0_32px_-6px_var(--color-primary)] transition-all hover:shadow-[0_0_44px_-4px_var(--color-primary)]"
            >
              Contact Me
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </button>
            <a
              href="#portfolio"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-border bg-card px-6 font-medium text-foreground transition-colors hover:border-primary/60 hover:text-primary"
            >
              <Play className="size-4" />
              View Work
            </a>
          </div>

          <dl className="mt-16 grid max-w-xl grid-cols-3 gap-6 border-t border-border pt-8">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-heading text-3xl font-bold text-foreground md:text-4xl">
                  {stat.value}
                </dd>
                <dd className="mt-1 text-sm text-muted-foreground">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative hidden aspect-[9/16] w-full max-w-[48rem] overflow-hidden lg:block lg:justify-self-end">
          <Image
            src="/my-photo.webp"
            alt="Marian Vakulenko"
            fill
            priority
            sizes="(min-width: 1024px) 50vw, 0px"
            className="object-contain object-bottom"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-b from-transparent via-zinc-950/80 to-zinc-950"
          />
        </div>
      </div>
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </section>
  )
}
