import { motion } from 'framer-motion'

export default function ScrollReveal({ children, className = '', delay = 0, direction = 'up' }) {
  const directions = {
    up: { y: 30, x: 0 },
    down: { y: -30, x: 0 },
    left: { y: 0, x: 30 },
    right: { y: 0, x: -30 },
  }

  const offset = directions[direction] || directions.up

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.45, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}
