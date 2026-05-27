import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useInView } from '../hooks/useInView'

export default function Contact() {
  useEffect(() => { document.title = 'Contact All About Ears | Book Appointment | Beaumont TX | (409) 866-7747' }, [])

  const [formRef, formInView] = useInView()
  const [submitted, setSubmitted] = useState(false)

  const [form, setForm] = useState({
    firstName: '', lastName: '', phone: '', email: '',
    service: '', message: '', preferredTime: '', howHeard: ''
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: Connect to Formspree / Netlify Forms / EmailJS / backend
    setSubmitted(true)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      {/* Page Hero */}
      <section className="page-hero" style={{ background: 'linear-gradient(135deg, var(--navy) 0%, #0C3D5A 100%)' }}>
        <div className="container">
          <div className="page-hero-content">
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link to="/">Home</Link>
              <span className="breadcrumb-sep">›</span>
              <span aria-current="page">Contact Us</span>
            </nav>
            <span className="eyebrow eyebrow-gold">Get In Touch</span>
            <h1>Book Your Appointment<br />in Beaumont, TX</h1>
            <span style={{ display: 'block', width: 48, height: 3, background: 'linear-gradient(90deg, var(--gold), var(--gold-light))', borderRadius: 2, margin: '1.25rem 0' }} />
            <p>
              We're accepting new patients now. Most appointments available within the same week. Free initial hearing screenings are available — call or fill out the form below.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Contact Strip */}
      <div style={{ background: 'var(--teal)', padding: '20px 0' }}>
        <div className="container">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24, justifyContent: 'center', alignItems: 'center' }}>
            <a href="tel:+14098667747" className="btn btn-white" style={{ gap: 8 }}>
              📞 (409) 866-7747 — Call Now
            </a>
            <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem' }}>
              Mon–Fri 8:00 AM – 5:00 PM · 6270 Phelan Blvd, Beaumont TX 77706
            </div>
          </div>
        </div>
      </div>

      {/* Main Contact Section */}
      <section className="section-padded section-cream" aria-labelledby="contact-heading">
        <div className="container">
          {submitted ? (
            <div style={{ maxWidth: 600, margin: '0 auto', textAlign: 'center', padding: '64px 0' }}>
              <div style={{ fontSize: '4rem', marginBottom: 20 }}>✅</div>
              <h2 id="contact-heading" style={{ color: 'var(--teal)', fontFamily: 'var(--font-display)', marginBottom: '1rem' }}>
                Appointment Request Received!
              </h2>
              <p style={{ color: 'var(--text-mid)', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                Thank you, {form.firstName || 'there'}! Dr. Leila's team will reach out within 1 business day to confirm your appointment. If you need immediate assistance, please call us directly.
              </p>
              <a href="tel:+14098667747" className="btn btn-gold btn-lg" style={{ display: 'inline-flex' }}>
                📞 Call (409) 866-7747
              </a>
              <button
                onClick={() => setSubmitted(false)}
                style={{ marginTop: 20, display: 'block', width: '100%', fontSize: '0.85rem', color: 'var(--text-lighter)', textDecoration: 'underline', background: 'none', border: 'none', cursor: 'pointer' }}
              >
                Submit another request
              </button>
            </div>
          ) : (
            <div ref={formRef} className={`contact-grid fade-up ${formInView ? 'in-view' : ''}`}>

              {/* Info Card */}
              <div>
                <div className="contact-info-card">
                  <h3>We're Here for You</h3>

                  <div className="contact-detail">
                    <div className="contact-detail-icon" aria-hidden="true">📞</div>
                    <div>
                      <div className="contact-detail-label">Phone</div>
                      <div className="contact-detail-value">
                        <a href="tel:+14098667747">(409) 866-7747</a>
                      </div>
                    </div>
                  </div>

                  <div className="contact-detail">
                    <div className="contact-detail-icon" aria-hidden="true">✉️</div>
                    <div>
                      <div className="contact-detail-label">Email</div>
                      <div className="contact-detail-value">
                        <a href="mailto:allaboutears15@yahoo.com">allaboutears15@yahoo.com</a>
                      </div>
                    </div>
                  </div>

                  <div className="contact-detail">
                    <div className="contact-detail-icon" aria-hidden="true">📍</div>
                    <div>
                      <div className="contact-detail-label">Address</div>
                      <div className="contact-detail-value">
                        <a
                          href="https://maps.google.com/?q=6270+Phelan+Blvd+Beaumont+TX+77706"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          6270 Phelan Blvd<br />Beaumont, TX 77706
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="contact-hours">
                    <h4>Office Hours</h4>
                    {[
                      { day: 'Monday – Friday', time: '8:00 AM – 5:00 PM' },
                      { day: 'Saturday', time: null },
                      { day: 'Sunday', time: null },
                    ].map((row, i) => (
                      <div key={i} className="hours-row">
                        <span className="day">{row.day}</span>
                        <span className={row.time ? 'time' : 'closed'}>{row.time || 'Closed'}</span>
                      </div>
                    ))}
                    <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.35)', marginTop: 10 }}>
                      * Same-week appointments typically available Mon–Fri.
                    </p>
                  </div>

                  {/* Urgency */}
                  <div style={{ marginTop: 24, padding: '16px', background: 'rgba(200,145,31,0.15)', border: '1px solid rgba(200,145,31,0.25)', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
                    <div style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--gold-light)', marginBottom: 6 }}>
                      🎯 Currently Accepting New Patients
                    </div>
                    <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.65)' }}>
                      Same-week appointments available.<br />Call now to reserve your spot.
                    </div>
                  </div>
                </div>

                {/* Google Map Placeholder */}
                <a
                  href="https://maps.google.com/?q=6270+Phelan+Blvd+Beaumont+TX+77706"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="map-placeholder"
                  aria-label="Open location in Google Maps"
                >
                  <div style={{ fontSize: '2.5rem' }} aria-hidden="true">📍</div>
                  <div className="map-placeholder-label">Click to open in Google Maps</div>
                  <div className="map-placeholder-address">6270 Phelan Blvd, Beaumont, TX 77706</div>
                  <div style={{ marginTop: 8, padding: '8px 20px', border: '1px solid rgba(255,255,255,0.3)', borderRadius: 'var(--radius-full)', fontSize: '0.82rem', color: 'rgba(255,255,255,0.7)' }}>
                    Get Directions →
                  </div>
                </a>
              </div>

              {/* Form */}
              <div className="contact-form-card">
                <h3 id="contact-heading">Request an Appointment</h3>
                <p style={{ color: 'var(--text-light)', fontSize: '0.9rem', marginBottom: 28 }}>
                  Fill out the form below and we'll contact you within 1 business day to confirm. Or call us directly — we love hearing from patients!
                </p>

                <form onSubmit={handleSubmit} noValidate aria-label="Appointment request form">
                  <div className="form-row" style={{ marginBottom: 18 }}>
                    <div className="form-group">
                      <label className="form-label" htmlFor="firstName">First Name *</label>
                      <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        className="form-input"
                        placeholder="Leila"
                        value={form.firstName}
                        onChange={handleChange}
                        required
                        autoComplete="given-name"
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="lastName">Last Name *</label>
                      <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        className="form-input"
                        placeholder="Grant"
                        value={form.lastName}
                        onChange={handleChange}
                        required
                        autoComplete="family-name"
                      />
                    </div>
                  </div>

                  <div className="form-row" style={{ marginBottom: 18 }}>
                    <div className="form-group">
                      <label className="form-label" htmlFor="phone">Phone Number *</label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        className="form-input"
                        placeholder="(409) 555-0100"
                        value={form.phone}
                        onChange={handleChange}
                        required
                        autoComplete="tel"
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="email">Email Address</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        className="form-input"
                        placeholder="you@email.com"
                        value={form.email}
                        onChange={handleChange}
                        autoComplete="email"
                      />
                    </div>
                  </div>

                  <div className="form-group" style={{ marginBottom: 18 }}>
                    <label className="form-label" htmlFor="service">What can we help you with? *</label>
                    <select
                      id="service"
                      name="service"
                      className="form-select"
                      value={form.service}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select a service...</option>
                      <option value="hearing-eval">Comprehensive Hearing Evaluation</option>
                      <option value="hearing-aids">Hearing Aid Consultation / Fitting</option>
                      <option value="custom-protection">Custom Hearing Protection</option>
                      <option value="tinnitus">Tinnitus Evaluation / Management</option>
                      <option value="ear-cleaning">Ear Cleaning</option>
                      <option value="pediatric">Pediatric Hearing Evaluation</option>
                      <option value="industrial">Industrial / Workplace Program</option>
                      <option value="other">Other / Not Sure</option>
                    </select>
                  </div>

                  <div className="form-row" style={{ marginBottom: 18 }}>
                    <div className="form-group">
                      <label className="form-label" htmlFor="preferredTime">Preferred Time</label>
                      <select
                        id="preferredTime"
                        name="preferredTime"
                        className="form-select"
                        value={form.preferredTime}
                        onChange={handleChange}
                      >
                        <option value="">Any time is fine</option>
                        <option value="morning">Morning (8am–12pm)</option>
                        <option value="afternoon">Afternoon (12pm–5pm)</option>
                        <option value="earliest">Earliest available</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="howHeard">How did you hear about us?</label>
                      <select
                        id="howHeard"
                        name="howHeard"
                        className="form-select"
                        value={form.howHeard}
                        onChange={handleChange}
                      >
                        <option value="">Select...</option>
                        <option value="google">Google Search</option>
                        <option value="friend">Friend / Family Referral</option>
                        <option value="doctor">Doctor Referral</option>
                        <option value="facebook">Facebook</option>
                        <option value="drove-by">Drove By</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group" style={{ marginBottom: 24 }}>
                    <label className="form-label" htmlFor="message">Anything else we should know?</label>
                    <textarea
                      id="message"
                      name="message"
                      className="form-textarea"
                      placeholder="Tell us about your hearing concerns, any previous hearing aids, or special needs we should be aware of..."
                      value={form.message}
                      onChange={handleChange}
                    />
                  </div>

                  <button type="submit" className="btn btn-gold btn-lg" style={{ width: '100%', justifyContent: 'center' }}>
                    Request My Appointment →
                  </button>

                  <p className="form-disclaimer">
                    🔒 Your information is private and secure. We'll contact you within 1 business day. Or call us now: <a href="tel:+14098667747" style={{ color: 'var(--teal)' }}>(409) 866-7747</a>
                  </p>
                </form>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Service Area */}
      <section className="section-padded section-navy" style={{ background: 'var(--navy)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="eyebrow" style={{ color: 'var(--gold-light)' }}>Service Area</span>
          <h2 style={{ color: 'var(--white)', marginBottom: '1.5rem' }}>
            Serving All of Southeast Texas
          </h2>
          <span style={{ display: 'block', width: 48, height: 3, background: 'linear-gradient(90deg, var(--gold), var(--gold-light))', borderRadius: 2, margin: '0 auto 1.5rem' }} />
          <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: 560, margin: '0 auto 2rem', fontSize: '1rem' }}>
            Located in the heart of Beaumont, TX — we're easily accessible from across Jefferson, Orange, and Hardin counties.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, justifyContent: 'center', maxWidth: 700, margin: '0 auto' }}>
            {[
              'Beaumont', 'Port Arthur', 'Orange', 'Nederland', 'Port Neches',
              'Groves', 'Vidor', 'Lumberton', 'Silsbee', 'Jasper', 'Bridge City', 'Winnie',
            ].map((city, i) => (
              <span key={i} style={{ padding: '6px 16px', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 'var(--radius-full)', fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)' }}>
                {city}, TX
              </span>
            ))}
          </div>
          <div style={{ marginTop: 48 }}>
            <Link to="/contact" className="btn btn-gold btn-lg">Book Your Appointment</Link>
          </div>
        </div>
      </section>
    </>
  )
}
