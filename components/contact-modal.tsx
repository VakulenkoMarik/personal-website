'use client'

import { Dialog } from '@base-ui/react/dialog'
import { Mail, X } from 'lucide-react'
import { LinkedInIcon, TelegramIcon } from '@/components/brand-icons'
import { socials } from '@/lib/site-data'

const contactOptions = [
  {
    label: 'Telegram',
    href: socials.telegram,
    icon: TelegramIcon,
  },
  {
    label: 'LinkedIn',
    href: socials.linkedin,
    icon: LinkedInIcon,
  },
  {
    label: 'Email',
    href: `mailto:${socials.email}`,
    icon: Mail,
  },
]

export function ContactModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  return (
    <Dialog.Root
      open={isOpen}
      onOpenChange={(open) => {
        if (!open) onClose()
      }}
    >
      <Dialog.Portal>
        <Dialog.Backdrop className="fixed inset-0 z-50 bg-zinc-950/80" />
        <Dialog.Popup className="fixed left-1/2 top-1/2 z-50 w-[calc(100%-2rem)] max-w-md -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-zinc-900 bg-zinc-950 p-6 text-white shadow-2xl">
          <div className="flex items-start justify-between gap-4">
            <Dialog.Title className="text-xl font-semibold leading-snug">
              What’s the best way for you to contact me?
            </Dialog.Title>
            <Dialog.Close
              type="button"
              aria-label="Close contact modal"
              className="rounded-md p-1 text-zinc-400 transition hover:bg-zinc-900 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-500"
            >
              <X className="size-5" aria-hidden="true" />
            </Dialog.Close>
          </div>

          <div className="mt-6 grid gap-3">
            {contactOptions.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-lg border border-zinc-900 bg-zinc-900/50 px-4 py-3 text-sm font-medium text-zinc-100 transition hover:border-zinc-700 hover:bg-zinc-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-500"
              >
                <Icon className="size-5" aria-hidden="true" />
                {label}
              </a>
            ))}
          </div>
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
