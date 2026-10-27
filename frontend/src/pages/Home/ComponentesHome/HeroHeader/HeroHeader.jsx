import './HeroHeader.css'

export function HeroHeader() {
  return (
    <div className="hero-header">
      
      <h1 className="home-title display-3 fw-bold mb-3">
        <span>WEB</span>
        <br />
        <span>DEVELOPER</span>
      </h1>

      <p className="home-subtitle text-uppercase mb-2">Fresh Graduate</p>
      
      <p className="home-description lead mb-4">
        I create modern websites with a clean, responsive, and elegant aesthetic, transforming ideas into engaging, user-friendly digital experiences.
      </p>
    </div>
  )
}
