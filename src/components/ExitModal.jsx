import { useState, useEffect } from 'react'

export default function ExitModal() {
  const [show, setShow] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  useEffect(() => {
    // Show after 8s on page, only once per session
    if (sessionStorage.getItem('exitModalShown')) return

    const delayTimer = setTimeout(() => {
      const handleMouseLeave = (e) => {
        if (e.clientY <= 5) {
          setShow(true)
          sessionStorage.setItem('exitModalShown', 'true')
          document.removeEventListener('mouseleave', handleMouseLeave)
        }
      }
      document.addEventListener('mouseleave', handleMouseLeave)
      return () => document.removeEventListener('mouseleave', handleMouseLeave)
    }, 8000)

    return () => clearTimeout(delayTimer)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: integrate with email service (Mailchimp, ConvertKit, etc.)
    setSubmitted(true)
  }

  if (!show) return null

  return (
    <div
      className="exit-modal-overlay"
      role="dialog"
      aria-modal="true"
      aria-label="Free Hearing Health Guide"
      onClick={(e) => e.target === e.currentTarget && setShow(false)}
    >
      <div className="exit-modal">
        <div className="exit-modal-top">
          <button className="exit-modal-close" onClick={() => setShow(false)} aria-label="Close">✕</button>
          <div style={{ fontSize: '2.5rem', marginBottom: 12 }}>🎧</div>
          <h3>Before You Go — Get Your Free Guide</h3>
          <p>Download <em>"7 Signs You Need a Hearing Evaluation"</em> — written specifically for Southeast Texans by Dr. Leila Grant-Cleveland, Au.D.</p>
        </div>
        <div className="exit-modal-body">
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '20px 0' }}>
              <div style={{ fontSize: '3rem', marginBottom: 12 }}>✅</div>
              <h4 style={{ fontSize: '1.2rem', marginBottom: 8, color: 'var(--teal)' }}>Guide on its way!</h4>
              <p style={{ color: 'var(--text-mid)', fontSize: '0.92rem', marginBottom: 16 }}>
                Check your inbox — and remember, we're always one call away.
              </p>
              <a href="tel:+14098667747" className="btn btn-teal" style={{ display: 'inline-flex' }}>
                📞 Call (409) 866-7747
              </a>
            </div>
          ) : (
            <>
              <h4>Your free guide includes:</h4>
              <ul className="exit-modal-checklist">
                <li>The #1 sign most people ignore for years</li>
                <li>How hearing loss affects memory &amp; relationships</li>
                <li>What to expect at your first evaluation</li>
                <li>Southeast Texas insurance &amp; financing tips</li>
              </ul>
              <form className="exit-modal-form" onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Your first name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  aria-label="First name"
                />
                <input
                  type="email"
                  placeholder="Your best email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  aria-label="Email address"
                />
                <button type="submit" className="btn btn-gold" style={{ justifyContent: 'center' }}>
                  Send My Free Guide →
                </button>
              </form>
              <p
                className="exit-modal-decline"
                onClick={() => setShow(false)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && setShow(false)}
              >
                No thanks, I'll skip the free information
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
