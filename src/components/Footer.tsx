import { profile } from '../data'

export default function Footer() {
  return (
    <footer>
      <a className="cta" href={`mailto:${profile.email}`}>
        → me contacter
      </a>
      <div className="fine">
        {profile.name} · {profile.location}
      </div>
    </footer>
  )
}
