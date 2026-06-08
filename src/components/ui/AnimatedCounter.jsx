import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion, useSpring, useTransform } from 'framer-motion'

function Counter({ value, suffix = '', duration = 2 }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 })
  const spring = useSpring(0, { duration: duration * 1000, bounce: 0 })
  const display = useTransform(spring, (v) => Math.round(v))
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    if (inView) spring.set(value)
  }, [inView, spring, value])

  useEffect(() => {
    return display.on('change', (v) => setDisplayValue(v))
  }, [display])

  return (
    <span ref={ref}>
      {displayValue}
      {suffix}
    </span>
  )
}

export default function AnimatedCounter({ stats }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.15 }}
        >
          <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-accent-gold mb-2">
            <Counter value={stat.value} suffix={stat.suffix} duration={stat.duration} />
          </div>
          <p className="text-secondary-text text-sm md:text-base font-medium tracking-wide">
            {stat.label}
          </p>
        </motion.div>
      ))}
    </div>
  )
}
