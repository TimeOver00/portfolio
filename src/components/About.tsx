import Bold from './Bold'
import Reveal from './Reveal'
import { profile } from '../data'

export default function About() {
  return (
    <section className="about">
      <div className="section-head">
        <div className="eyebrow">profil</div>
        <h2>À propos</h2>
      </div>
      <Reveal>
        <p>
          <Bold text={profile.about} />
        </p>
      </Reveal>
    </section>
  )
}
