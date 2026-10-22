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
    handle: '@_the_marik_',
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
    <footer id="contact" className="py-20 border-t border-zinc-800 bg-zinc-950">
      <div className="max-w-4xl mx-auto px-4 text-center space-y-8">
        <div className="space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Ready to Scale Your Content?
          </h2>
          <p className="text-zinc-400 max-w-xl mx-auto">
            Let's discuss how we can elevate your video strategy, motion graphics, and cinematic content.
          </p>
        </div>

        {/* Прямі кнопки зв'язку та соцмереж */}
        <div className="flex flex-wrap justify-center gap-4 pt-4">
          {/* Telegram */}
          <a
            href="https://t.me/Marchewwwka"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 bg-[#38BDF8] text-black font-bold rounded-xl hover:bg-[#38BDF8]/90 transition text-base flex items-center justify-center gap-2"
          >
            Telegram (@Marchewwwka)
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/marian-vakulenko-19b688362/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 bg-zinc-900 border border-zinc-700 text-white font-bold rounded-xl hover:bg-zinc-800 transition text-base flex items-center justify-center gap-2"
          >
            LinkedIn
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/_the_marik_"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 bg-zinc-900 border border-zinc-700 text-white font-bold rounded-xl hover:bg-zinc-800 transition text-base flex items-center justify-center gap-2"
          >
            Instagram (@_the_marik_)
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/VakulenkoMarik"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 bg-zinc-900 border border-zinc-700 text-white font-bold rounded-xl hover:bg-zinc-800 transition text-base flex items-center justify-center gap-2"
          >
            GitHub
          </a>
        </div>

        <div className="pt-12 text-sm text-zinc-600 border-t border-zinc-900">
          © {new Date().getFullYear()} Marian Vakulenko. All rights reserved.
        </div>
      </div>
    </footer>
  )
}