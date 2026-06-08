import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { HiArrowUp } from 'react-icons/hi2'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 500)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-24 right-6 z-40 w-11 h-11 rounded-xl glass flex items-center justify-center text-accent-gold hover:bg-accent-gold/10 transition-colors cursor-pointer"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Back to top"
        >
          <HiArrowUp size={18} />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
