import { Link } from 'react-router-dom'
import { CONFIG } from '../config'
import { obtenerProductosDestacados } from '../data/productos'
import { ProductGrid } from '../components/producto/ProductGrid'

const BENEFICIOS = [
  {
    titulo: 'Calidad consistente',
    texto: 'Revisamos cada metro de listón antes de enviarlo para que tu proyecto siempre salga como esperas.',
  },
  {
    titulo: 'Envíos a todo el país',
    texto: 'Despachamos en 24 horas hábiles y te compartimos el número de guía para que sigas tu pedido.',
  },
  {
    titulo: 'Precios de mayoreo',
    texto: 'Compra por volumen y obtén descuentos automáticos que reducen el costo de tus piezas.',
  },
]

export function Home() {
  const destacados = obtenerProductosDestacados()

  return (
    <>
      <section className="hero py-5">
        <div className="container py-lg-4">
          <div className="row align-items-center g-4">
            <div className="col-lg-7">
              <span className="badge text-bg-warning mb-3">Nueva colección</span>
              <h1 className="display-4 fw-bold mb-3">
                Todo lo que necesitas para armar piezas que se venden solas
              </h1>
              <p className="lead mb-4">
                Listones, cintillos y materiales seleccionados para quienes convierten su talento en
                negocio. Compra por metro o por kit y empieza hoy mismo.
              </p>
              <div className="d-flex flex-wrap gap-2">
                <Link className="btn btn-accent btn-lg" to="/catalogo">
                  Ver catálogo
                </Link>
                <Link className="btn btn-outline-light btn-lg" to="/contacto">
                  Hablar con nosotros
                </Link>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="bg-white bg-opacity-10 border border-light border-opacity-25 rounded-4 p-4">
                <h2 className="h5 fw-bold mb-3">Pedidos mínimo</h2>
                <ul className="list-unstyled d-grid gap-3 mb-0 small">
                  <li>Sin mínimo de compra en materiales individuales.</li>
                  <li>Envío gratis a partir de $500.</li>
                  <li>Factura y comprobante en cada pedido.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-white">
        <div className="container">
          <div className="d-flex flex-wrap justify-content-between align-items-end gap-3 mb-4">
            <div>
              <h2 className="seccion-titulo mb-1">Productos destacados</h2>
              <p className="text-secondary mb-0">Los más pedidos por nuestros clientes.</p>
            </div>
            <Link className="btn btn-outline-primary" to="/catalogo">
              Ver todo el catálogo
            </Link>
          </div>

          <ProductGrid productos={destacados} />
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <h2 className="seccion-titulo text-center mb-1">Por qué comprar en {CONFIG.nombre}</h2>
          <p className="text-secondary text-center mb-5">
            Nos especializamos en materiales que sean fáciles de trabajar y que mantienen su acabado.
          </p>

          <div className="row g-4">
            {BENEFICIOS.map((beneficio) => (
              <div className="col-12 col-md-4" key={beneficio.titulo}>
                <div className="p-4 bg-white rounded-4 shadow-sm h-100">
                  <h3 className="h5 fw-bold mb-2">{beneficio.titulo}</h3>
                  <p className="text-secondary mb-0">{beneficio.texto}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand text-white py-5">
        <div className="container text-center">
          <h2 className="fw-bold mb-2">¿Listo para empezar tu pedido?</h2>
          <p className="mb-4 opacity-75">
            Escríbenos y te ayudamos a armar la combinación ideal para tu proyecto.
          </p>
          <Link className="btn btn-accent btn-lg" to="/contacto">
            Contactar por WhatsApp
          </Link>
        </div>
      </section>
    </>
  )
}
