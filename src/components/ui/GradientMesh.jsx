import { motion } from 'framer-motion'

export default function GradientMesh() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full opacity-30"
        style={{
          background: 'radial-gradient(circle, rgba(212,175,55,0.15) 0%, transparent 70%)',
          top: '10%',
          left: '20%',
        }}
        animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(212,175,55,0.1) 0%, transparent 70%)',
          bottom: '10%',
          right: '10%',
        }}
        animate={{ x: [0, -40, 0], y: [0, -50, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full opacity-15"
        style={{
          background: 'radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%)',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  )
}
