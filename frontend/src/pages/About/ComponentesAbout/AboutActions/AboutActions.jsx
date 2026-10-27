import './AboutActions.css'

export function AboutActions() {
  return (
    <div className="d-flex flex-wrap gap-3 mb-5">
      <button type="button" className="btn about-btn-primary px-4 py-2 rounded-pill">
        DOWNLOAD CV
      </button>
      <button type="button" className="btn about-btn-outline px-4 py-2 rounded-pill">
        VIEW PROJECTS
      </button>
    </div>
  )
}
