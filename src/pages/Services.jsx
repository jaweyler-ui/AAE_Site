import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useInView } from '../hooks/useInView'

const SERVICES = [
  {
    emoji: '🔬',
    title: 'Comprehensive Hearing Evaluations',
    subtitle: 'Your hearing journey starts here',
    desc: 'Our diagnostic evaluations go far beyond a simple "pass/fail" test. Dr. Leila conducts a full audiological assessment including pure-tone audiometry, speech discrimination testing, tympanometry, and otoacoustic emission (OAE) testing. You\'ll leave with a complete picture of your hearing health, a detailed report, and a clear, personalized recommendation.',
    features: ['Pure-tone audiometry', 'Speech recognition testing', 'Middle ear evaluation (tympanometry)', 'Otoacoustic emissions (OAE)', 'Pediatric behavioral testing', 'Detailed written report'],
    cta: '/contact',
    ctaText: 'Schedule Your Evaluation',
    bg: 'var(--teal-pale)',
  },
  {
    emoji: '🎧',
    title: 'Digital Hearing Aids',
    subtitle: 'Technology that fits your life',
    desc: 'Modern hearing aids are nothing like the bulky, squealing devices of decades past. Today\'s instruments are sleek, discreet, and packed with AI-powered technology. We carry all major brands — Starkey, Phonak, Oticon, Signia, ReSound, and Widex — and we take the time to fit, program, and follow up until you\'re hearing exactly as you should be.',
    features: ['All major brands available', 'Custom fitting and programming', 'Bluetooth connectivity options', 'Rechargeable models available', 'On-site follow-up adjustments', 'Warranties on all devices'],
    cta: '/hearing-aids',
    ctaText: 'Explore Hearing Aids',
    bg: 'var(--gold-ultra-pale)',
  },
  {
    emoji: '🛡️',
    title: 'Custom Hearing Protection',
    subtitle: 'Precision-molded to your ears',
    desc: 'Generic foam earplugs can\'t match the protection, comfort, and acoustic clarity of custom-molded devices. Whether you\'re a musician who needs to hear the mix clearly, a hunter protecting your ears from muzzle blast, or an industrial worker in a noisy environment — we make ear protection that actually works and actually fits.',
    features: ['Musician\'s in-ear monitors', 'Hunter\'s filtered ear plugs', 'Motorcycle/rider plugs', 'Industrial/workplace protection', 'Swim plugs and sleeping plugs', 'Motorsport ear protection'],
    cta: '/hearing-protection',
    ctaText: 'Learn About Ear Protection',
    bg: 'var(--cream)',
  },
  {
    emoji: '🔔',
    title: 'Tinnitus Management',
    subtitle: 'Relief from the constant ringing',
    desc: 'Tinnitus — persistent ringing, buzzing, or hissing — affects millions and can significantly impact quality of life. Dr. Leila offers evidence-based tinnitus management including sound therapy, tinnitus retraining therapy (TRT) counseling, and hearing aid solutions with built-in tinnitus masking programs. You don\'t have to just "live with it."',
    features: ['Comprehensive tinnitus evaluation', 'Sound therapy programs', 'TRT counseling and education', 'Hearing aid masking features', 'Lifestyle modification guidance', 'Ongoing management support'],
    cta: '/contact',
    ctaText: 'Get Tinnitus Help',
    bg: 'var(--teal-ultra-pale)',
  },
  {
    emoji: '💧',
    title: 'Ear Cleaning & Cerumen Removal',
    subtitle: 'Safe, gentle, professional',
    desc: 'Earwax buildup (cerumen impaction) is one of the most common and easily treatable causes of sudden hearing loss and discomfort. Our professional cerumen removal is safe, effective, and often provides immediate relief. We use the latest techniques — curette, irrigation, or suction — tailored to your specific situation.',
    features: ['Curette-based removal', 'Gentle irrigation', 'Microsuction technique', 'Immediate symptom relief', 'Safe for all ages', 'No Q-tips, no risk'],
    cta: '/contact',
    ctaText: 'Book Ear Cleaning',
    bg: 'var(--cream)',
  },
  {
    emoji: '👨‍👩‍👧‍👦',
    title: 'Pediatric to Geriatric Care',
    subtitle: 'Your whole family is welcome',
    desc: 'Hearing health matters at every age. From newborn hearing screenings and school-age evaluations to geriatric rehabilitation — Dr. Leila has experience across the full lifespan. Early identification of hearing loss in children is critical for speech and language development. Regular monitoring in seniors helps prevent cognitive decline associated with untreated hearing loss.',
    features: ['Infant &amp; toddler evaluations', 'School-age screenings', 'Adult comprehensive testing', 'Senior hearing rehabilitation', 'Family counseling and education', 'Developmental milestone tracking'],
    cta: '/contact',
    ctaText: 'Schedule for Your Family',
    bg: 'var(--gold-pale)',
  },
  {
    emoji: '🏭',
    title: 'Hearing Conservation Programs',
    subtitle: 'Protecting your workforce',
    desc: 'OSHA requires hearing conservation programs for employees exposed to occupational noise. Dr. Leila is a Certified Professional Supervisor of Audiometric Monitoring Programs — meaning she can help your business establish compliant, effective hearing conservation programs including baseline and annual audiometric testing, noise monitoring, and employee education.',
    features: ['OSHA-compliant programs', 'Baseline & annual audiograms', 'Employee education sessions', 'Noise exposure assessment', 'Certified supervisor (Dr. Leila)', 'For industrial, construction, manufacturing'],
    cta: '/contact',
    ctaText: 'Inquire About Business Programs',
    bg: 'var(--teal-pale)',
  },
]

