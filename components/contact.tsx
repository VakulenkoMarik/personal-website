import { ArrowUpRight, Mail } from 'lucide-react'
import { socials } from '@/lib/site-data'
import { InstagramIcon, LinkedInIcon, TelegramIcon } from '@/components/brand-icons'

const channels = [
  {
    label: 'Telegram',
    handle: '@Marchewwwka',
    href: socials.telegram,
    icon: TelegramIcon,
  },
  {
    label: 'Instagram',
    handle: '@marchewwwka',
    href: socials.instagram,
    icon: InstagramIcon,
  },
  {
    label: 'LinkedIn',
    handle: 'Marian Vakulenko',
    href: socials.linkedin,
    icon: LinkedInIcon,
  },
  {
    label: 'Email',
    handle: socials.email,
    href: `mailto:${socials.email}`,
    icon: Mail,
  },
]

export function Contact() {
  return (
    <footer id="contacts" className="scroll-mt-20 px-5 pb-10 pt-24">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-2xl border border-primary/30 bg-card p-8 md:p-14">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-32 left-1/2 h-64 w-[700px] -translate-x-1/2 rounded-full bg-primary/20 blur-[100px]"
        />
        <p className="font-mono text-xs uppercase tracking-widest text-primary">04 — Contacts</p>
        <h2 className="mt-3 max-w-3xl text-balance font-heading text-4xl font-bold tracking-tight md:text-6xl">
          Got footage? <span className="text-primary text-glow">Let&apos;s make it move.</span>
        </h2>
        <p className="mt-4 max-w-xl text-lg text-muted-foreground">
          Open to freelance projects, studio roles and film collaborations. Telegram is the
          fastest way to reach me.
        </p>

        <ul className="relative mt-10 grid gap-3 sm:grid-cols-2">
          {channels.map(({ label, handle, href, icon: Icon }) => {
            const external = !href.startsWith('mailto:')
            return (
              <li key={label}>
                <a
                  href={href}
                  {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="group flex items-center gap-4 rounded-xl border border-border bg-background/60 p-4 transition-colors hover:border-primary/60"
                >
                  <span className="grid size-11 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-sm text-muted-foreground">{label}</span>
                    <span className="block truncate font-medium text-foreground">{handle}</span>
                  </span>
                  <ArrowUpRight
                    className="size-5 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
                    aria-hidden="true"
                  />
                </a>
              </li>
            )
          })}
        </ul>
      </div>

      <div className="mx-auto mt-10 flex max-w-6xl flex-col items-center justify-between gap-3 text-sm text-muted-foreground sm:flex-row">
        <p>
          {'© '}
          {new Date().getFullYear()} Marian Vakulenko. All rights reserved.
        </p>
        <p className="font-mono text-xs uppercase tracking-widest">
          Video Editor <span className="text-primary">/</span> Motion Designer
        </p>
      </div>
    </footer>
  )
}
