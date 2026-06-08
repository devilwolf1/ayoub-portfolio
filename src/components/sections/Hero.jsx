import { motion } from 'framer-motion'
import { HiArrowRight, HiSparkles } from 'react-icons/hi2'
import { profile } from '../../data/profile'
import Button from '../ui/Button'
import GradientMesh from '../ui/GradientMesh'
import MagneticButton from '../ui/MagneticButton'
import ParticleField from '../ui/ParticleField'
import ProfileImage from '../ui/ProfileImage'
import TextReveal from '../ui/TextReveal'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <GradientMesh />
      <ParticleField count={25} />

      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.04) 1px, transparent 0)',
          backgroundSize: '48px 48px',
        }}
      />

      <div className="noise-overlay" />

      <div className="container-custom px-6 relative z-10 pt-28 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[calc(100vh-8rem)]">
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="inline-flex items-center gap-2 glass-gold rounded-full px-4 py-2 mb-8"
            >
              <HiSparkles className="text-accent-gold" size={16} />
              <span className="text-sm text-secondary-text">Available for new projects</span>
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <span className="block text-primary-text">{profile.name.split(' ')[0]}</span>
              <span className="block gradient-text text-glow">{profile.name.split(' ')[1]}</span>
            </motion.h1>

            <motion.div
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <span className="text-base md:text-lg text-accent-gold font-medium">{profile.title}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-secondary-text" />
              <span className="text-base md:text-lg text-secondary-text">{profile.subtitle}</span>
            </motion.div>

            <p className="text-lg md:text-xl lg:text-2xl text-secondary-text font-light leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0">
              <TextReveal text="I Build Modern Websites That" delay={1} />
              <br />
              <TextReveal
                text="Help Businesses Grow"
                delay={1.5}
                className="text-primary-text font-medium"
              />
            </p>

            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
            >
              <MagneticButton>
                <Button href="#projects" variant="primary" className="!px-8 !py-4 !text-base group">
                  View My Work
                  <HiArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
                </Button>
              </MagneticButton>
              <MagneticButton>
                <Button href="#contact" variant="secondary" className="!px-8 !py-4 !text-base">
                  Contact Me
                </Button>
              </MagneticButton>
            </motion.div>
          </div>

          <motion.div
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <ProfileImage size="lg" variant="portrait" />
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <motion.div
            className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-1.5"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div className="w-1.5 h-1.5 rounded-full bg-accent-gold" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
