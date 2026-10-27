import './PortfolioNav.css'

export function PortfolioNav({ activeTab, setActiveTab }) {
  const tabs = ['projects', 'certifications', 'techStack']

  return (
    <div className="portfolio-nav-component mb-5">
      <div className="mx-auto portfolio-nav-wrapper">
        <div className="btn-group" role="group">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`btn ${activeTab === tab ? 'btn-primary' : 'btn-outline-secondary'} portfolio-nav-button fw-medium`}
              onClick={() => setActiveTab(tab)}
              type="button"
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1).replace(/([A-Z])/g, ' $1').trim()}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
