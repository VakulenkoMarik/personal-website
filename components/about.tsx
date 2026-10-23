import { Clapperboard, Megaphone, Sparkles, TrendingUp } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

const pillars = [
  {
    icon: Clapperboard,
    title: 'Cinematic editing',
    text: 'Rhythm, pacing and color grading that make every frame feel intentional.',
  },
  {
    icon: Sparkles,
    title: 'AI-powered production',
    text: 'Flow, Gemini and ElevenLabs to prototype and produce visuals at speed.',
  },
  {
    icon: TrendingUp,
    title: 'Built for retention',
    text: 'Hook-first structure tuned for Reels, TikTok and YouTube Shorts.',
  },
]

export function About() {
  return (
    <section id="about" className="scroll-mt-20 px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mt-12 grid gap-6 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <SectionHeading eyebrow="01 — About" title="An editor with a marketer’s mindset." />
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              My experience with agency work and forum projects has taught me to deliver content on
              a same-day schedule without losing sight of the brief. I adapt to a wide range of
              content, including medical and educational material, emotionally driven social media
              videos, cinematic edits, event coverage, and conversational formats, tailoring the
              tone and pacing to each subject and audience.
            </p>
          </div>

          <aside className="relative overflow-hidden rounded-xl border border-primary/30 bg-primary/5 p-6 lg:col-span-2">
            <div
              aria-hidden="true"
              className="absolute -right-10 -top-10 size-40 rounded-full bg-primary/20 blur-3xl"
            />
            <Megaphone className="size-6 text-primary" aria-hidden="true" />
            <h3 className="mt-4 font-heading text-xl font-semibold">SMM marketing background</h3>
            <p className="mt-2 leading-relaxed text-muted-foreground">
              Before editing full-time I worked in social media marketing. I understand reach,
              watch-time and conversion — so my cuts don&apos;t just look good, they perform.
            </p>
          </aside>
        </div>

        <ul className="mt-6 grid gap-6 md:grid-cols-3">
          {pillars.map(({ icon: Icon, title, text }) => (
            <li
              key={title}
              className="rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
            >
              <Icon className="size-5 text-primary" aria-hidden="true" />
              <h3 className="mt-4 font-heading text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
