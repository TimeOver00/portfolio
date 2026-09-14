import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { profile } from '../data'

const FULL_LINE = '~/ahmed > whoami --stack → .NET · Angular · PHP · Docker · CI/CD'

export default function Hero() {
  const [typed, setTyped] = useState('')

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
      className="hero"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
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
    </motion.header>
  )
}
