import { useState } from 'react'
import { CONFIG } from '../config'

export function Contacto() {
  const [enviado, setEnviado] = useState(false)

  function manejarEnvio(evento) {
    evento.preventDefault()
    setEnviado(true)
  }

  return (
    <div className="container py-5">
      <div className="row g-5">
        <div className="col-lg-5">
          <h1 className="seccion-titulo mb-3">Contáctanos</h1>
          <p className="text-secondary mb-4">
            ¿Tienes dudas sobre un material, un pedido mayorista o quieres hacer un pedido? Escríbenos
            y te respondemos el mismo día hábil.
          </p>

          <ul className="list-unstyled d-grid gap-3">
            <li>
              <strong>Correo:</strong>{' '}
              <a href={`mailto:${CONFIG.email}`} className="enlace-sin-subrayado text-brand">
                {CONFIG.email}
              </a>
            </li>
            <li>
              <strong>Teléfono:</strong> {CONFIG.telefono}
            </li>
            <li>
              <strong>Dirección:</strong> {CONFIG.direccion}
            </li>
          </ul>
        </div>

        <div className="col-lg-7">
          <div className="bg-white rounded-4 shadow-sm p-4 p-md-5">
            {enviado ? (
              <div className="text-center py-4">
                <h2 className="h4 fw-bold mb-2">¡Gracias por escribirnos!</h2>
                <p className="text-secondary mb-4">
                  Recibimos tu mensaje y te responderemos muy pronto.
                </p>
                <button
                  type="button"
                  className="btn btn-outline-primary"
                  onClick={() => setEnviado(false)}
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={manejarEnvio}>
                <div className="row g-3">
                  <div className="col-12 col-md-6">
                    <label className="form-label" htmlFor="nombre">
                      Nombre
                    </label>
                    <input id="nombre" name="nombre" className="form-control" required />
                  </div>

                  <div className="col-12 col-md-6">
                    <label className="form-label" htmlFor="correo">
                      Correo electrónico
                    </label>
                    <input
                      id="correo"
                      name="correo"
                      type="email"
                      className="form-control"
                      required
                    />
                  </div>

                  <div className="col-12">
                    <label className="form-label" htmlFor="asunto">
                      Asunto
                    </label>
                    <select id="asunto" name="asunto" className="form-select" defaultValue="Pedido">
                      <option>Pedido</option>
                      <option>Mayorista</option>
                      <option>Materiales</option>
                      <option>Otro</option>
                    </select>
                  </div>

                  <div className="col-12">
                    <label className="form-label" htmlFor="mensaje">
                      Mensaje
                    </label>
                    <textarea
                      id="mensaje"
                      name="mensaje"
                      rows={5}
                      className="form-control"
                      placeholder="Cuéntanos qué necesitas..."
                      required
                    />
                  </div>

                  <div className="col-12">
                    <button type="submit" className="btn btn-primary">
                      Enviar mensaje
                    </button>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
