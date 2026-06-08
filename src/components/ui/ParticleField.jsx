import { motion } from 'framer-motion'
import { useMemo } from 'react'

function seededValue(seed, min, max) {
  const x = Math.sin(seed * 127.1 + seed * 311.7) * 43758.5453
  const normalized = x - Math.floor(x)
  return min + normalized * (max - min)
}

export default function ParticleField({ count = 30 }) {
  const particles = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        x: seededValue(i, 0, 100),
        y: seededValue(i + 1, 0, 100),
        size: seededValue(i + 2, 1, 4),
        duration: seededValue(i + 3, 10, 20),
        delay: seededValue(i + 4, 0, 5),
      })),
    [count],
  )

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-accent-gold/30"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}
