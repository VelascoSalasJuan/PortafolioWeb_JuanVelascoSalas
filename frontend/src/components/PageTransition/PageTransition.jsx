import { useLocation } from 'react-router-dom'
import './PageTransition.css'

export function PageTransition({ children }) {
  const location = useLocation()

  return (
    <div className="page-transition-wrapper" key={location.pathname}>
      {children}
    </div>
  )
}
