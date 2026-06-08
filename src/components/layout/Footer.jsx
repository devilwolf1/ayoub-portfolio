import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { navLinks, socialLinks } from '../../data/navigation'

const iconMap = {
  github: FaGithub,
  linkedin: FaLinkedin,
  twitter: FaTwitter,
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/5 bg-surface/50">
      <div className="container-custom px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-accent-gold/10 border border-accent-gold/20 flex items-center justify-center">
                <span className="text-accent-gold font-bold text-sm">AE</span>
              </div>
              <span className="font-semibold text-lg">Ayoub Elkhoms</span>
            </div>
            <p className="text-secondary-text text-sm leading-relaxed max-w-xs">
              Frontend Developer crafting premium websites that help businesses grow and succeed online.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-accent-gold">Navigation</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-secondary-text text-sm hover:text-accent-gold transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-accent-gold">Connect</h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = iconMap[social.icon]
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl glass flex items-center justify-center text-secondary-text hover:text-accent-gold hover:border-accent-gold/30 transition-all"
                    whileHover={{ scale: 1.1, y: -2 }}
                    aria-label={social.label}
                  >
                    <Icon size={18} />
                  </motion.a>
                )
              })}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-secondary-text text-sm">
            &copy; {year} Ayoub Elkhoms. All rights reserved.
          </p>
          <p className="text-secondary-text text-xs">
            Built with React, Tailwind CSS & Framer Motion
          </p>
        </div>
      </div>
    </footer>
  )
}
