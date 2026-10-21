import { Outlet } from 'react-router-dom'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import { AlCambiarRuta } from './AlCambiarRuta'

export function Layout() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <AlCambiarRuta />
      <Navbar />
      <main className="flex-grow-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
