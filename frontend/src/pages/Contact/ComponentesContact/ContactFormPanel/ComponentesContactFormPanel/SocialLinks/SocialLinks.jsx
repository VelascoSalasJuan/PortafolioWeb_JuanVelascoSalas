import './SocialLinks.css'

export function SocialLinks() {
  return (
    <div className="social-links-component mt-4 pt-4 border-top border-secondary border-opacity-25">
      <h3 className="h6 fw-bold mb-3 social-links-title">Connect With Me</h3>

      <div className="mb-2">
        <button type="button" className="btn w-100 social-btn-linkedin">
          LinkedIn
        </button>
      </div>

      <div className="row g-2">
        <div className="col-6">
          <button type="button" className="btn w-100 social-btn-grid">
            Instagram
          </button>
        </div>
        <div className="col-6">
          <button type="button" className="btn w-100 social-btn-grid">
            YouTube
          </button>
        </div>
        <div className="col-6">
          <button type="button" className="btn w-100 social-btn-grid">
            TikTok
          </button>
        </div>
        <div className="col-6">
          <button type="button" className="btn w-100 social-btn-grid">
            GitHub
          </button>
        </div>
      </div>
    </div>
  )
}
