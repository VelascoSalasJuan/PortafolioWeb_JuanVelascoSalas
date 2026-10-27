import { TechCard } from './ComponentesTechStackView/TechCard/TechCard'
import './TechStackView.css'

export function TechStackView() {
  const techItems = Array.from({ length: 10 })

  return (
    <div className="tech-stack-view-component">
      <div className="tech-stack-grid">
        {techItems.map((_, index) => (
          <TechCard key={index} />
        ))}
      </div>
    </div>
  )
}
