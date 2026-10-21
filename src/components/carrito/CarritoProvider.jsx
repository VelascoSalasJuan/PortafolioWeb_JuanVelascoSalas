import { useMemo, useState } from 'react'
import { CarritoContext } from '../../context/carritoContext'

export function CarritoProvider({ children }) {
  const [items, setItems] = useState([])

  function agregarProducto(producto, cantidad = 1) {
    setItems((previos) => {
      const existente = previos.find((item) => item.id === producto.id)

      if (existente) {
        return previos.map((item) =>
          item.id === producto.id
            ? { ...item, cantidad: Math.min(item.cantidad + cantidad, producto.stock) }
            : item,
        )
      }

      return [...previos, { ...producto, cantidad }]
    })
  }

  function cambiarCantidad(id, cantidad) {
    setItems((previos) =>
      previos.map((item) =>
        item.id === id ? { ...item, cantidad: Math.max(1, cantidad) } : item,
      ),
    )
  }

  function quitarProducto(id) {
    setItems((previos) => previos.filter((item) => item.id !== id))
  }

  function vaciarCarrito() {
    setItems([])
  }

  const valor = useMemo(
    () => ({
      items,
      totalArticulos: items.reduce((suma, item) => suma + item.cantidad, 0),
      total: items.reduce((suma, item) => suma + item.precio * item.cantidad, 0),
      agregarProducto,
      cambiarCantidad,
      quitarProducto,
      vaciarCarrito,
    }),
    [items],
  )

  return <CarritoContext.Provider value={valor}>{children}</CarritoContext.Provider>
}
