import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import { HiChatBubbleLeftRight, HiEnvelope, HiXMark } from 'react-icons/hi2'
import { profile } from '../../data/profile'

export default function FloatingContact() {
  const [open, setOpen] = useState(false)

  const contacts = [
    {
      label: 'WhatsApp',
      href: `https://wa.me/${profile.whatsapp}`,
      icon: FaWhatsapp,
      color: 'hover:text-green-400',
    },
    {
      label: 'Email',
      href: `mailto:${profile.email}`,
      icon: HiEnvelope,
      color: 'hover:text-accent-gold',
    },
  ]

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {open && (
          <motion.div
            className="absolute bottom-16 right-0 flex flex-col gap-2 mb-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
          >
            {contacts.map((contact, i) => (
              <motion.a
                key={contact.label}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-3 glass rounded-xl px-4 py-3 text-sm text-primary-text ${contact.color} transition-colors whitespace-nowrap`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ scale: 1.03 }}
              >
                <contact.icon size={18} />
                {contact.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setOpen(!open)}
        className="w-14 h-14 rounded-2xl bg-accent-gold text-background flex items-center justify-center shadow-lg shadow-accent-gold/30 cursor-pointer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Contact options"
      >
        <motion.div animate={{ rotate: open ? 90 : 0 }} transition={{ duration: 0.2 }}>
          {open ? <HiXMark size={24} /> : <HiChatBubbleLeftRight size={24} />}
        </motion.div>
      </motion.button>
    </div>
  )
}
