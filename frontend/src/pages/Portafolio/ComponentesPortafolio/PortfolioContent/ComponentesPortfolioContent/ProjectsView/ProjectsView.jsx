import { ProjectCard } from './ComponentesProjectsView/ProjectCard/ProjectCard'
import './ProjectsView.css'

export function ProjectsView() {
  return (
    <div className="projects-view-component">
      <div className="row">
        <ProjectCard
          title="Portfolio Project"
          description1="########## ########## ########## ##########"
          description2="########## ########## ##########"
        />
        <ProjectCard
          title="##########"
          description1="########## ########## ##########"
          description2="########## ##########"
        />
         <ProjectCard
          title="##########"
          description1="########## ########## ##########"
          description2="########## ##########"
        />
      </div>
    </div>
  )
}
