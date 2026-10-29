import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { profile } from '../data'

const FULL_LINE = '~/ahmed > whoami --stack → .NET · Angular · PHP · Docker · CI/CD'

export default function Hero() {
  const [typed, setTyped] = useState('')
  const heroRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })
  const blobY = useTransform(scrollYProgress, [0, 1], [0, 120])
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 40])
  const contentOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.4])

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) {
      setTyped(FULL_LINE)
      return
    }
    let i = 0
    const id = setInterval(() => {
      i += 1
      setTyped(FULL_LINE.slice(0, i))
      if (i >= FULL_LINE.length) clearInterval(id)
    }, 22)
    return () => clearInterval(id)
  }, [])

  return (
    <motion.header
      ref={heroRef}
      className="hero"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <motion.div className="hero-aurora" style={{ y: blobY }} aria-hidden="true">
        <motion.span
          className="blob blob-a"
          animate={{ x: [0, 30, -20, 0], y: [0, -20, 15, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.span
          className="blob blob-b"
          animate={{ x: [0, -25, 20, 0], y: [0, 15, -25, 0] }}
          transition={{ duration: 28, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
      <motion.div className="hero-content" style={{ y: contentY, opacity: contentOpacity }}>
        <div className="eyebrow">disponible — {profile.location}</div>
        <h1>{profile.name}</h1>
        <p className="role">{profile.role}. {profile.tagline}</p>
        <p className="prompt">
          {typed}
          <span className="caret" />
        </p>
        <div className="contact-row">
          <a className="chip" href={`mailto:${profile.email}`}>
            ✉ {profile.email}
          </a>
          <a className="chip" href={`tel:${profile.phoneHref}`}>
            ☎ {profile.phone}
          </a>
          <a className="chip" href={profile.linkedinHref} target="_blank" rel="noopener">
            {profile.linkedin}
          </a>
        </div>
      </motion.div>
    </motion.header>
  )
}
