import './AboutStats.css'

export function AboutStats() {
  return (
    <div className="row g-3 w-100">
      <div className="col-md-4">
        <div className="about-stat-card p-4 rounded-4 text-center h-100 d-flex flex-column justify-content-center">
          <h3 className="h5 fw-bold mb-1">PROJECTS</h3>
          <p className="text-muted mb-0 small">Web development & apps</p>
        </div>
      </div>
      <div className="col-md-4">
        <div className="about-stat-card p-4 rounded-4 text-center h-100 d-flex flex-column justify-content-center">
          <h3 className="h5 fw-bold mb-1">CERTIFICATES</h3>
          <p className="text-muted mb-0 small">Professional credentials</p>
        </div>
      </div>
      <div className="col-md-4">
        <div className="about-stat-card p-4 rounded-4 text-center h-100 d-flex flex-column justify-content-center">
          <h3 className="h5 fw-bold mb-1">COMPLETED WORKS</h3>
          <p className="text-muted mb-0 small">Delivered applications</p>
        </div>
      </div>
    </div>
  )
}
