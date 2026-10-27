import './Navbar.css'

export function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark navbar-custom fixed-top">
      <div className="container">
        <a className="navbar-brand fw-bold" href="#home">Web Personal</a>
        <div className="collapse navbar-collapse show">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#portafolio">Portfolio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
