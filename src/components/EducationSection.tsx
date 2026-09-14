import Timeline from './Timeline'
import { education } from '../data'

export default function EducationSection() {
  return (
    <section>
      <div className="section-head">
        <div className="eyebrow">formation</div>
        <h2>Formation académique</h2>
      </div>
      <Timeline items={education} />
    </section>
  )
}
