import { CommentsHeader } from './ComponentesCommentsPanel/CommentsHeader/CommentsHeader'
import { CommentForm } from './ComponentesCommentsPanel/CommentForm/CommentForm'
import { CommentsList } from './ComponentesCommentsPanel/CommentsList/CommentsList'
import './CommentsPanel.css'

export function CommentsPanel() {
  return (
    <div className="comments-panel p-4 rounded h-100 d-flex flex-column justify-content-between">
      <div>
        <CommentsHeader />
        <CommentForm />
      </div>
      <CommentsList />
    </div>
  )
}
