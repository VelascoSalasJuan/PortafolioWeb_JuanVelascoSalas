import { Link } from 'react-router-dom'
import { formatearPrecio } from '../../config'
import { useCarrito } from '../../context/carritoContext'

export function ProductCard({ producto }) {
  const { agregarProducto } = useCarrito()

  return (
    <div className="card tarjeta-producto h-100 shadow-sm">
      <Link to={`/producto/${producto.slug}`} className="enlace-sin-subrayado">
        <img
          src={producto.imagen}
          alt={producto.nombre}
          className="card-img-top imagen-producto"
          loading="lazy"
        />
      </Link>

      <div className="card-body d-flex flex-column">
        <span className="badge text-bg-light border mb-2 align-self-start">
          {producto.categoria}
        </span>

        <h5 className="card-title h6 fw-semibold">
          <Link
            to={`/producto/${producto.slug}`}
            className="enlace-sin-subrayado text-dark"
          >
            {producto.nombre}
          </Link>
        </h5>

        <p className="card-text small text-secondary flex-grow-1">
          {producto.descripcion.slice(0, 70)}...
        </p>

        <div className="d-flex align-items-center justify-content-between mt-3">
          <span className="fw-bold text-brand">{formatearPrecio(producto.precio)}</span>
          <span className="small text-secondary">{producto.stock} disponibles</span>
        </div>

        <button
          type="button"
          className="btn btn-primary btn-sm mt-3"
          onClick={() => agregarProducto(producto)}
          disabled={producto.stock === 0}
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  )
}
