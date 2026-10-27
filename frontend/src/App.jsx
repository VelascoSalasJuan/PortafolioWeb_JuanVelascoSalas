import { Navbar } from './components/Navbar/Navbar'
import { Home } from './pages/Home/Home'
import { About } from './pages/About/About'
import { Portafolio } from './pages/Portafolio/Portafolio'
import { Contact } from './pages/Contact/Contact'

export function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Portafolio />
      <Contact />
    </div>
  )
}
