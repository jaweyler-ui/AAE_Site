export default function FloatingPhone() {
  return (
    <div className="floating-phone" aria-label="Call All About Ears">
      <div className="floating-phone-pulse" aria-hidden="true" />
      <div className="floating-phone-pulse-2" aria-hidden="true" />
      <a
        href="tel:+14098667747"
        className="floating-phone-btn"
        aria-label="Call (409) 866-7747"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.59 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.56a16 16 0 0 0 6.29 6.29l1.62-.97a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
        </svg>
      </a>
      <div className="floating-phone-tooltip">(409) 866-7747 — Call Now</div>
    </div>
  )
}
