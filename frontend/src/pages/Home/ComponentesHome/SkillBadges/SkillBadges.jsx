import './SkillBadges.css'

export function SkillBadges() {
  return (
    <div className="d-flex flex-wrap gap-2 mb-5 skill-badges-container">
      <span className="home-tag px-3 py-2 rounded-pill">React</span>
      <span className="home-tag px-3 py-2 rounded-pill">Bootstrap</span>
      <span className="home-tag px-3 py-2 rounded-pill">TypeScript</span>
    </div>
  )
}
