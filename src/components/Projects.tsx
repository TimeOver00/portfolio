import Reveal from './Reveal'
import { StaggerGroup, StaggerItem } from './StaggerGroup'
import { projects } from '../data'

export default function Projects() {
  return (
    <section>
      <div className="section-head">
        <div className="eyebrow">build · {String(projects.length).padStart(2, '0')}</div>
        <h2>Projets</h2>
      </div>
      <div className="projects">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.08} className={p.image ? 'featured' : undefined}>
            <div className={p.image ? 'card has-shot' : 'card'}>
              {p.image && (
                <img
                  className="shot"
                  src={`${import.meta.env.BASE_URL}${p.image}`}
                  alt={`Capture de ${p.title}`}
                  loading="lazy"
                />
              )}
              <div className="card-body">
                <div className="tag">{p.tag}</div>
                <h3>{p.title}</h3>
                <p>{p.description}</p>
                <StaggerGroup className="stack">
                  {p.stack.map((s) => (
                    <StaggerItem key={s}>{s}</StaggerItem>
                  ))}
                </StaggerGroup>
                {p.link && (
                  <a className="card-link" href={p.link} target="_blank" rel="noreferrer">
                    Voir le code sur GitHub →
                  </a>
                )}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
