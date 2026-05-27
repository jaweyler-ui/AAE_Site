import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

const PHONE = '(409) 866-7747'
const PHONE_HREF = 'tel:+14098667747'

export default function Header() {
  const [solid, setSolid] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [bannerOpen, setBannerOpen] = useState(true)
  const [bannerClosing, setBannerClosing] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    setSolid(window.scrollY > 60)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => { setMenuOpen(false) }, [location.pathname])

  // Prevent body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const isActive = (path) => location.pathname === path ? 'active' : ''

  const closeBanner = () => {
    setBannerClosing(true)
    setTimeout(() => {
      setBannerOpen(false)
      setBannerClosing(false)
    }, 370)
  }

  return (
    <>
      {/* Urgency Banner */}
      {bannerOpen && (
        <div className={`urgency-banner${bannerClosing ? ' closing' : ''}`} role="banner">
          <span>🎯 Now Accepting New Patients — Same-Week Appointments Available!</span>
          <a href={PHONE_HREF}>{PHONE}</a>
          <button
            className="urgency-close"
            onClick={closeBanner}
            aria-label="Close banner"
          >✕</button>
        </div>
      )}

      {/* Main Header */}
      <header className={`header ${solid || location.pathname !== '/' ? 'solid' : 'transparent'}${bannerOpen && !bannerClosing ? ' with-banner' : ''}`}>
        <div className="header-inner">

          {/* Logo */}
          <Link to="/" className="header-logo" aria-label="All About Ears — Home">
            <div className="header-logo-icon" aria-hidden="true">
              <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
                <path d="M10 6C10 3.2 14 2 16 5C18 8 17 13 14 14.5C12.5 15.2 12 17 13 18C13.5 18.5 13 20 12 20C10 20 9 18 9 16L9 6Z" stroke="white" strokeWidth="1.8" fill="none" strokeLinecap="round"/>
                <path d="M18 7C20 9 20 13 18 15" stroke="rgba(255,255,255,0.6)" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
              </svg>
            </div>
            <div className="header-logo-text">
              <div className="header-logo-name">All About Ears</div>
              <div className="header-logo-sub">Beaumont, TX Audiology</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav aria-label="Main navigation">
            <ul className="header-nav">
              <li><NavLink to="/" className={isActive('/')}>Home</NavLink></li>
              <li><NavLink to="/about" className={isActive('/about')}>About Us</NavLink></li>
              <li className="nav-dropdown">
                <a href="#services" onClick={(e) => e.preventDefault()}>
                  Services ▾
                </a>
                <div className="nav-dropdown-menu">
                  <NavLink to="/services">All Services</NavLink>
                  <NavLink to="/hearing-aids">Hearing Aids</NavLink>
                  <NavLink to="/hearing-protection">Hearing Protection</NavLink>
                </div>
              </li>
              <li><NavLink to="/blog" className={isActive('/blog')}>Resources</NavLink></li>
              <li><NavLink to="/contact" className={isActive('/contact')}>Contact</NavLink></li>
            </ul>
          </nav>

          {/* Desktop Actions */}
          <div className="header-actions">
            <a href={PHONE_HREF} className="header-phone" aria-label={`Call us at ${PHONE}`}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.59 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.56a16 16 0 0 0 6.29 6.29l1.62-.97a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              {PHONE}
            </a>
            <Link to="/contact" className="btn btn-gold btn-sm">Book Appointment</Link>
          </div>

          {/* Hamburger */}
          <button
            className={`hamburger ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span /><span /><span />
          </button>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      <nav className={`mobile-nav-overlay ${menuOpen ? 'open' : ''}`} aria-hidden={!menuOpen}>
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/services">All Services</Link>
        <Link to="/hearing-aids">Hearing Aids</Link>
        <Link to="/hearing-protection">Hearing Protection</Link>
        <Link to="/blog">Resources &amp; Blog</Link>
        <Link to="/contact">Contact Us</Link>
        <div className="mobile-nav-phone" style={{ marginTop: 32 }}>
          <a href={PHONE_HREF} className="btn btn-gold btn-lg" style={{ justifyContent: 'center' }}>
            📞 Call {PHONE}
          </a>
          <Link to="/contact" className="btn btn-outline-white btn-lg" style={{ justifyContent: 'center' }}>
            Book Appointment Online
          </Link>
        </div>
      </nav>
    </>
  )
}
