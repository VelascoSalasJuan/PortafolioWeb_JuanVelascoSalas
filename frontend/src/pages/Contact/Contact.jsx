import { ContactFormPanel } from './ComponentesContact/ContactFormPanel/ContactFormPanel'
import { CommentsPanel } from './ComponentesContact/CommentsPanel/CommentsPanel'
import './Contact.css'

export function Contact() {
  return (
    <section id="contact" className="container py-5 contact-container">
      <div className="row justify-content-center w-100">
        <div className="col-lg-11">
          <div className="row g-4 align-items-stretch">
            <div className="col-lg-5">
              <ContactFormPanel />
            </div>
            <div className="col-lg-7">
              <CommentsPanel />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
