import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useState } from 'react'
import { profile } from '../../data/profile'

export default function ProfileImage({
  size = 'lg',
  variant = 'portrait',
  showRing = true,
  className = '',
}) {
  const [imgSrc, setImgSrc] = useState(profile.image)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 150, damping: 20 })
  const springY = useSpring(y, { stiffness: 150, damping: 20 })
  const rotateX = useTransform(springY, [-0.5, 0.5], [3, -3])
  const rotateY = useTransform(springX, [-0.5, 0.5], [-3, 3])

  const sizes = {
    sm: 'w-24 h-24',
    md: 'w-52 h-64 md:w-56 md:h-72',
    lg: 'w-72 h-[22rem] md:w-80 md:h-[26rem] lg:w-96 lg:h-[30rem]',
  }

  const isCircle = variant === 'circle'

  const handleMouse = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    x.set((e.clientX - rect.left) / rect.width - 0.5)
    y.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  const resetMouse = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      className={`relative ${isCircle ? 'aspect-square' : ''} ${sizes[size]} ${className}`}
      style={{ perspective: 1000 }}
      onMouseMove={handleMouse}
      onMouseLeave={resetMouse}
    >
      {showRing && !isCircle && (
        <div className="absolute -inset-px rounded-[1.75rem] bg-gradient-to-b from-accent-gold/15 to-transparent opacity-40" />
      )}

      {showRing && isCircle && (
        <div className="absolute -inset-0.5 rounded-full border border-accent-gold/20" />
      )}

      <motion.div
        className={`relative w-full h-full overflow-hidden border border-white/10 ${
          isCircle ? 'rounded-full' : 'rounded-[1.75rem]'
        }`}
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        <img
          src={imgSrc}
          alt={profile.name}
          className={`w-full h-full object-cover ${
            isCircle ? 'object-[center_20%]' : 'object-[center_18%]'
          }`}
          onError={() => setImgSrc(profile.fallbackImage)}
        />
      </motion.div>

      <motion.div
        className="absolute -bottom-3 -right-3 md:bottom-3 md:right-3 glass-gold rounded-full px-3 py-1.5 flex items-center gap-2"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
        </span>
        <span className="text-xs font-medium text-primary-text">Available</span>
      </motion.div>
    </motion.div>
  )
}
