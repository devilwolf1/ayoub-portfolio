import { motion } from 'framer-motion'
import { useState } from 'react'
import { FaExternalLinkAlt } from 'react-icons/fa'
import { HiArrowRight } from 'react-icons/hi2'
import { projects } from '../../data/projects'
import Button from '../ui/Button'
import SectionHeading from '../ui/SectionHeading'
import TiltCard from '../ui/TiltCard'
import ProjectModal from './ProjectModal'

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <section id="projects" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-gold/[0.02] to-transparent" />

      <div className="container-custom relative">
        <SectionHeading
          label="Featured Work"
          title="Projects That Drive Results"
          description="Explore my latest work — premium websites crafted for real businesses with measurable impact."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <TiltCard key={project.id}>
              <motion.article
                className="group glass rounded-3xl overflow-hidden hover:border-accent-gold/20 transition-all duration-500 flex flex-col h-full"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative h-56 md:h-64 overflow-hidden block"
                  aria-label={`Visit ${project.title} website`}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${project.color} to-transparent`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
                  <div className="absolute top-4 right-4 glass-gold rounded-full px-3 py-1.5 flex items-center gap-1.5 text-xs font-medium text-accent-gold opacity-0 group-hover:opacity-100 transition-opacity">
                    <FaExternalLinkAlt size={10} />
                    Visit Site
                  </div>
                </a>

                <div className="p-6 md:p-8 flex flex-col flex-1">
                  <span className="text-accent-gold text-xs font-semibold uppercase tracking-wider">
                    {project.subtitle}
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold mt-2 mb-3 group-hover:text-accent-gold transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-secondary-text text-sm leading-relaxed mb-5 flex-1">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs rounded-md bg-white/5 text-secondary-text"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-col gap-3">
                    <Button
                      href={project.demoUrl}
                      variant="primary"
                      className="w-full !py-3 group/btn"
                    >
                      <FaExternalLinkAlt size={14} />
                      Visit Website
                      <HiArrowRight className="group-hover/btn:translate-x-1 transition-transform" size={16} />
                    </Button>
                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      className="flex items-center justify-center gap-1 text-sm text-secondary-text hover:text-accent-gold font-medium transition-colors cursor-pointer"
                    >
                      View Case Study
                      <HiArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </motion.article>
            </TiltCard>
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  )
}
