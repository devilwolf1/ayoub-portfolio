import { motion } from 'framer-motion'

const technologies = [
  'React', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'Framer Motion',
  'Vite', 'Next.js', 'Git', 'GitHub', 'Vercel', 'Figma', 'AI Tools',
  'Responsive Design', 'UI/UX', 'Performance',
]

export default function TechMarquee() {
  const items = [...technologies, ...technologies]

  return (
    <section className="py-8 border-y border-white/5 overflow-hidden relative">
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />

      <motion.div
        className="flex gap-8 whitespace-nowrap"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      >
        {items.map((tech, i) => (
          <span
            key={i}
            className="flex items-center gap-8 text-secondary-text/60 text-sm font-medium tracking-wide"
          >
            <span className="hover:text-accent-gold transition-colors">{tech}</span>
            <span className="text-accent-gold/40">✦</span>
          </span>
        ))}
      </motion.div>
    </section>
  )
}
