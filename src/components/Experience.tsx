import Timeline from './Timeline'
import { experience } from '../data'

export default function Experience() {
  return (
    <section>
      <div className="section-head">
        <div className="eyebrow">parcours</div>
        <h2>Expérience professionnelle</h2>
      </div>
      <Timeline items={experience} />
    </section>
  )
}
