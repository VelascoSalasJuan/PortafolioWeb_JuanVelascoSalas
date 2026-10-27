import { ProjectsView } from './ComponentesPortfolioContent/ProjectsView/ProjectsView'
import { CertificationsView } from './ComponentesPortfolioContent/CertificationsView/CertificationsView'
import { TechStackView } from './ComponentesPortfolioContent/TechStackView/TechStackView'
import './PortfolioContent.css'

export function PortfolioContent({ activeTab }) {
  return (
    <div className="portfolio-content-component">
      {activeTab === 'projects' && <ProjectsView />}
      {activeTab === 'certifications' && <CertificationsView />}
      {activeTab === 'techStack' && <TechStackView />}
    </div>
  )
}
