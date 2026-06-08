import { motion } from 'framer-motion'
import {
  HiCodeBracket,
  HiMagnifyingGlass,
  HiMap,
  HiPaintBrush,
  HiRocketLaunch,
} from 'react-icons/hi2'
import { processSteps } from '../../data/process'
import SectionHeading from '../ui/SectionHeading'

const iconMap = {
  search: HiMagnifyingGlass,
  map: HiMap,
  palette: HiPaintBrush,
  code: HiCodeBracket,
  rocket: HiRocketLaunch,
}

export default function Process() {
  return (
    <section id="process" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-surface/50 to-transparent" />

      <div className="container-custom relative">
        <SectionHeading
          label="How I Work"
          title="Development Process"
          description="A proven, streamlined workflow that delivers premium results on time, every time."
        />

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent-gold/30 to-transparent -translate-y-1/2" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {processSteps.map((step, index) => {
              const Icon = iconMap[step.icon]
              return (
                <motion.div
                  key={step.step}
                  className="relative text-center group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="glass rounded-2xl p-6 hover:border-accent-gold/20 transition-all duration-300 group-hover:-translate-y-2">
                    <div className="relative mx-auto w-14 h-14 rounded-2xl bg-accent-gold/10 border border-accent-gold/20 flex items-center justify-center mb-4 group-hover:bg-accent-gold/20 transition-colors">
                      <Icon className="text-accent-gold" size={24} />
                      <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-accent-gold text-background text-xs font-bold flex items-center justify-center">
                        {step.step}
                      </span>
                    </div>
                    <h3 className="font-bold mb-2">{step.title}</h3>
                    <p className="text-secondary-text text-sm leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
