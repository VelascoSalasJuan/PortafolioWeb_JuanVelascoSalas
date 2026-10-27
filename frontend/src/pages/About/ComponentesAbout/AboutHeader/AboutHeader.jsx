import './AboutHeader.css'

export function AboutHeader() {
  return (
    <div className="about-header mb-4">
      <p className="about-tagline text-uppercase mb-2">ABOUT</p>
      <h1 className="about-main-name display-3 fw-bold mb-3">
        <span>JUAN ANDRE</span>
        <br />
        <span>VELASCO SALAS</span>
      </h1>
      <p className="about-bio lead mb-4">
        Fresh Graduate 2026 with a passion for frontend development and modern UI. Focused on building clean, responsive websites with strong visuals and optimal digital experiences.
      </p>
    </div>
  )
}
