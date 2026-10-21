import { Link } from 'react-router-dom'
import { formatearPrecio } from '../config'
import { useCarrito } from '../context/carritoContext'

export function Carrito() {
  const { items, total, totalArticulos, cambiarCantidad, quitarProducto, vaciarCarrito } =
    useCarrito()

  if (items.length === 0) {
    return (
      <div className="container py-5 text-center">
        <h1 className="seccion-titulo mb-2">Tu carrito está vacío</h1>
        <p className="text-secondary mb-4">
          Todavía no has agregado productos. Explora el catálogo y encuentra tu material.
        </p>
        <Link className="btn btn-primary" to="/catalogo">
          Ir al catálogo
        </Link>
      </div>
    )
  }

  return (
    <div className="container py-5">
      <div className="d-flex flex-wrap justify-content-between align-items-center gap-3 mb-4">
        <h1 className="seccion-titulo mb-0">Carrito</h1>
        <button type="button" className="btn btn-outline-danger btn-sm" onClick={vaciarCarrito}>
          Vaciar carrito
        </button>
      </div>

      <div className="row g-4">
        <div className="col-12 col-lg-8">
          {items.map((item) => (
            <div
              className="d-flex flex-wrap align-items-center gap-3 bg-white rounded-4 shadow-sm p-3 mb-3"
              key={item.id}
            >
              <img
                src={item.imagen}
                alt={item.nombre}
                className="rounded-3"
                style={{ width: 72, height: 72, objectFit: 'cover' }}
              />

              <div className="flex-grow-1">
                <Link
                  to={`/producto/${item.slug}`}
                  className="enlace-sin-subrayado text-dark fw-semibold"
                >
                  {item.nombre}
                </Link>
                <p className="small text-secondary mb-0">{formatearPrecio(item.precio)} c/u</p>
              </div>

              <div className="btn-group" role="group" aria-label={`Cantidad de ${item.nombre}`}>
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  onClick={() => cambiarCantidad(item.id, item.cantidad - 1)}
                >
                  −
                </button>
                <span className="btn btn-outline-secondary disabled">{item.cantidad}</span>
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  onClick={() => cambiarCantidad(item.id, item.cantidad + 1)}
                >
                  +
                </button>
              </div>

              <span className="fw-bold">
                {formatearPrecio(item.precio * item.cantidad)}
              </span>

              <button
                type="button"
                className="btn btn-sm btn-outline-danger"
                onClick={() => quitarProducto(item.id)}
                aria-label={`Quitar ${item.nombre}`}
              >
                Quitar
              </button>
            </div>
          ))}
        </div>

        <div className="col-12 col-lg-4">
          <div className="bg-white rounded-4 shadow-sm p-4">
            <h2 className="h5 fw-bold mb-3">Resumen</h2>

            <div className="d-flex justify-content-between small text-secondary mb-2">
              <span>Artículos</span>
              <span>{totalArticulos}</span>
            </div>

            <div className="d-flex justify-content-between small text-secondary mb-3">
              <span>Envío</span>
              <span>{total >= 500 ? 'Gratis' : 'Por calcular'}</span>
            </div>

            <hr />

            <div className="d-flex justify-content-between fw-bold fs-5 mb-3">
              <span>Total</span>
              <span>{formatearPrecio(total)}</span>
            </div>

            <button type="button" className="btn btn-primary w-100">
              Finalizar compra
            </button>
            <p className="small text-secondary text-center mt-3 mb-0">
              Te contactamos para confirmar el pago y el envío.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
