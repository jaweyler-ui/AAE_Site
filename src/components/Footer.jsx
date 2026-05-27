import { Link } from 'react-router-dom'

const currentYear = new Date().getFullYear()

function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.59 1h3a2 2 0 0 1 2 1.72 12 12 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.56a16 16 0 0 0 6.29 6.29l1.62-.97a2 2 0 0 1 2.11-.45 12 12 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
  )
}
function MailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 5-10-5"/>
    </svg>
  )
}
function MapPinIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0z"/><circle cx="12" cy="10" r="3"/>
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="footer" aria-label="Site footer">
      <div className="container">
        <div className="footer-grid">

          {/* Brand Column */}
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="footer-logo-icon" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 26 26" fill="none">
                  <path d="M10 6C10 3.2 14 2 16 5C18 8 17 13 14 14.5C12.5 15.2 12 17 13 18C13.5 18.5 13 20 12 20C10 20 9 18 9 16L9 6Z" stroke="white" strokeWidth="1.8" fill="none" strokeLinecap="round"/>
                  <path d="M18 7C20 9 20 13 18 15" stroke="rgba(255,255,255,0.6)" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
                </svg>
              </div>
              <span className="footer-logo-name">All About Ears, LLC</span>
            </div>
            <p>
              Southeast Texas's trusted, locally owned audiology practice. Dr. Leila Grant-Cleveland, Au.D. and team have been helping neighbors hear better since 2013.
            </p>
            <div className="footer-aaa-badge" aria-label="Member of American Academy of Audiology">
              <span style={{ fontSize: '1.4rem' }}>🏆</span>
              <span>Member, American Academy<br />of Audiology (AAA)</span>
            </div>
            <div className="footer-social" style={{ marginTop: 16 }} aria-label="Social media links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Visit our Facebook page">f</a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Visit our X/Twitter page">𝕏</a>
            </div>
          </div>

          {/* Services Column */}
          <div className="footer-col">
            <h5>Services</h5>
            <ul className="footer-links">
              <li><Link to="/services">Hearing Evaluations</Link></li>
              <li><Link to="/hearing-aids">Digital Hearing Aids</Link></li>
              <li><Link to="/hearing-protection">Custom Ear Protection</Link></li>
              <li><Link to="/services">Tinnitus Management</Link></li>
              <li><Link to="/services">Ear Cleaning</Link></li>
              <li><Link to="/services">Pediatric Audiology</Link></li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="footer-col">
            <h5>Company</h5>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Dr. Leila</Link></li>
              <li><Link to="/about">Meet Dinah Grant, R.N.</Link></li>
              <li><Link to="/blog">Blog &amp; Resources</Link></li>
              <li><Link to="/contact">Book Appointment</Link></li>
              <li><Link to="/contact">Find Us</Link></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="footer-col">
            <h5>Contact Us</h5>
            <div className="footer-contact-item">
              <PhoneIcon />
              <span><a href="tel:+14098667747">(409) 866-7747</a></span>
            </div>
            <div className="footer-contact-item">
              <MailIcon />
              <span><a href="mailto:allaboutears15@yahoo.com">allaboutears15@yahoo.com</a></span>
            </div>
            <div className="footer-contact-item">
              <MapPinIcon />
              <span>
                6270 Phelan Blvd<br />
                Beaumont, TX 77706
              </span>
            </div>
            <div className="footer-contact-item" style={{ marginTop: 8 }}>
              <span style={{ fontSize: '0.82rem', lineHeight: 1.6, color: 'rgba(255,255,255,0.45)' }}>
                Mon – Fri: 8:00 AM – 5:00 PM<br />
                Sat – Sun: Closed
              </span>
            </div>
            <Link to="/contact" className="btn btn-gold btn-sm" style={{ marginTop: 16, display: 'inline-flex' }}>
              Book Appointment
            </Link>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p className="footer-bottom-text">
            © {currentYear} All About Ears, LLC — Beaumont, TX. All rights reserved.
            Serving Beaumont, Port Arthur, Orange &amp; Southeast Texas.
          </p>
          <div className="footer-bottom-links">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Use</a>
            <a href="#accessibility">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
