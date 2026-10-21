import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { obtenerProductoPorSlug } from '../data/productos'
import { formatearPrecio } from '../config'
import { useCarrito } from '../context/carritoContext'
import { NoEncontrado } from './NoEncontrado'

export function DetalleProducto() {
  const { slug } = useParams()
  const producto = obtenerProductoPorSlug(slug)
  const { agregarProducto } = useCarrito()
  const [cantidad, setCantidad] = useState(1)
  const [agregado, setAgregado] = useState(false)

  if (!producto) {
    return <NoEncontrado />
  }

  function manejarAgregar() {
    agregarProducto(producto, cantidad)
    setAgregado(true)
  }

  return (
    <div className="container py-5">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Inicio</Link>
          </li>
          <li className="breadcrumb-item">
            <Link to="/catalogo">Catálogo</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {producto.nombre}
          </li>
        </ol>
      </nav>

      <div className="row g-5">
        <div className="col-lg-6">
          <img
            src={producto.imagen}
            alt={producto.nombre}
            className="img-fluid rounded-4 shadow-sm w-100"
          />
        </div>

        <div className="col-lg-6">
          <span className="badge text-bg-light border mb-2">{producto.categoria}</span>
          <h1 className="seccion-titulo mb-3">{producto.nombre}</h1>
          <p className="fs-4 fw-bold text-brand mb-3">{formatearPrecio(producto.precio)}</p>
          <p className="text-secondary">{producto.descripcion}</p>

          <div className="border rounded-3 p-3 my-4 bg-white">
            <p className="small mb-2 fw-semibold">Cantidad</p>
            <div className="d-flex align-items-center gap-3">
              <div className="btn-group" role="group" aria-label="Cantidad">
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  onClick={() => setCantidad((valor) => Math.max(1, valor - 1))}
                >
                  −
                </button>
                <span className="btn btn-outline-secondary disabled">{cantidad}</span>
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  onClick={() => setCantidad((valor) => Math.min(producto.stock, valor + 1))}
                >
                  +
                </button>
              </div>
              <span className="small text-secondary">
                {producto.stock} unidades disponibles
              </span>
            </div>

            <button
              type="button"
              className="btn btn-primary w-100 mt-3"
              onClick={manejarAgregar}
              disabled={producto.stock === 0}
            >
              {agregado ? 'Agregado al carrito ✓' : 'Agregar al carrito'}
            </button>
          </div>

          <ul className="list-unstyled d-grid gap-2 small text-secondary">
            <li>• Envío en 24 horas hábiles.</li>
            <li>• Envío gratis en compras mayores a $500.</li>
            <li>• Compra protegida: te devolvemos tu dinero si no corresponde.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
