import { motion } from 'framer-motion'
import { HiMoon, HiSun } from 'react-icons/hi2'
import { useTheme } from '../../hooks/useTheme'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative w-10 h-10 rounded-xl glass flex items-center justify-center text-secondary-text hover:text-accent-gold transition-colors cursor-pointer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === 'dark' ? 0 : 180 }}
        transition={{ duration: 0.3 }}
      >
        {theme === 'dark' ? <HiMoon size={18} /> : <HiSun size={18} />}
      </motion.div>
    </motion.button>
  )
}
