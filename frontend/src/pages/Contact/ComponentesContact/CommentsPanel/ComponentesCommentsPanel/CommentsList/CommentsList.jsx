import './CommentsList.css'

export function CommentsList() {
  return (
    <div className="comments-list-component">
      <h3 className="h6 fw-bold mb-3 comments-list-title">Recent Comments</h3>
      <div className="comments-list-container d-flex flex-column gap-3">
        <div className="comment-card-placeholder p-3 rounded">
          <div className="d-flex justify-content-between mb-2">
            <div className="placeholder-glow w-25">
              <span className="placeholder col-8 bg-secondary rounded"></span>
            </div>
            <div className="placeholder-glow w-15">
              <span className="placeholder col-6 bg-secondary rounded"></span>
            </div>
          </div>
          <div className="placeholder-glow">
            <span className="placeholder col-12 bg-secondary rounded mb-1"></span>
            <span className="placeholder col-7 bg-secondary rounded"></span>
          </div>
        </div>

        <div className="comment-card-placeholder p-3 rounded">
          <div className="d-flex justify-content-between mb-2">
            <div className="placeholder-glow w-25">
              <span className="placeholder col-8 bg-secondary rounded"></span>
            </div>
            <div className="placeholder-glow w-15">
              <span className="placeholder col-6 bg-secondary rounded"></span>
            </div>
          </div>
          <div className="placeholder-glow">
            <span className="placeholder col-10 bg-secondary rounded mb-1"></span>
            <span className="placeholder col-5 bg-secondary rounded"></span>
          </div>
        </div>

        <div className="comment-card-placeholder p-3 rounded">
          <div className="d-flex justify-content-between mb-2">
            <div className="placeholder-glow w-25">
              <span className="placeholder col-8 bg-secondary rounded"></span>
            </div>
            <div className="placeholder-glow w-15">
              <span className="placeholder col-6 bg-secondary rounded"></span>
            </div>
          </div>
          <div className="placeholder-glow">
            <span className="placeholder col-11 bg-secondary rounded mb-1"></span>
            <span className="placeholder col-6 bg-secondary rounded"></span>
          </div>
        </div>
      </div>
    </div>
  )
}
