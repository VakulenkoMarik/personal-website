import { skillGroups } from '@/lib/site-data'
import { SectionHeading } from '@/components/section-heading'

export function Skills() {
  const all = skillGroups.flatMap((g) => g.items.map((i) => i.name))

  return (
    <section id="skills" className="scroll-mt-20 px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="03 — Skills"
          title="The toolkit."
          description="Industry-standard software plus the AI tools reshaping modern post-production."
        />

        <ul className="mt-10 flex flex-wrap gap-3" aria-label="Tech stack">
          {all.map((name) => (
            <li
              key={name}
              className="rounded-full border border-primary/40 bg-primary/10 px-4 py-2 text-sm font-medium text-primary shadow-[0_0_18px_-8px_var(--color-primary)] transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              {name}
            </li>
          ))}
        </ul>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group) => (
            <div key={group.title} className="rounded-xl border border-border bg-card p-6">
              <h3 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                {group.title}
              </h3>
              <ul className="mt-4 space-y-4">
                {group.items.map((item) => (
                  <li key={item.name}>
                    <p className="font-heading font-semibold">{item.name}</p>
                    <p className="text-sm text-muted-foreground">{item.note}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
