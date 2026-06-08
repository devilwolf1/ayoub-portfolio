import { motion } from 'framer-motion'
import { useMousePosition } from '../../hooks/useMousePosition'

export default function MouseGlow() {
  const { x, y } = useMousePosition()

  return (
    <>
      <motion.div
        className="pointer-events-none fixed inset-0 z-0"
        animate={{
          background: `radial-gradient(700px circle at ${x}px ${y}px, rgba(212, 175, 55, 0.07), transparent 40%)`,
        }}
        transition={{ type: 'tween', ease: 'linear', duration: 0.1 }}
      />
      <motion.div
        className="pointer-events-none fixed z-[1] w-4 h-4 rounded-full border border-accent-gold/30 mix-blend-screen hidden md:block"
        animate={{ x: x - 8, y: y - 8 }}
        transition={{ type: 'spring', stiffness: 500, damping: 28, mass: 0.5 }}
      />
    </>
  )
}
