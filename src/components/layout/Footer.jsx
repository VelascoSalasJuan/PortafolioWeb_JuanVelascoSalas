import { Link } from 'react-router-dom'
import { CONFIG } from '../../config'

export function Footer() {
  const anio = new Date().getFullYear()

  return (
    <footer className="pie-pagina pt-5 pb-4 mt-auto">
      <div className="container">
        <div className="row g-4">
          <div className="col-12 col-md-4">
            <h5 className="fw-bold text-white mb-3">{CONFIG.nombre}</h5>
            <p className="mb-0 small">{CONFIG.descripcion}</p>
          </div>

          <div className="col-6 col-md-3">
            <h6 className="fw-bold text-white mb-3">Navegación</h6>
            <ul className="list-unstyled d-grid gap-2 small">
              <li>
                <Link to="/">Inicio</Link>
              </li>
              <li>
                <Link to="/catalogo">Catálogo</Link>
              </li>
              <li>
                <Link to="/carrito">Carrito</Link>
              </li>
              <li>
                <Link to="/contacto">Contacto</Link>
              </li>
            </ul>
          </div>

          <div className="col-6 col-md-3">
            <h6 className="fw-bold text-white mb-3">Contacto</h6>
            <ul className="list-unstyled d-grid gap-2 small mb-0">
              <li>{CONFIG.email}</li>
              <li>{CONFIG.telefono}</li>
              <li>{CONFIG.direccion}</li>
            </ul>
          </div>

          <div className="col-12 col-md-2">
            <h6 className="fw-bold text-white mb-3">Síguenos</h6>
            <div className="d-flex gap-3">
              <a href={CONFIG.redes.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
                IG
              </a>
              <a href={CONFIG.redes.facebook} target="_blank" rel="noreferrer" aria-label="Facebook">
                FB
              </a>
            </div>
          </div>
        </div>

        <hr className="border-secondary my-4" />

        <p className="text-center small mb-0">
          © {anio} {CONFIG.nombre}. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}
