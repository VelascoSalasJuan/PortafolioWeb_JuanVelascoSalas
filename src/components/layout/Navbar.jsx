import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useCarrito } from '../../context/carritoContext'
import { CONFIG } from '../../config'

const ENLACES = [
  { texto: 'Inicio', ruta: '/' },
  { texto: 'Catálogo', ruta: '/catalogo' },
  { texto: 'Contacto', ruta: '/contacto' },
]

export function Navbar() {
  const [abierto, setAbierto] = useState(false)
  const { totalArticulos } = useCarrito()

  function cerrarMenu() {
    setAbierto(false)
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-bobedas sticky-top">
      <div className="container">
        <Link className="navbar-brand fw-bold fs-4" to="/" onClick={cerrarMenu}>
          {CONFIG.nombre}
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          aria-expanded={abierto}
          aria-label="Abrir menú de navegación"
          onClick={() => setAbierto((valor) => !valor)}
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className={`collapse navbar-collapse ${abierto ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center gap-lg-2">
            {ENLACES.map((enlace) => (
              <li className="nav-item" key={enlace.ruta}>
                <NavLink
                  className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                  to={enlace.ruta}
                  end={enlace.ruta === '/'}
                  onClick={cerrarMenu}
                >
                  {enlace.texto}
                </NavLink>
              </li>
            ))}
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link d-flex align-items-center gap-2 ${isActive ? 'active' : ''}`
                }
                to="/carrito"
                onClick={cerrarMenu}
              >
                <span>Carrito</span>
                {totalArticulos > 0 && (
                  <span className="badge rounded-pill text-bg-brand">{totalArticulos}</span>
                )}
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
