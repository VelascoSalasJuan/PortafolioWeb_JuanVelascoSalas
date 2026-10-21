import { ProductCard } from './ProductCard'

export function ProductGrid({ productos, vacio = 'No hay productos para mostrar.' }) {
  if (productos.length === 0) {
    return (
      <div className="alert alert-light border text-center py-5" role="status">
        {vacio}
      </div>
    )
  }

  return (
    <div className="row g-4">
      {productos.map((producto) => (
        <div className="col-12 col-sm-6 col-lg-4 col-xl-3" key={producto.id}>
          <ProductCard producto={producto} />
        </div>
      ))}
    </div>
  )
}
