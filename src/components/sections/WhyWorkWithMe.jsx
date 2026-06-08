import { motion } from 'framer-motion'
import {
  HiBolt,
  HiChartBar,
  HiCodeBracket,
  HiCpuChip,
  HiDevicePhoneMobile,
  HiSparkles,
} from 'react-icons/hi2'
import { advantages } from '../../data/advantages'
import SectionHeading from '../ui/SectionHeading'

const iconMap = {
  sparkles: HiSparkles,
  bolt: HiBolt,
  device: HiDevicePhoneMobile,
  code: HiCodeBracket,
  brain: HiCpuChip,
  chart: HiChartBar,
}

export default function WhyWorkWithMe() {
  return (
    <section className="section-padding relative">
      <div className="container-custom">
        <SectionHeading
          label="Why Choose Me"
          title="The Ayoub Advantage"
          description="What sets my work apart — a commitment to excellence in every pixel and line of code."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((item, index) => {
            const Icon = iconMap[item.icon]
            return (
              <motion.div
                key={item.title}
                className="glass rounded-2xl p-6 md:p-8 group hover:border-accent-gold/20 transition-all duration-500 relative overflow-hidden spotlight-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -6 }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent-gold/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-accent-gold/10 transition-colors" />

                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-accent-gold/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <Icon className="text-accent-gold" size={22} />
                  </div>
                  <h3 className="text-lg font-bold mb-3">{item.title}</h3>
                  <p className="text-secondary-text text-sm leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
