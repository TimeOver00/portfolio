import Reveal from './Reveal'
import { skills } from '../data'

export default function Skills() {
  return (
    <section>
      <div className="section-head">
        <div className="eyebrow">stack</div>
        <h2>Compétences</h2>
      </div>
      {skills.map((group, i) => (
        <Reveal key={group.label} delay={i * 0.08}>
          <div className="skill-group">
            <div className="label">{group.label}</div>
            <div className="tags">
              {group.items.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </Reveal>
      ))}
    </section>
  )
}
