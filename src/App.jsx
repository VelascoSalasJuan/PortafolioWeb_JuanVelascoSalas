import { HashRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './components/layout/Layout'
import { CarritoProvider } from './components/carrito/CarritoProvider'
import { Home } from './pages/Home'
import { Catalogo } from './pages/Catalogo'
import { DetalleProducto } from './pages/DetalleProducto'
import { Carrito } from './pages/Carrito'
import { Contacto } from './pages/Contacto'
import { NoEncontrado } from './pages/NoEncontrado'

export default function App() {
  return (
    <CarritoProvider>
      <HashRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="catalogo" element={<Catalogo />} />
            <Route path="producto/:slug" element={<DetalleProducto />} />
            <Route path="carrito" element={<Carrito />} />
            <Route path="contacto" element={<Contacto />} />
            <Route path="*" element={<NoEncontrado />} />
          </Route>
        </Routes>
      </HashRouter>
    </CarritoProvider>
  )
}