export default function Services() {
  useEffect(() => { document.title = 'Audiology Services in Beaumont TX | All About Ears, LLC' }, [])
  const [heroRef, heroInView] = useInView()
  const [svcRef, svcInView] = useInView()

  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-content">
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link to="/">Home</Link>
              <span className="breadcrumb-sep">›</span>
              <span aria-current="page">Services</span>
            </nav>
            <span className="eyebrow eyebrow-gold">Complete Hearing Care</span>
            <h1>Comprehensive Audiology Services<br />for All of Southeast Texas</h1>
            <span style={{ display: 'block', width: 48, height: 3, background: 'linear-gradient(90deg, var(--gold), var(--gold-light))', borderRadius: 2, margin: '1.25rem 0' }} />
            <p>
              From your first hearing test to advanced hearing aid fitting, tinnitus relief, and custom protection — everything you need for lifelong hearing health, right here in Beaumont, TX.
            </p>
            <div style={{ display: 'flex', gap: 12, marginTop: 28, flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn btn-gold">Schedule Free Evaluation</Link>
              <a href="tel:+14098667747" className="btn btn-outline-white">📞 (409) 866-7747</a>
            </div>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padded section-white" aria-labelledby="services-list-heading">
        <div className="container">
          <div
            ref={heroRef}
            className={`section-header centered fade-up ${heroInView ? 'in-view' : ''}`}
          >
            <span className="eyebrow">What We Offer</span>
            <h2 id="services-list-heading">Everything Your Hearing Needs</h2>
            <span className="gold-line centered" />
            <p style={{ maxWidth: 560, margin: '0 auto', color: 'var(--text-light)' }}>
              Dr. Leila Grant-Cleveland, Au.D. provides the full spectrum of audiology care — from diagnosis to treatment to lifelong support.
            </p>
          </div>

          <div ref={svcRef} style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            {SERVICES.map((svc, i) => (
              <div
                key={i}
                className={`fade-up ${svcInView ? 'in-view' : ''}`}
                style={{
                  background: svc.bg,
                  border: '1px solid var(--border-light)',
                  borderRadius: 'var(--radius-xl)',
                  padding: '40px 40px',
                  display: 'grid',
                  gridTemplateColumns: '1fr auto',
                  gap: '32px',
                  alignItems: 'start',
                  transitionDelay: `${i * 0.05}s`,
                }}
              >
                <div>
                  <div style={{ fontSize: '2.2rem', marginBottom: 12, lineHeight: 1 }} aria-hidden="true">{svc.emoji}</div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--teal)', marginBottom: 6 }}>{svc.subtitle}</div>
                  <h3 style={{ fontSize: '1.65rem', color: 'var(--navy)', marginBottom: 12 }}>{svc.title}</h3>
                  <p style={{ color: 'var(--text-mid)', lineHeight: 1.8, marginBottom: 20, maxWidth: 620 }}>{svc.desc}</p>
                  <ul style={{ listStyle: 'none', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '8px 24px', marginBottom: 24 }}>
                    {svc.features.map((f, j) => (
                      <li key={j} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '0.87rem', color: 'var(--text-mid)' }}>
                        <span style={{ color: 'var(--teal)', fontWeight: 700, flexShrink: 0 }}>✓</span>
                        <span dangerouslySetInnerHTML={{ __html: f }} />
                      </li>
                    ))}
                  </ul>
                  <Link to={svc.cta} className="btn btn-navy btn-sm">{svc.ctaText} →</Link>
                </div>
                <div style={{ fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase', color: 'var(--text-lighter)', whiteSpace: 'nowrap', paddingTop: 4 }}>
                  0{i + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance/Financing note */}
      <section className="section-padded" style={{ background: 'var(--navy)', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: 720 }}>
          <span className="eyebrow" style={{ color: 'var(--gold-light)' }}>Insurance &amp; Financing</span>
          <h2 style={{ color: 'var(--white)', marginBottom: '1rem' }}>We Work With Your Budget</h2>
          <span style={{ display: 'block', width: 48, height: 3, background: 'linear-gradient(90deg, var(--gold), var(--gold-light))', borderRadius: 2, margin: '0 auto 1.5rem' }} />
          <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '0.75rem', maxWidth: 560, margin: '0 auto 1rem' }}>
            We accept most major insurance plans and work hard to maximize your hearing benefits. We also offer CareCredit and flexible payment plans to ensure cost is never a barrier to better hearing.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.9rem', marginBottom: '2rem' }}>
            Not sure about your coverage? Call us and we'll verify your benefits — at no charge.
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-gold btn-lg">Book Free Evaluation</Link>
            <a href="tel:+14098667747" className="btn btn-outline-white">📞 Call to Check Benefits</a>
          </div>
        </div>
      </section>
    </>
  )
}
