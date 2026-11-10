import './ProjectCard.css'

export function ProjectCard({
  title = '##########',
  description1 = '########## ########## ########## ##########',
  description2 = '########## ########## ##########',
  imageSrc = ''
}) {
  return (
    <div className="col-md-4 mb-4">
      <div className="project-card p-3 rounded-4 d-flex flex-column justify-content-between h-100">
        <div className="project-card-top">
          <div className="project-image-wrapper mb-3">
            {imageSrc ? (
              <img src={imageSrc} alt={title} className="project-image" />
            ) : (
              <div className="project-image-placeholder"></div>
            )}
          </div>
          <h3 className="h6 fw-bold mb-2 project-title">{title}</h3>
          <p className="project-desc mb-1">{description1}</p>
          <p className="project-desc mb-0">{description2}</p>
        </div>
        <div className="d-flex justify-content-end mt-2">
          <button type="button" className="btn btn-sm project-details-btn">
            Details
          </button>
        </div>
      </div>
    </div>
  )
}
