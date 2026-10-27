import { ContactHeader } from './ComponentesContactFormPanel/ContactHeader/ContactHeader'
import { ContactForm } from './ComponentesContactFormPanel/ContactForm/ContactForm'
import { SocialLinks } from './ComponentesContactFormPanel/SocialLinks/SocialLinks'
import './ContactFormPanel.css'

export function ContactFormPanel() {
  return (
    <div className="contact-form-panel p-4 rounded h-100 d-flex flex-column justify-content-between">
      <div>
        <ContactHeader />
        <ContactForm />
      </div>
      <SocialLinks />
    </div>
  )
}
