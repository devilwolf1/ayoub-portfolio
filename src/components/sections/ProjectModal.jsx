import { AnimatePresence, motion } from 'framer-motion'
import { useEffect } from 'react'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'
import { HiCheck, HiXMark } from 'react-icons/hi2'
import Button from '../ui/Button'

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleEsc = (e) => e.key === 'Escape' && onClose()
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleEsc)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleEsc)
    }
  }, [onClose])

  if (!project) return null

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="absolute inset-0 bg-background/80 backdrop-blur-xl"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        />

        <motion.div
          className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto glass rounded-3xl"
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 40, scale: 0.95 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-10 h-10 rounded-xl glass flex items-center justify-center text-secondary-text hover:text-primary-text transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <HiXMark size={20} />
          </button>

          <div className="relative h-48 md:h-64 overflow-hidden rounded-t-3xl">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent" />
          </div>

          <div className="p-6 md:p-8">
            <span className="text-accent-gold text-sm font-medium">{project.subtitle}</span>
            <h3 className="text-2xl md:text-3xl font-bold mt-1 mb-6">{project.title}</h3>

            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-accent-gold mb-2">Problem</h4>
                <p className="text-secondary-text leading-relaxed">{project.problem}</p>
              </div>

              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-accent-gold mb-2">Solution</h4>
                <p className="text-secondary-text leading-relaxed">{project.solution}</p>
              </div>

              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-accent-gold mb-3">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 text-xs font-medium rounded-lg bg-accent-gold/10 text-accent-gold border border-accent-gold/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-accent-gold mb-3">Features</h4>
                <ul className="space-y-2">
                  {project.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-secondary-text text-sm">
                      <HiCheck className="text-accent-gold mt-0.5 shrink-0" size={16} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-accent-gold mb-3">Results</h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {project.results.map((result) => (
                    <div key={result} className="glass-gold rounded-xl p-4 text-center">
                      <p className="text-sm text-primary-text font-medium">{result}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mt-8">
              <Button href={project.demoUrl} variant="primary" className="flex-1">
                <FaExternalLinkAlt size={14} />
                Live Demo
              </Button>
              <Button href={project.githubUrl} variant="secondary" className="flex-1">
                <FaGithub size={16} />
                View Code
              </Button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
