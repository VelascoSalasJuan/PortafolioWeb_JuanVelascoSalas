import { CertificationCard } from './ComponentesCertificationsView/CertificationCard/CertificationCard'
import './CertificationsView.css'

export function CertificationsView() {
  return (
    <div className="certifications-view-component">
      <div className="row">
        <CertificationCard />
        <CertificationCard />
        <CertificationCard />
      </div>
    </div>
  )
}
