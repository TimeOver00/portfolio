import Bold from './Bold'
import Reveal from './Reveal'

type TimelineEntry = {
  when: string
  title: string
  org: string
  bullets: string[]
}

export default function Timeline({ items }: { items: TimelineEntry[] }) {
  return (
    <div className="timeline">
      {items.map((item, i) => (
        <Reveal key={item.title} delay={i * 0.08}>
          <div className="titem">
            <div className="when">
              {item.when.split(' — ').map((part, idx, arr) => (
                <span key={idx}>
                  {part}
                  {idx < arr.length - 1 && (
                    <>
                      <br />
                      —
                      <br />
                    </>
                  )}
                </span>
              ))}
            </div>
            <div className="rail">
              <h3>{item.title}</h3>
              <div className="org">{item.org}</div>
              <ul>
                {item.bullets.map((b, bi) => (
                  <li key={bi}>
                    <Bold text={b} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  )
}
