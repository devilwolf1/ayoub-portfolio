import { motion } from 'framer-motion'
import { useState } from 'react'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'
import { HiArrowRight } from 'react-icons/hi2'
import { projects } from '../../data/projects'
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <TiltCard key={project.id}>
            <motion.article
              className="group glass rounded-3xl overflow-hidden cursor-pointer hover:border-accent-gold/20 transition-all duration-500"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative h-56 md:h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${project.color} to-transparent`} />
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
              </div>

              <div className="p-6 md:p-8">
                <span className="text-accent-gold text-xs font-semibold uppercase tracking-wider">
                  {project.subtitle}
                </span>
                <h3 className="text-xl md:text-2xl font-bold mt-2 mb-3 group-hover:text-accent-gold transition-colors">
                  {project.title}
                </h3>
                <p className="text-secondary-text text-sm leading-relaxed mb-5">
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

                <div className="flex items-center justify-between">
                  <div className="flex gap-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="w-9 h-9 rounded-lg glass flex items-center justify-center text-secondary-text hover:text-accent-gold transition-colors"
                      aria-label="Live demo"
                    >
                      <FaExternalLinkAlt size={14} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="w-9 h-9 rounded-lg glass flex items-center justify-center text-secondary-text hover:text-accent-gold transition-colors"
                      aria-label="GitHub"
                    >
                      <FaGithub size={16} />
                    </a>
                  </div>
                  <span className="flex items-center gap-1 text-sm text-accent-gold font-medium group-hover:gap-2 transition-all">
                    View Case Study
                    <HiArrowRight size={16} />
                  </span>
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
