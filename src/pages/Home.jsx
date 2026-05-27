import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useInView } from '../hooks/useInView'

// ── Inline Icons ──────────────────────────────────────────
function CheckIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  )
}
function ArrowRight() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
    </svg>
  )
}

// ── Service Icons (SVG inline) ─────────────────────────────
const ServiceIcons = {
  ear: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 5C9 2.8 12 2 14 4C16 6 15.5 10 13 11C11.5 11.7 11 13 12 14C12.5 14.5 12 16 11 16C9 16 8 14 8 12L8 5Z"/>
      <path d="M16 5.5C18 7 18 10.5 16 12"/>
    </svg>
  ),
  aid: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 18h18M6 18v-6a6 6 0 0 1 12 0v6"/>
      <circle cx="12" cy="8" r="2"/>
      <path d="M9 18v2a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-2"/>
    </svg>
  ),
  shield: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      <polyline points="9 12 11 14 15 10"/>
    </svg>
  ),
  sound: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
      <path d="M19.07 4.93a10 10 0 0 1 0 14.14"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
    </svg>
  ),
  drop: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/>
    </svg>
  ),
  child: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="5" r="3"/>
      <path d="M12 8v5m-3 0v6m6-6v6m-6-6h6"/>
      <path d="M9 14a3 3 0 0 0-3 3v1h12v-1a3 3 0 0 0-3-3"/>
    </svg>
  )
}

// ── Data ──────────────────────────────────────────────────
const SERVICES = [
  { icon: 'ear', title: 'Hearing Evaluations', desc: 'Comprehensive diagnostic audiograms and speech tests for all ages — from children to seniors. Know your hearing health with certainty.', link: '/services' },
  { icon: 'aid', title: 'Digital Hearing Aids', desc: 'Premium devices from Starkey, Phonak, Oticon, Signia, ReSound & more. Fitted, adjusted, and warrantied right here in Beaumont.', link: '/hearing-aids' },
  { icon: 'shield', title: 'Custom Ear Protection', desc: 'Musician\'s monitors, hunter\'s plugs, motorcycle riders, industrial workers. Precision-molded to your ears for perfect fit and protection.', link: '/hearing-protection' },
  { icon: 'sound', title: 'Tinnitus Management', desc: 'That persistent ringing, buzzing, or hissing has solutions. Dr. Leila specializes in evidence-based tinnitus management strategies.', link: '/services' },
  { icon: 'drop', title: 'Ear Cleaning', desc: 'Safe, professional cerumen (earwax) removal using the latest techniques. Immediate relief and clearer hearing — often in a single visit.', link: '/services' },
  { icon: 'child', title: 'Pediatric to Geriatric', desc: 'Gentle, patient care for every age. From school-age hearing screenings to senior hearing rehabilitation — your whole family is welcome.', link: '/services' }
]

const TESTIMONIALS = [
  {
    quote: "Dr. Grant-Cleveland changed my life. I could finally hear my grandchildren at the dinner table again. I kept putting it off for years — I wish I'd come sooner. The whole team was so warm and patient with me.",
    name: "Mary J.",
    location: "Beaumont, TX",
    initials: "MJ",
    avatar: "avatar-teal"
  },
  {
    quote: "I was dead set against hearing aids — figured they'd be huge and embarrassing. Dr. Leila showed me technology I couldn't believe. Nobody even knows I'm wearing mine, and I can hear better than I have in a decade.",
    name: "Robert T.",
    location: "Port Arthur, TX",
    initials: "RT",
    avatar: "avatar-navy"
  },
  {
    quote: "As a gigging musician, hearing protection is everything. The custom in-ear monitors they made me are incredible — natural sound, perfect fit. My bandmates thought I was nuts spending money on 'ear plugs.' Now they all want a pair.",
    name: "Carlos M.",
    location: "Beaumont, TX",
    initials: "CM",
    avatar: "avatar-gold"
  }
]

const BRANDS = ['Starkey', 'Phonak', 'Oticon', 'Signia', 'ReSound', 'Widex', 'Unitron', 'Bernafon']

const QUIZ_QUESTIONS = [
  { q: 'Do you often ask people to repeat themselves?', id: 'q1' },
  { q: 'Do conversations in restaurants feel exhausting or hard to follow?', id: 'q2' },
  { q: 'Do others say your TV or radio is too loud?', id: 'q3' }
]

