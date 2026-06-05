import { useState } from 'react'
import { profile } from '../data/portfolioData.js'

const initialFormState = {
  name: '',
  email: '',
  message: '',
}

function Contact() {
  const [formData, setFormData] = useState(initialFormState)
  const [status, setStatus] = useState('')

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setStatus('Message preview created. Connect this form to EmailJS, Formspree, Netlify Forms, or a backend API for real sending.')
    setFormData(initialFormState)
  }

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setStatus('Email copied to clipboard.')
    } catch {
      setStatus(`Copy failed. Email: ${profile.email}`)
    }
  }

  return (
    <section className="section contact-section" id="contact">
      <div className="contact-card contact-layout">
        <div>
          <p className="eyebrow">Contact</p>
          <h2>Start a conversation.</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Send a short message or copy the email address.</p>
          <div className="contact-actions">
            <button className="button primary" type="button" onClick={copyEmail}>
              Copy email
            </button>
            {profile.socials.map((social) => (
              <a className="social-link" href={social.href} key={social.label} target="_blank" rel="noreferrer">
                {social.label}
              </a>
            ))}
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            Name
            <input name="name" value={formData.name} onChange={handleChange} placeholder="Your name" required />
          </label>
          <label>
            Email
            <input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="your@email.com" required />
          </label>
          <label>
            Message
            <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Write your message..." rows="5" required />
          </label>
          <button className="button primary form-button" type="submit">
            Send message
          </button>
          {status && <p className="form-status">{status}</p>}
        </form>
      </div>
    </section>
  )
}

export default Contact
