import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { profile } from '../../data/profile'

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0)
  const [imgSrc, setImgSrc] = useState(profile.image)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(onComplete, 400)
          return 100
        }
        return prev + 2
      })
    }, 30)
    return () => clearInterval(interval)
  }, [onComplete])

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-8 relative"
      >
        <div className="w-24 h-28 rounded-2xl overflow-hidden border border-accent-gold/25">
          <img
            src={imgSrc}
            alt={profile.name}
            className="w-full h-full object-cover object-[center_18%]"
            onError={() => setImgSrc(profile.fallbackImage)}
          />
        </div>
      </motion.div>

      <motion.p
        className="text-lg font-semibold mb-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {profile.name}
      </motion.p>

      <div className="w-48 h-[2px] bg-surface-light rounded-full overflow-hidden mt-4">
        <motion.div
          className="h-full bg-accent-gold rounded-full"
          style={{ width: `${progress}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>

      <motion.p
        className="mt-4 text-secondary-text text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Loading experience...
      </motion.p>
    </motion.div>
  )
}
