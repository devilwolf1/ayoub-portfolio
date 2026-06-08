import { motion } from 'framer-motion'

const variants = {
  primary:
    'bg-accent-gold text-background font-semibold hover:bg-accent-gold-light shadow-lg shadow-accent-gold/20',
  secondary:
    'glass text-primary-text border border-white/10 hover:border-accent-gold/30 hover:text-accent-gold',
  outline:
    'border border-accent-gold/40 text-accent-gold hover:bg-accent-gold/10',
  ghost: 'text-secondary-text hover:text-accent-gold',
}

export default function Button({
  children,
  variant = 'primary',
  href,
  onClick,
  className = '',
  type = 'button',
  ...props
}) {
  const classes = `inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 cursor-pointer ${variants[variant]} ${className}`

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        {...props}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={classes}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      {...props}
    >
      {children}
    </motion.button>
  )
}
