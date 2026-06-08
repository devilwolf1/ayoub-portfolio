import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { HiMenuAlt3, HiX } from 'react-icons/hi'
import { navLinks } from '../../data/navigation'
import { profile } from '../../data/profile'
import ThemeToggle from '../ui/ThemeToggle'
import Button from '../ui/Button'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [avatarSrc, setAvatarSrc] = useState(profile.image)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass py-3' : 'bg-transparent py-5'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
    >
      <div className="container-custom px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 rounded-full overflow-hidden border border-accent-gold/25 group-hover:border-accent-gold/50 transition-colors">
            <img
              src={avatarSrc}
              alt={profile.name}
              className="w-full h-full object-cover object-[center_20%]"
              onError={() => setAvatarSrc(profile.fallbackImage)}
            />
          </div>
          <span className="font-semibold text-primary-text hidden sm:block group-hover:text-accent-gold transition-colors">
            {profile.name}
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-secondary-text hover:text-accent-gold transition-colors duration-300 relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-accent-gold transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <div className="hidden md:block">
            <Button href="#contact" variant="primary" className="!px-5 !py-2.5 !text-xs">
              Hire Me
            </Button>
          </div>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden w-10 h-10 rounded-xl glass flex items-center justify-center text-primary-text cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <HiX size={20} /> : <HiMenuAlt3 size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="lg:hidden fixed inset-0 top-[60px] z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-background/80 backdrop-blur-xl" onClick={() => setMobileOpen(false)} />
            <motion.nav
              className="relative glass m-4 rounded-2xl p-6 flex flex-col gap-2"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
            >
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-lg text-primary-text hover:text-accent-gold py-3 px-4 rounded-xl hover:bg-white/5 transition-all"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  {link.label}
                </motion.a>
              ))}
              <Button href="#contact" variant="primary" className="mt-4 w-full">
                Hire Me
              </Button>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
