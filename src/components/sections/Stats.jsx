import { motion } from 'framer-motion'
import { stats } from '../../data/stats'
import AnimatedCounter from '../ui/AnimatedCounter'

export default function Stats() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-gold/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative">
        <motion.div
          className="glass rounded-3xl p-8 md:p-12 lg:p-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <AnimatedCounter stats={stats} />
        </motion.div>
      </div>
    </section>
  )
}
