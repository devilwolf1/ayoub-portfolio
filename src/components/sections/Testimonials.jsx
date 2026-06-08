import { motion } from 'framer-motion'
import { HiStar } from 'react-icons/hi2'
import { testimonials } from '../../data/testimonials'
import SectionHeading from '../ui/SectionHeading'

export default function Testimonials() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-gold/[0.02] to-transparent" />

      <div className="container-custom relative">
        <SectionHeading
          label="Testimonials"
          title="What Clients Say"
          description="Real feedback from businesses I've helped transform their digital presence."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="glass rounded-2xl p-6 md:p-8 flex flex-col hover:border-accent-gold/15 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              whileHover={{ y: -4 }}
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <HiStar key={i} className="text-accent-gold" size={16} />
                ))}
              </div>

              <p className="text-secondary-text text-sm leading-relaxed mb-6 flex-1 italic">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                <div className="w-10 h-10 rounded-full bg-accent-gold/10 border border-accent-gold/20 flex items-center justify-center">
                  <span className="text-xs font-bold text-accent-gold">{testimonial.avatar}</span>
                </div>
                <div>
                  <p className="text-sm font-semibold">{testimonial.name}</p>
                  <p className="text-xs text-secondary-text">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
