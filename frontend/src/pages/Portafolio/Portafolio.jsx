import { useState } from 'react'
import { PortfolioHeader } from './ComponentesPortafolio/PortfolioHeader/PortfolioHeader'
import { PortfolioNav } from './ComponentesPortafolio/PortfolioNav/PortfolioNav'
import { PortfolioContent } from './ComponentesPortafolio/PortfolioContent/PortfolioContent'
import './Portafolio.css'

export function Portafolio() {
  const [activeTab, setActiveTab] = useState('projects')

  return (
    <section id="portafolio" className="container py-5 portafolio-container">
      <div className="row justify-content-center w-100">
        <div className="col-lg-11">
          <PortfolioHeader />
          <PortfolioNav activeTab={activeTab} setActiveTab={setActiveTab} />
          <PortfolioContent activeTab={activeTab} />
        </div>
      </div>
    </section>
  )
}
