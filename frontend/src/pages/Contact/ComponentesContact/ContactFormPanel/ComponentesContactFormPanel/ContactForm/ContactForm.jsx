import { useState } from 'react'
import './ContactForm.css'

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Project Collaboration',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit} className="contact-form-component">
      <div className="row g-3 mb-3">
        <div className="col-md-6">
          <label htmlFor="contactName" className="form-label contact-form-label">Your Name</label>
          <input
            type="text"
            className="form-control contact-form-input"
            id="contactName"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe"
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="contactEmail" className="form-label contact-form-label">Your Email</label>
          <input
            type="email"
            className="form-control contact-form-input"
            id="contactEmail"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="john@example.com"
          />
        </div>
      </div>

      <div className="mb-3">
        <label htmlFor="contactSubject" className="form-label contact-form-label">Subject</label>
        <select
          className="form-select contact-form-input"
          id="contactSubject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
        >
          <option value="Project Collaboration">Project Collaboration</option>
          <option value="Job Opportunity">Job Opportunity</option>
          <option value="General Inquiry">General Inquiry</option>
        </select>
      </div>

      <div className="mb-3">
        <label htmlFor="contactMessage" className="form-label contact-form-label">Your Message</label>
        <textarea
          className="form-control contact-form-textarea"
          id="contactMessage"
          name="message"
          rows="4"
          value={formData.message}
          onChange={handleChange}
          placeholder="Write your message here..."
        ></textarea>
      </div>

      <div className="mb-3 contact-captcha-container p-3 rounded">
        <div className="d-flex align-items-center justify-content-between">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="captchaPlaceholder" disabled />
            <label className="form-check-label contact-captcha-label" htmlFor="captchaPlaceholder">
              I am not a robot (CAPTCHA placeholder)
            </label>
          </div>
          <span className="badge bg-secondary">Security</span>
        </div>
      </div>

      <button type="submit" className="btn w-100 contact-submit-btn">
        Send Message
      </button>
    </form>
  )
}
