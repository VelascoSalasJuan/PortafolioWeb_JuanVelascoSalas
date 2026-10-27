import { useState } from 'react'
import './CommentForm.css'

export function CommentForm() {
  const [commentData, setCommentData] = useState({
    name: '',
    comment: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setCommentData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit} className="comment-form-component mb-4">
      <div className="mb-3">
        <label htmlFor="commentName" className="form-label comment-form-label">Your Name</label>
        <input
          type="text"
          className="form-control comment-form-input"
          id="commentName"
          name="name"
          value={commentData.name}
          onChange={handleChange}
          placeholder="Jane Doe"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="commentText" className="form-label comment-form-label">Your Comment</label>
        <textarea
          className="form-control comment-form-textarea"
          id="commentText"
          name="comment"
          rows="3"
          value={commentData.comment}
          onChange={handleChange}
          placeholder="Share your thoughts..."
        ></textarea>
      </div>

      <div className="d-grid gap-2">
        <button type="button" className="btn comment-upload-btn">
          Upload Image
        </button>
        <button type="submit" className="btn comment-submit-btn">
          Post Comment
        </button>
      </div>
    </form>
  )
}
