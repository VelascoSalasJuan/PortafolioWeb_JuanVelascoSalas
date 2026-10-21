import { Link } from 'react-router-dom'

export function NoEncontrado() {
  return (
    <div className="container py-5 text-center">
      <p className="display-1 fw-bold text-brand mb-0">404</p>
      <h1 className="h3 fw-bold mb-2">No encontramos esa página</h1>
      <p className="text-secondary mb-4">
        Es posible que el enlace esté mal escrito o que el producto ya no esté disponible.
      </p>
      <Link className="btn btn-primary" to="/">
        Volver al inicio
      </Link>
    </div>
  )
}
