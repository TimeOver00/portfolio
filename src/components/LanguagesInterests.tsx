import Reveal from './Reveal'
import { languages, interests } from '../data'

export default function LanguagesInterests() {
  return (
    <section>
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
            <div className="interests">
              {interests.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
