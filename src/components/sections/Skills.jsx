import { motion } from 'framer-motion'
import { HiCodeBracket, HiCpuChip, HiWrenchScrewdriver } from 'react-icons/hi2'
import { skillCategories } from '../../data/skills'
import SectionHeading from '../ui/SectionHeading'

const iconMap = {
  code: HiCodeBracket,
  tools: HiWrenchScrewdriver,
  rocket: HiCpuChip,
}

function SkillBar({ name, level, delay }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1.5">
        <span className="text-sm font-medium">{name}</span>
        <span className="text-xs text-accent-gold font-semibold">{level}%</span>
      </div>
      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-accent-gold-dark to-accent-gold rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay, ease: 'easeOut' }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="section-padding relative">
      <div className="container-custom">
        <SectionHeading
          label="Expertise"
          title="Skills & Technologies"
          description="A comprehensive toolkit for building modern, high-performance web applications."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillCategories.map((category, catIndex) => {
            const Icon = iconMap[category.icon]
            return (
              <motion.div
                key={category.title}
                className="glass rounded-2xl p-6 md:p-8 hover:border-accent-gold/20 transition-all duration-300 group spotlight-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: catIndex * 0.15 }}
                whileHover={{ y: -4 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-accent-gold/10 flex items-center justify-center group-hover:bg-accent-gold/20 transition-colors">
                    <Icon className="text-accent-gold" size={20} />
                  </div>
                  <h3 className="text-lg font-bold">{category.title}</h3>
                </div>

                {category.skills.map((skill, skillIndex) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    delay={catIndex * 0.15 + skillIndex * 0.1}
                  />
                ))}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
