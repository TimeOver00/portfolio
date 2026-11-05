import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'

/** Fades, lifts and sharpens children into place once they scroll into view.
 *  With reduced motion, only a plain fade remains (no movement, no blur). */
export default function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode
  delay?: number
  className?: string
}) {
  const reduceMotion = useReducedMotion()
  return (
    <motion.div
      className={className}
      initial={
        reduceMotion ? { opacity: 0 } : { opacity: 0, y: 32, scale: 0.97, filter: 'blur(6px)' }
      }
      whileInView={
        reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }
      }
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  )
}
