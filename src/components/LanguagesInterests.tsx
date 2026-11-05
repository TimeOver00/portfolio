import Reveal from './Reveal'
import { StaggerGroup, StaggerItem } from './StaggerGroup'
import { languages, interests } from '../data'

export default function LanguagesInterests() {
  return (
    <section className="plain">
      <Reveal>
        <div className="duo">
          <div>
            <h3>Langues</h3>
            {languages.map((l) => (
              <div className="lang-row" key={l.name}>
                <span>{l.name}</span>
                <span className="lvl">{l.level}</span>
              </div>
            ))}
          </div>
          <div>
            <h3>Centres d'intérêt</h3>
            <StaggerGroup className="interests">
              {interests.map((item) => (
                <StaggerItem key={item}>{item}</StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
