import { motion } from 'framer-motion'
import { useState } from 'react'
import { HiEnvelope, HiPaperAirplane } from 'react-icons/hi2'
import { profile } from '../../data/profile'
import Button from '../ui/Button'
import SectionHeading from '../ui/SectionHeading'

const projectTypes = [
  'Business Website',
  'E-Commerce',
  'Landing Page',
  'Portfolio',
  'Redesign',
  'Other',
]

const budgetRanges = [
  'Under $500',
  '$500 - $1,000',
  '$1,000 - $2,500',
  '$2,500+',
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    budget: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
    setFormData({ name: '', email: '', projectType: '', budget: '', message: '' })
  }

  const inputClasses =
    'w-full px-4 py-3.5 rounded-xl glass text-primary-text text-sm placeholder:text-secondary-text/50 focus:outline-none focus:border-accent-gold/40 focus:ring-1 focus:ring-accent-gold/20 transition-all'

  return (
    <section id="contact" className="section-padding relative">
      <div className="container-custom">
        <SectionHeading
          label="Get In Touch"
          title="Let's Build Something Great"
          description="Ready to elevate your online presence? Tell me about your project and let's make it happen."
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
          <motion.div
            className="lg:col-span-2 flex flex-col justify-center"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass rounded-2xl p-8">
              <div className="w-14 h-14 rounded-2xl bg-accent-gold/10 flex items-center justify-center mb-6">
                <HiEnvelope className="text-accent-gold" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">Start a Conversation</h3>
              <p className="text-secondary-text text-sm leading-relaxed mb-6">
                I typically respond within 24 hours. Share your project details and
                I&apos;ll get back to you with a tailored proposal.
              </p>
              <a
                href={`mailto:${profile.email}`}
                className="text-accent-gold text-sm font-medium hover:underline"
              >
                {profile.email}
              </a>
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            className="lg:col-span-3 glass rounded-2xl p-6 md:p-8 space-y-5"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="block text-xs font-medium text-secondary-text mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className={inputClasses}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs font-medium text-secondary-text mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                  className={inputClasses}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="projectType" className="block text-xs font-medium text-secondary-text mb-2">
                  Project Type
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  required
                  className={`${inputClasses} appearance-none cursor-pointer`}
                >
                  <option value="" disabled>Select type</option>
                  {projectTypes.map((type) => (
                    <option key={type} value={type} className="bg-surface">
                      {type}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="budget" className="block text-xs font-medium text-secondary-text mb-2">
                  Budget
                </label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  required
                  className={`${inputClasses} appearance-none cursor-pointer`}
                >
                  <option value="" disabled>Select budget</option>
                  {budgetRanges.map((range) => (
                    <option key={range} value={range} className="bg-surface">
                      {range}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-xs font-medium text-secondary-text mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Tell me about your project..."
                className={`${inputClasses} resize-none`}
              />
            </div>

            <Button type="submit" variant="primary" className="w-full !py-4 group">
              {submitted ? (
                'Message Sent!'
              ) : (
                <>
                  Send Message
                  <HiPaperAirplane className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={16} />
                </>
              )}
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
