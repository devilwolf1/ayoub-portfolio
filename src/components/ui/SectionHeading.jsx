import { motion } from 'framer-motion'

export default function SectionHeading({ label, title, description, align = 'center' }) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left'

  return (
    <motion.div
      className={`mb-16 max-w-2xl ${alignClass}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
    >
      {label && (
        <span className="inline-block text-accent-gold text-sm font-semibold tracking-widest uppercase mb-4">
          {label}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-secondary-text text-lg leading-relaxed">{description}</p>
      )}
    </motion.div>
  )
}