// ── Component ─────────────────────────────────────────────
export default function Home() {
  useEffect(() => { document.title = 'All About Ears, LLC | Audiologist in Beaumont, TX | (409) 866-7747' }, [])

  // Quiz state
  const [quizStep, setQuizStep] = useState(0)
  const [answers, setAnswers] = useState({})
  const [quizDone, setQuizDone] = useState(false)

  // Lead magnet form
  const [leadName, setLeadName] = useState('')
  const [leadEmail, setLeadEmail] = useState('')
  const [leadSent, setLeadSent] = useState(false)

  // Scroll animation refs
  const [trustRef, trustInView] = useInView()
  const [servicesRef, servicesInView] = useInView()
  const [testiRef, testiInView] = useInView()
  const [whyRef, whyInView] = useInView()
  const [quizRef, quizInView] = useInView()
  const [brandsRef, brandsInView] = useInView()
  const [leadRef, leadInView] = useInView()

  const handleQuizAnswer = (id, answer) => {
    const newAnswers = { ...answers, [id]: answer }
    setAnswers(newAnswers)
    if (quizStep < QUIZ_QUESTIONS.length - 1) {
      setQuizStep(quizStep + 1)
    } else {
      setQuizDone(true)
    }
  }

  const getQuizResult = () => {
    const yesCount = Object.values(answers).filter(v => v === 'yes').length
    if (yesCount >= 2) return 'concern'
    if (yesCount === 1) return 'watch'
    return 'good'
  }

  const handleLeadSubmit = (e) => {
    e.preventDefault()
    setLeadSent(true)
    // TODO: connect to Mailchimp / ConvertKit / HubSpot
  }

  return (
    <>
      {/* ── HERO ────────────────────────────────────── */}
      <section className="hero" aria-label="Welcome to All About Ears">
        <div className="hero-noise" aria-hidden="true" />
        <div className="hero-glow-1" aria-hidden="true" />
        <div className="hero-glow-2" aria-hidden="true" />

        <div className="container">
          <div className="hero-inner">
            {/* Text Side */}
            <div className="hero-content">
              <div className="hero-eyebrow">Beaumont TX's Trusted Audiologist</div>
              <h1>
                Rediscover the <em>Sounds</em> of Life in Beaumont
              </h1>
              <p className="hero-sub">
                You deserve to hear your grandchild's first laugh, every word around the dinner table, the music you love. Dr. Leila Grant-Cleveland, Au.D. and her team at All About Ears have been helping Southeast Texans reconnect with what matters most — for over a decade.
              </p>
              <div className="hero-actions">
                <Link to="/contact" className="btn btn-gold btn-lg">
                  Schedule Free Screening
                </Link>
                <a href="tel:+14098667747" className="btn btn-outline-white btn-lg">
                  📞 (409) 866-7747
                </a>
              </div>
              <div className="hero-trust-strip">
                <div className="hero-trust-item">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                  4.9 Google Stars
                </div>
                <div className="hero-trust-item">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                  10+ Years Experience
                </div>
                <div className="hero-trust-item">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                  Locally Owned &amp; Operated
                </div>
                <div className="hero-trust-item">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  Same-Week Appointments
                </div>
              </div>
            </div>

            {/* Sound Wave Visual */}
            <div className="hero-visual" aria-hidden="true">
              <div className="soundwave-container">
                <svg className="soundwave-svg" viewBox="0 0 420 420" fill="none">
                  {/* Ear center */}
                  <circle cx="210" cy="210" r="10" fill="rgba(200,145,31,0.8)"/>
                  {/* Inner ear detail */}
                  <path d="M200 210 C200 200 206 197 210 200 C214 203 213 210 210 211.5 C208.5 212.5 208 214 209 215 C209.5 215.5 209 217 208 217 C206 217 205 215 205 213" stroke="rgba(200,145,31,0.6)" strokeWidth="2" fill="none" strokeLinecap="round"/>
                  {/* Rings */}
                  <circle cx="210" cy="210" r="40"  stroke="rgba(200,145,31,0.5)" strokeWidth="2"   fill="none" className="ring-pulse-1"/>
                  <circle cx="210" cy="210" r="72"  stroke="rgba(200,145,31,0.35)" strokeWidth="1.8" fill="none" className="ring-pulse-2"/>
                  <circle cx="210" cy="210" r="110" stroke="rgba(14,139,124,0.35)" strokeWidth="1.5" fill="none" className="ring-pulse-3"/>
                  <circle cx="210" cy="210" r="150" stroke="rgba(14,139,124,0.25)" strokeWidth="1.2" fill="none" className="ring-pulse-4"/>
                  <circle cx="210" cy="210" r="194" stroke="rgba(14,139,124,0.15)" strokeWidth="1"   fill="none" className="ring-pulse-5"/>
                  <circle cx="210" cy="210" r="205" stroke="rgba(14,139,124,0.08)" strokeWidth="1"   fill="none" className="ring-pulse-6"/>
                  {/* Decorative tick marks */}
                  {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg, i) => {
                    const rad = (deg * Math.PI) / 180
                    const r1 = 164, r2 = 174
                    return (
                      <line key={i}
                        x1={210 + r1 * Math.cos(rad)} y1={210 + r1 * Math.sin(rad)}
                        x2={210 + r2 * Math.cos(rad)} y2={210 + r2 * Math.sin(rad)}
                        stroke="rgba(200,145,31,0.25)" strokeWidth="1.5" strokeLinecap="round"
                      />
                    )
                  })}
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Wave divider */}
        <div className="hero-wave-bottom" aria-hidden="true">
          <svg viewBox="0 0 1440 70" preserveAspectRatio="none" style={{ width: '100%', height: 70, display: 'block' }}>
            <path d="M0,35 C240,70 480,0 720,35 C960,70 1200,0 1440,35 L1440,70 L0,70 Z" fill="#F8F4EE"/>
          </svg>
        </div>
      </section>

      {/* ── TRUST BAR ───────────────────────────────── */}
      <section className="trust-bar" aria-label="Trust indicators">
        <div className="container">
          <div
            ref={trustRef}
            className={`trust-bar-inner fade-up ${trustInView ? 'in-view' : ''}`}
          >
            {[
              { icon: '🏆', main: '10+ Years', sub: 'Expert hearing care' },
              { icon: '✅', main: 'Licensed & Insured', sub: 'Texas Board Certified' },
              { icon: '🏠', main: 'Locally Owned', sub: 'Beaumont, TX native' },
              { icon: '🔬', main: 'Advanced Technology', sub: 'All major brands' },
              { icon: '🎓', main: 'Au.D. Degree', sub: 'Salus & Lamar University' },
              { icon: '📋', main: 'Warranties Provided', sub: 'On all hearing aids' },
            ].map((item, i) => (
              <div key={i} className="trust-item">
                <div className="trust-icon" style={{ background: 'none', fontSize: '1.3rem' }} aria-hidden="true">
                  {item.icon}
                </div>
                <div>
                  <div className="trust-text-main">{item.main}</div>
                  <div className="trust-text-sub">{item.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES OVERVIEW ───────────────────────── */}
      <section className="services-home" aria-labelledby="services-heading">
        <div className="container">
          <div
            ref={servicesRef}
            className={`section-header centered fade-up ${servicesInView ? 'in-view' : ''}`}
          >
            <span className="eyebrow">What We Do</span>
            <h2 id="services-heading">Everything Your Hearing Needs,<br />Under One Beaumont Roof</h2>
            <span className="gold-line centered" />
            <p style={{ maxWidth: 540, margin: '0 auto', color: 'var(--text-light)' }}>
              From your first hearing test to your 10-year check-in, we're your lifelong partner in hearing health across Southeast Texas.
            </p>
          </div>
          <div className="services-grid">
            {SERVICES.map((svc, i) => (
              <div
                key={i}
                className={`service-card fade-up delay-${i % 3 + 1} ${servicesInView ? 'in-view' : ''}`}
              >
                <div className="service-card-icon" aria-hidden="true">
                  {ServiceIcons[svc.icon]}
                </div>
                <h4>{svc.title}</h4>
                <p>{svc.desc}</p>
                <Link to={svc.link} className="service-card-link">
                  Learn more <ArrowRight />
                </Link>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 48 }}>
            <Link to="/services" className="btn btn-outline-teal btn-lg">View All Services</Link>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ────────────────────────────── */}
      <section className="testimonials-home" aria-labelledby="reviews-heading">
        <div className="container">
          <div
            ref={testiRef}
            className={`section-header centered fade-up ${testiInView ? 'in-view' : ''}`}
          >
            <div className="google-badge" aria-label="4.9 stars on Google Reviews">
              <div className="google-g" aria-hidden="true">G</div>
              <div className="stars-row" aria-hidden="true">
                {[...Array(5)].map((_, i) => <span key={i} className="star">★</span>)}
              </div>
              <span className="google-rating-text">4.9 Stars · 87 Google Reviews</span>
            </div>
            <h2 id="reviews-heading">Real Stories from<br />Southeast Texas Neighbors</h2>
            <span className="gold-line centered" />
          </div>
          <div className="testimonials-grid">
            {TESTIMONIALS.map((t, i) => (
              <div
                key={i}
                className={`testimonial-card fade-up delay-${i + 1} ${testiInView ? 'in-view' : ''}`}
              >
                <div className="testimonial-stars" aria-label="5 stars">
                  {[...Array(5)].map((_, j) => <span key={j} className="star">★</span>)}
                </div>
                <p className="testimonial-quote">"{t.quote}"</p>
                <div className="testimonial-author">
                  <div className={`testimonial-avatar ${t.avatar}`} aria-hidden="true">{t.initials}</div>
                  <div>
                    <div className="testimonial-name">{t.name}</div>
                    <div className="testimonial-loc">{t.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 48 }}>
            <a
              href="https://g.page/r/allaboutearstx/review"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-teal"
            >
              Read More Reviews on Google
            </a>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US / DR. LEILA ───────────────── */}
      <section className="why-us" aria-labelledby="why-heading">
        <div className="container">
          <div
            ref={whyRef}
            className={`why-us-inner fade-up ${whyInView ? 'in-view' : ''}`}
          >
            <div className="why-us-text">
              <span className="eyebrow">Why All About Ears?</span>
              <h2 id="why-heading">Southeast Texas Born &amp; Raised,<br />Dedicated to Your Hearing</h2>
              <span className="gold-line" />
              <p>
                Dr. Leila Grant-Cleveland grew up right here in Southeast Texas. She earned her Doctorate of Audiology from Salus University after completing her undergraduate work at Lamar University — and she came home to serve the community she loves.
              </p>
              <p>
                Unlike the big-box chain stores where you're just a number, at All About Ears you see the same doctor every visit. Dr. Leila takes the time to truly understand your lifestyle, your hearing goals, and what sounds matter most to you.
              </p>
              <ul className="benefits-list">
                {[
                  'Personalized care — not a one-size-fits-all approach',
                  'All major hearing aid brands available & fairly priced',
                  'On-site repairs, cleanings & adjustments',
                  'Warranties provided on all hearing devices',
                  'Certified Professional Supervisor — Audiometric Monitoring',
                  'Member, American Academy of Audiology',
                  'CareCredit & flexible financing available',
                  'Hearing conservation programs for industrial workplaces',
                ].map((item, i) => (
                  <li key={i}>
                    <span className="benefit-check" aria-hidden="true"><CheckIcon /></span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/about" className="btn btn-gold">Meet Dr. Leila →</Link>
            </div>

            <div>
              <div className="dr-photo-card">
                <div className="dr-photo-placeholder" aria-label="Dr. Leila Grant-Cleveland">LG</div>
                <div className="dr-name">Dr. Leila Grant-Cleveland</div>
                <div className="dr-title">Au.D. · Doctor of Audiology</div>
                <div className="dr-credentials">
                  <span className="credential-badge">Salus University</span>
                  <span className="credential-badge">Lamar University</span>
                  <span className="credential-badge">AAA Member</span>
                  <span className="credential-badge">Texas Licensed</span>
                </div>
                <blockquote className="dr-quote">
                  "Every patient deserves to hear the sounds that make their life worth living. That's not just our motto — it's my personal mission."
                </blockquote>
                <div style={{ marginTop: 20 }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: 8 }}>Co-Owner &amp; Administrator</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'linear-gradient(135deg, var(--gold), var(--gold-light))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '0.8rem', color: 'white', flexShrink: 0 }}>DG</div>
                    <div>
                      <div style={{ color: 'white', fontWeight: 600, fontSize: '0.9rem' }}>Dinah Grant, R.N.</div>
                      <div style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.75rem' }}>Registered Nurse · Practice Administrator</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HEARING LOSS QUIZ TEASER ─────────────────── */}
      <section className="quiz-section" aria-labelledby="quiz-heading">
        <div className="container">
          <div
            ref={quizRef}
            className={`fade-up ${quizInView ? 'in-view' : ''}`}
          >
            <div className="section-header centered" style={{ marginBottom: 40 }}>
              <span className="eyebrow">Quick Self-Check</span>
              <h2 id="quiz-heading">Could You Have Hearing Loss?</h2>
              <span className="gold-line centered" />
              <p style={{ maxWidth: 440, margin: '0 auto', color: 'var(--text-light)' }}>
                Answer 3 quick questions. It takes 30 seconds and could change your life.
              </p>
            </div>

            <div className="quiz-card">
              {!quizDone ? (
                <>
                  {/* Progress */}
                  <div className="quiz-progress" aria-label={`Question ${quizStep + 1} of ${QUIZ_QUESTIONS.length}`}>
                    {QUIZ_QUESTIONS.map((_, i) => (
                      <div key={i} className={`quiz-step ${i < quizStep ? 'done' : i === quizStep ? 'active' : ''}`} />
                    ))}
                  </div>
                  <div style={{ fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-lighter)', marginBottom: 16 }}>
                    Question {quizStep + 1} of {QUIZ_QUESTIONS.length}
                  </div>
                  <p className="quiz-question">{QUIZ_QUESTIONS[quizStep].q}</p>
                  <div className="quiz-answers">
                    <button
                      className="quiz-answer"
                      onClick={() => handleQuizAnswer(QUIZ_QUESTIONS[quizStep].id, 'yes')}
                    >
                      Yes
                    </button>
                    <button
                      className="quiz-answer"
                      onClick={() => handleQuizAnswer(QUIZ_QUESTIONS[quizStep].id, 'no')}
                    >
                      No
                    </button>
                  </div>
                </>
              ) : (
                <div className={`quiz-result quiz-result-${getQuizResult()}`}>
                  <div className="quiz-result-icon">
                    {getQuizResult() === 'concern' ? '⚠️' : getQuizResult() === 'watch' ? '👂' : '✅'}
                  </div>
                  {getQuizResult() === 'concern' && (
                    <>
                      <h3>Your Answers Suggest You May Have Hearing Loss</h3>
                      <p>Don't worry — early detection leads to much better outcomes. A comprehensive evaluation with Dr. Leila can give you answers and a clear path forward. Many people wait 7+ years before seeking help. Don't be one of them.</p>
                      <Link to="/contact" className="btn btn-gold btn-lg">Schedule Your Free Evaluation Today</Link>
                    </>
                  )}
                  {getQuizResult() === 'watch' && (
                    <>
                      <h3>You May Have Some Early Changes Worth Monitoring</h3>
                      <p>One answer suggests possible early hearing changes. A professional evaluation provides peace of mind and a baseline for future comparisons. It's quick, painless, and free.</p>
                      <Link to="/contact" className="btn btn-teal btn-lg">Book a Free Screening</Link>
                    </>
                  )}
                  {getQuizResult() === 'good' && (
                    <>
                      <h3>Great News — No Major Warning Signs!</h3>
                      <p>Your answers don't suggest significant hearing concerns right now. Regular check-ups are still recommended, especially if you're 50+, work in a noisy environment, or love loud music and hunting.</p>
                      <Link to="/contact" className="btn btn-outline-navy btn-lg">Schedule a Routine Check-Up</Link>
                    </>
                  )}
                  <button
                    onClick={() => { setQuizStep(0); setAnswers({}); setQuizDone(false) }}
                    style={{ marginTop: 16, fontSize: '0.82rem', color: 'var(--text-lighter)', textDecoration: 'underline', background: 'none', border: 'none', cursor: 'pointer' }}
                  >
                    Retake quiz
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURED BRANDS ──────────────────────────── */}
      <section className="brands-section" aria-labelledby="brands-heading">
        <div className="container">
          <div
            ref={brandsRef}
            className={`text-center fade-up ${brandsInView ? 'in-view' : ''}`}
          >
            <span className="eyebrow">All Major Brands Available</span>
            <h2 id="brands-heading" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)' }}>We Carry the World's Best Hearing Aid Brands</h2>
            <span className="gold-line centered" />
            <p style={{ color: 'var(--text-light)', maxWidth: 520, margin: '0 auto 40px' }}>
              We're not locked into one brand. Dr. Leila recommends the right device for <em>your</em> hearing loss, lifestyle, and budget.
            </p>
          </div>
          <div className="brands-grid">
            {BRANDS.map((brand, i) => (
              <div key={i} className="brand-pill">{brand}</div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 40 }}>
            <Link to="/hearing-aids" className="btn btn-outline-navy">Compare Hearing Aid Brands →</Link>
          </div>
        </div>
      </section>

      {/* ── LEAD MAGNET ──────────────────────────────── */}
      <section className="lead-magnet" aria-labelledby="guide-heading">
        <div className="container">
          <div
            ref={leadRef}
            className={`lead-magnet-inner fade-up ${leadInView ? 'in-view' : ''}`}
          >
            <div className="lead-magnet-text">
              <span className="eyebrow eyebrow-gold">Free Resource</span>
              <h2 id="guide-heading">Download Your Free<br />Southeast Texas Hearing Guide</h2>
              <span className="gold-line" />
              <p style={{ color: 'var(--text-mid)', marginBottom: '1.5rem', maxWidth: 440 }}>
                Written by Dr. Leila Grant-Cleveland, Au.D. specifically for Southeast Texans — covers the 7 most overlooked signs of hearing loss, what to expect at your first visit, and how Texas insurance &amp; financing works.
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10, color: 'var(--text-mid)', fontSize: '0.9rem' }}>
                {[
                  '7 signs most people ignore for 5–10 years',
                  'The hidden link between hearing loss and memory',
                  'Texas Medicaid &amp; Medicare hearing aid coverage explained',
                  'Why early treatment leads to dramatically better outcomes',
                ].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                    <span style={{ color: 'var(--gold)', fontWeight: 700, flexShrink: 0, marginTop: 2 }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="lead-guide-card">
              {leadSent ? (
                <div style={{ textAlign: 'center', padding: '16px 0' }}>
                  <div style={{ fontSize: '3rem', marginBottom: 12 }}>📬</div>
                  <h4 style={{ color: 'var(--teal)', fontSize: '1.2rem', marginBottom: 8 }}>Guide Sent to Your Inbox!</h4>
                  <p style={{ color: 'var(--text-mid)', fontSize: '0.9rem', marginBottom: 20 }}>
                    While you're here — why not schedule your free hearing screening? Takes less than 2 minutes to book.
                  </p>
                  <Link to="/contact" className="btn btn-gold" style={{ display: 'inline-flex' }}>
                    Book Free Screening
                  </Link>
                </div>
              ) : (
                <>
                  <h4>Get Your Free Guide Instantly</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-light)', marginBottom: 16 }}>
                    Enter your info below — we'll email it straight to you. No spam, ever.
                  </p>
                  <form className="lead-form" onSubmit={handleLeadSubmit}>
                    <div className="lead-form-row">
                      <input
                        type="text"
                        placeholder="First name"
                        value={leadName}
                        onChange={(e) => setLeadName(e.target.value)}
                        required
                        aria-label="First name"
                      />
                      <input
                        type="email"
                        placeholder="Email address"
                        value={leadEmail}
                        onChange={(e) => setLeadEmail(e.target.value)}
                        required
                        aria-label="Email address"
                      />
                    </div>
                    <button type="submit" className="btn btn-gold" style={{ width: '100%', justifyContent: 'center' }}>
                      Send My Free Guide →
                    </button>
                  </form>
                  <p className="lead-form-disclaimer">
                    🔒 Your information is safe. No spam, unsubscribe anytime.
                  </p>
                  <div style={{ textAlign: 'center', marginTop: 20 }}>
                    <span style={{ fontSize: '0.82rem', color: 'var(--text-lighter)' }}>Or just call us directly: </span>
                    <a href="tel:+14098667747" style={{ fontWeight: 700, color: 'var(--teal)', fontSize: '0.88rem' }}>(409) 866-7747</a>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ─────────────────────────────────── */}
      <section className="final-cta" aria-labelledby="cta-heading">
        <div className="container">
          <div className="final-cta-content">
            <span className="eyebrow eyebrow-white" style={{ color: 'rgba(255,255,255,0.65)' }}>Ready to Hear Better?</span>
            <h2 id="cta-heading">Don't Let Another Family Dinner Pass You By</h2>
            <p>
              Join hundreds of Southeast Texas neighbors who've rediscovered the joy of clear, easy hearing. Appointments are available this week — and your first screening is completely free.
            </p>
            <div className="final-cta-actions">
              <Link to="/contact" className="btn btn-white btn-lg">Schedule Free Screening</Link>
              <a href="tel:+14098667747" className="btn btn-outline-white btn-lg">
                📞 (409) 866-7747
              </a>
            </div>
            <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.82rem', marginTop: 20 }}>
              6270 Phelan Blvd, Beaumont, TX 77706 · Mon–Fri 8am–5pm
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
