import { useMemo, useState } from 'react'
import { CATEGORIAS, productos } from '../data/productos'
import { ProductGrid } from '../components/producto/ProductGrid'

export function Catalogo() {
  const [categoria, setCategoria] = useState('Todos')
  const [busqueda, setBusqueda] = useState('')

  const filtrados = useMemo(() => {
    const termino = busqueda.trim().toLowerCase()

    return productos.filter((producto) => {
      const coincideCategoria = categoria === 'Todos' || producto.categoria === categoria
      const coincideBusqueda =
        termino === '' ||
        producto.nombre.toLowerCase().includes(termino) ||
        producto.descripcion.toLowerCase().includes(termino)

      return coincideCategoria && coincideBusqueda
    })
  }, [categoria, busqueda])

  return (
    <div className="container py-5">
      <h1 className="seccion-titulo mb-1">Catálogo</h1>
      <p className="text-secondary mb-4">
        {filtrados.length} producto{filtrados.length === 1 ? '' : 's'} disponible
        {filtrados.length === 1 ? '' : 's'}.
      </p>

      <div className="row g-3 align-items-center mb-4">
        <div className="col-12 col-md-6">
          <label className="form-label small fw-semibold" htmlFor="busqueda">
            Buscar
          </label>
          <input
            id="busqueda"
            type="search"
            className="form-control"
            placeholder="Nombre o descripción del producto..."
            value={busqueda}
            onChange={(evento) => setBusqueda(evento.target.value)}
          />
        </div>

        <div className="col-12 col-md-6">
          <span className="form-label small fw-semibold d-block">Categoría</span>
          <div className="d-flex flex-wrap gap-2">
            {CATEGORIAS.map((item) => (
              <button
                key={item}
                type="button"
                className={`btn btn-sm ${
                  categoria === item ? 'btn-primary' : 'btn-outline-secondary'
                }`}
                onClick={() => setCategoria(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>

      <ProductGrid productos={filtrados} vacio="No encontramos productos con esos filtros." />
    </div>
  )
}
