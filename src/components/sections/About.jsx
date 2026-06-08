import { motion } from 'framer-motion'
import { HiCodeBracket, HiCpuChip, HiMapPin, HiRocketLaunch, HiSparkles } from 'react-icons/hi2'
import { profile } from '../../data/profile'
import ProfileImage from '../ui/ProfileImage'
import SectionHeading from '../ui/SectionHeading'

const highlights = [
  {
    icon: HiCodeBracket,
    title: 'React Expertise',
    description: 'Building scalable, component-driven applications with modern React patterns and best practices.',
  },
  {
    icon: HiSparkles,
    title: 'Modern Web Development',
    description: 'Crafting pixel-perfect interfaces with Tailwind CSS, Framer Motion, and cutting-edge tooling.',
  },
  {
    icon: HiCpuChip,
    title: 'AI-Assisted Workflow',
    description: 'Leveraging AI tools to accelerate development, enhance creativity, and deliver faster results.',
  },
  {
    icon: HiRocketLaunch,
    title: 'Business-Focused',
    description: 'Specializing in high-converting business websites designed to drive growth and engagement.',
  },
]

export default function About() {
  return (
    <section id="about" className="section-padding relative">
      <div className="container-custom">
        <SectionHeading
          label="About Me"
          title="Crafting Digital Experiences That Convert"
          description="I'm a passionate frontend developer who combines modern design principles with AI-powered development to deliver exceptional websites for businesses."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div
            className="lg:col-span-4 flex justify-center"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative">
              <ProfileImage size="md" variant="portrait" />
              <motion.div
                className="absolute -z-10 -inset-8 bg-accent-gold/5 rounded-full blur-3xl"
                animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-8"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
          >
            <div className="glass rounded-3xl p-8 md:p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

              <div className="relative">
                <h3 className="text-2xl md:text-3xl font-bold mb-2">{profile.name}</h3>
                <p className="text-accent-gold font-medium mb-1">{profile.title}</p>
                <div className="flex items-center gap-2 text-secondary-text text-sm mb-6">
                  <HiMapPin size={14} className="text-accent-gold" />
                  {profile.location}
                </div>

                <p className="text-secondary-text leading-relaxed mb-4">
                  With a focus on creating premium digital experiences, I help businesses establish
                  a powerful online presence. My approach combines clean code architecture, stunning
                  visual design, and strategic thinking to build websites that don&apos;t just look
                  beautiful — they drive real business results.
                </p>
                <p className="text-secondary-text leading-relaxed">
                  From concept to deployment, I deliver fast, responsive, and performance-optimized
                  websites using React, Tailwind CSS, and modern development workflows enhanced by
                  AI-assisted tools.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              className="glass rounded-2xl p-6 hover:border-accent-gold/20 transition-all duration-300 group spotlight-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <div className="w-10 h-10 rounded-xl bg-accent-gold/10 flex items-center justify-center mb-4 group-hover:bg-accent-gold/20 transition-colors">
                <item.icon className="text-accent-gold" size={20} />
              </div>
              <h4 className="font-semibold mb-2">{item.title}</h4>
              <p className="text-secondary-text text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
