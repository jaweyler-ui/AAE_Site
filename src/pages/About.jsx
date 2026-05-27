import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useInView } from '../hooks/useInView'

export default function About() {
  useEffect(() => { document.title = 'About Dr. Leila Grant-Cleveland, Au.D. | All About Ears Beaumont TX' }, [])

  const [bio1Ref, bio1InView] = useInView()
  const [bio2Ref, bio2InView] = useInView()
  const [valuesRef, valuesInView] = useInView()
  const [missionRef, missionInView] = useInView()

  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-content">
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link to="/">Home</Link>
              <span className="breadcrumb-sep">›</span>
              <span aria-current="page">About Us</span>
            </nav>
            <span className="eyebrow eyebrow-gold">Our Story</span>
            <h1>Rooted in Southeast Texas,<br />Dedicated to Your Hearing</h1>
            <span style={{ display: 'block', width: 48, height: 3, background: 'linear-gradient(90deg, var(--gold), var(--gold-light))', borderRadius: 2, margin: '1.25rem 0' }} />
            <p>
              All About Ears, LLC was built on a simple belief: every person in Southeast Texas deserves access to expert, compassionate audiology care — delivered by a neighbor who truly cares.
            </p>
          </div>
        </div>
      </section>

      {/* Dr. Leila Bio */}
      <section className="section-padded section-white">
        <div className="container">
          <div
            ref={bio1Ref}
            className={`two-col fade-up ${bio1InView ? 'in-view' : ''}`}
          >
            <div className="team-card">
              <div className="team-photo team-photo-leila" aria-label="Dr. Leila Grant-Cleveland photo placeholder">
                <div style={{ fontSize: '6rem', fontFamily: 'var(--font-display)', fontWeight: 600 }}>LG</div>
                <div style={{ position: 'absolute', bottom: 24, left: 24, right: 24, background: 'rgba(11,34,64,0.7)', borderRadius: 'var(--radius-md)', padding: '12px 16px', backdropFilter: 'blur(8px)' }}>
                  <div style={{ color: 'white', fontWeight: 700, fontSize: '1.05rem', fontFamily: 'var(--font-display)' }}>Dr. Leila Grant-Cleveland</div>
                  <div style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.78rem', marginTop: 2 }}>Au.D. · Doctor of Audiology</div>
                </div>
              </div>
              <div className="team-info">
                <div className="team-credentials">
                  <span className="team-credential">Au.D. — Salus University</span>
                  <span className="team-credential">B.S. — Lamar University</span>
                  <span className="team-credential">AAA Member</span>
                  <span className="team-credential">Texas Licensed</span>
                  <span className="team-credential">Native Texan</span>
                </div>
                <p>
                  Growing up in Southeast Texas, Dr. Leila saw firsthand how hearing loss affected people she loved — and how long they waited to get help. That's what drove her to earn her Doctorate of Audiology from Salus University, after completing her undergraduate studies at Lamar University right here in Beaumont.
                </p>
                <p style={{ marginTop: '1rem' }}>
                  After training across the country, she came home. She founded All About Ears, LLC to offer her community what she'd always believed they deserved: expert audiology care delivered with Southern warmth, personal attention, and genuine commitment to outcomes that matter.
                </p>
                <p style={{ marginTop: '1rem' }}>
                  With over a decade of clinical experience spanning pediatric to geriatric care, tinnitus management, hearing conservation, and advanced hearing aid technology, Dr. Leila's expertise is matched only by her love for the patients she serves.
                </p>
              </div>
            </div>

            <div>
              <span className="eyebrow">Meet the Doctor</span>
              <h2>Your Audiologist.<br />Your Neighbor.</h2>
              <span className="gold-line" />
              <p style={{ color: 'var(--text-mid)', marginBottom: '1rem', lineHeight: 1.85 }}>
                Dr. Leila isn't just your audiologist — she's invested in your wellbeing the way a neighbor would be. She takes the time at every visit to understand your unique lifestyle, your hearing priorities, and the sounds that matter most to you.
              </p>
              <p style={{ color: 'var(--text-mid)', marginBottom: '1.5rem', lineHeight: 1.85 }}>
                Unlike big-box hearing chains, you'll never be rushed, never handed off to a tech, and never given a one-size-fits-all solution. Every recommendation comes from genuine expertise and genuine care.
              </p>

              <h4 style={{ color: 'var(--navy)', marginBottom: 16 }}>Certifications &amp; Training</h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10, color: 'var(--text-mid)', fontSize: '0.92rem', marginBottom: 28 }}>
                {[
                  'Doctor of Audiology (Au.D.) — Salus University, PA',
                  'Bachelor of Science in Communication Disorders — Lamar University, Beaumont TX',
                  'Member, American Academy of Audiology (AAA)',
                  'Certified Professional Supervisor — Audiometric Monitoring Program',
                  'Licensed Audiologist — State of Texas',
                  '10+ years clinical experience across all age groups',
                ].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                    <span style={{ color: 'var(--teal)', fontWeight: 700, flexShrink: 0 }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>

              <Link to="/contact" className="btn btn-gold">Book With Dr. Leila Today</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Dinah Grant Bio */}
      <section className="section-padded section-cream">
        <div className="container">
          <div
            ref={bio2Ref}
            className={`two-col fade-up ${bio2InView ? 'in-view' : ''}`}
          >
            <div>
              <span className="eyebrow">Practice Administrator &amp; Co-Owner</span>
              <h2>Dinah Grant, R.N.</h2>
              <span className="gold-line" />
              <p style={{ color: 'var(--text-mid)', marginBottom: '1rem', lineHeight: 1.85 }}>
                As co-owner and practice administrator, Dinah Grant brings the same warmth and clinical excellence that defines All About Ears to every aspect of the patient experience. Her background as a Registered Nurse ensures that patient care, safety, and wellbeing are never just afterthoughts — they're the foundation.
              </p>
              <p style={{ color: 'var(--text-mid)', marginBottom: '1.5rem', lineHeight: 1.85 }}>
                Dinah oversees the day-to-day operations of the practice with meticulous attention to detail, making sure every visit runs smoothly, every patient question is answered thoroughly, and every outcome is tracked and followed up on.
              </p>
              <p style={{ color: 'var(--text-mid)', marginBottom: '1.5rem', lineHeight: 1.85 }}>
                Together, Dr. Leila and Dinah have built not just a business, but a community institution — a place where Beaumont and Southeast Texas residents know they can trust for honest answers, expert care, and a genuine partner in their hearing health.
              </p>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <Link to="/contact" className="btn btn-teal">Schedule an Appointment</Link>
                <a href="tel:+14098667747" className="btn btn-outline-navy">📞 Call Us</a>
              </div>
            </div>

            <div className="team-card">
              <div className="team-photo team-photo-dinah" aria-label="Dinah Grant photo placeholder">
                <div style={{ fontSize: '6rem', fontFamily: 'var(--font-display)', fontWeight: 600 }}>DG</div>
                <div style={{ position: 'absolute', bottom: 24, left: 24, right: 24, background: 'rgba(11,34,64,0.7)', borderRadius: 'var(--radius-md)', padding: '12px 16px', backdropFilter: 'blur(8px)' }}>
                  <div style={{ color: 'white', fontWeight: 700, fontSize: '1.05rem', fontFamily: 'var(--font-display)' }}>Dinah Grant, R.N.</div>
                  <div style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.78rem', marginTop: 2 }}>Registered Nurse · Co-Owner &amp; Administrator</div>
                </div>
              </div>
              <div className="team-info">
                <div className="team-credentials">
                  <span className="team-credential">Registered Nurse (R.N.)</span>
                  <span className="team-credential">Co-Owner</span>
                  <span className="team-credential">Practice Administrator</span>
                </div>
                <p>
                  Dinah's nursing background brings an invaluable clinical perspective to practice management. She ensures that All About Ears operates with the same rigor, compassion, and patient-first philosophy that defines excellent healthcare across every discipline.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padded section-white">
        <div className="container">
          <div
            ref={valuesRef}
            className={`section-header centered fade-up ${valuesInView ? 'in-view' : ''}`}
          >
            <span className="eyebrow">What We Stand For</span>
            <h2>Our Values</h2>
            <span className="gold-line centered" />
          </div>
          <div className={`values-grid fade-up ${valuesInView ? 'in-view' : ''}`}>
            {[
              { icon: '❤️', title: 'Genuine Compassion', desc: 'We understand that seeking hearing help can be emotional. We meet every patient with patience, empathy, and zero judgment.' },
              { icon: '🔬', title: 'Clinical Excellence', desc: 'Evidence-based audiological care, advanced technology, and continuing education keep us at the forefront of hearing science.' },
              { icon: '🏠', title: 'Community Roots', desc: 'We live here. We shop here. Our kids go to school here. Southeast Texas isn\'t just our market — it\'s our home.' },
              { icon: '🌟', title: 'Honest Guidance', desc: 'We recommend only what you genuinely need. No upselling, no pressure, no commission-driven suggestions.' },
              { icon: '⚡', title: 'Lasting Relationships', desc: 'Our goal isn\'t a one-time transaction. We aim to be your hearing health partner for decades.' },
              { icon: '🛡️', title: 'Accountability', desc: 'All devices come with warranties. All advice comes with follow-up. We stand behind every recommendation we make.' },
            ].map((v, i) => (
              <div key={i} className={`value-card fade-up delay-${(i % 3) + 1} ${valuesInView ? 'in-view' : ''}`}>
                <div className="value-icon" aria-hidden="true">{v.icon}</div>
                <h4>{v.title}</h4>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section
        ref={missionRef}
        className={`section-padded fade-up ${missionInView ? 'in-view' : ''}`}
        style={{ background: 'linear-gradient(135deg, var(--navy) 0%, var(--navy-mid) 100%)', textAlign: 'center' }}
      >
        <div className="container" style={{ maxWidth: 760 }}>
          <span className="eyebrow" style={{ color: 'var(--gold-light)' }}>Our Mission</span>
          <h2 style={{ color: 'var(--white)', fontStyle: 'italic', marginBottom: '1.5rem' }}>
            "To ensure every Southeast Texan has access to expert, compassionate hearing care — delivered with the personal touch that only a locally owned practice can provide."
          </h2>
          <span style={{ display: 'block', width: 48, height: 3, background: 'linear-gradient(90deg, var(--gold), var(--gold-light))', borderRadius: 2, margin: '0 auto 2rem' }} />
          <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: 580, margin: '0 auto 2.5rem', fontSize: '1.05rem', lineHeight: 1.8 }}>
            Since opening our doors, we've helped hundreds of Beaumont, Port Arthur, Orange, and Southeast Texas residents reconnect with the sounds of their lives. We're just getting started.
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-gold btn-lg">Book Your Free Evaluation</Link>
            <a href="tel:+14098667747" className="btn btn-outline-white btn-lg">📞 (409) 866-7747</a>
          </div>
        </div>
      </section>
    </>
  )
}
