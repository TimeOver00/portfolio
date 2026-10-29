import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.05 },
  },
}

const item = {
  hidden: { opacity: 0, y: 10, scale: 0.9 },
  show: { opacity: 1, y: 0, scale: 1 },
}

/** Wraps a list of children and reveals them one by one once scrolled into view. */
export function StaggerGroup({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-60px' }}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.span
      className={className}
      variants={item}
      transition={{ duration: 0.35, ease: 'easeOut' }}
    >
      {children}
    </motion.span>
  )
}
