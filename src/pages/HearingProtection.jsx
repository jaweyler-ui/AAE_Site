import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useInView } from '../hooks/useInView'

const AUDIENCES = [
  {
    emoji: '🦌',
    cardClass: 'audience-card-hunters',
    tag: 'Hunters & Shooters',
    title: 'Protect Your Hearing While You Hunt',
    desc: 'A single muzzle blast can exceed 165 decibels — well above the 140dB threshold for immediate permanent damage. Generic foam plugs muffle conversation and game sounds. Our custom Hunter\'s Plugs use filtered technology that suppresses dangerous impulse noise while letting you hear conversation, twigs snapping, and distant calls clearly.',
    features: ['Impulse noise suppression', 'Ambient sound enhancement', 'Waterproof & durable materials', 'Custom fit for all-day comfort', 'Available with or without filters', 'Trusted by Texas hunters'],
  },
  {
    emoji: '🎸',
    cardClass: 'audience-card-musicians',
    tag: 'Musicians & Live Performers',
    title: 'Hear the Music. Protect the Musician.',
    desc: 'Stage volumes routinely exceed 110dB. Years of exposure cause the kind of permanent hearing damage that ends careers and destroys quality of life. Custom musician\'s earplugs and in-ear monitors preserve the full frequency spectrum of music while reducing volume to safe levels — letting you hear the mix as it was intended, just safer.',
    features: ['Flat frequency response', 'Multiple filter options (9, 15, 25dB)', 'Custom in-ear monitor shells', 'Perfect fit for long performances', 'Preserve musical clarity and detail', 'Used by professional musicians'],
  },
  {
    emoji: '🏍️',
    cardClass: 'audience-card-riders',
    tag: 'Motorcyclists & Riders',
    title: 'Wind Noise Kills Hearing on the Road',
    desc: 'Sustained highway wind noise inside a helmet can reach 90–100dB — enough to cause hearing damage on longer rides. Custom motorcycle ear plugs are designed to fit under a helmet\'s padding without discomfort, reducing wind noise without eliminating road sounds, horns, or traffic awareness you need to ride safely.',
    features: ['Helmet-compatible design', 'Reduces wind noise fatigue', 'Maintains traffic awareness', 'Long-ride comfort tested', 'Durable silicone construction', 'Multiple protection levels'],
  },
  {
    emoji: '🔧',
    cardClass: 'audience-card-workers',
    tag: 'Industrial Workers & Construction',
    title: 'Workplace Hearing Conservation',
    desc: 'OSHA requires hearing protection for workers exposed to 85dB+ over an 8-hour shift. Standard disposable plugs don\'t always seal properly or stay in place. Custom-molded industrial ear plugs provide consistent, reliable protection, are more comfortable for all-day wear, and cost less in the long run than constantly replacing disposables.',
    features: ['Consistent, reliable NRR rating', 'OSHA program compatible', 'Comfortable for 8+ hour shifts', 'Easy to clean and maintain', 'Various NRR levels available', 'Perfect for oil & gas, manufacturing, construction'],
  },
]

export default function HearingProtection() {
  useEffect(() => { document.title = 'Custom Hearing Protection Beaumont TX | Hunters, Musicians, Industrial | All About Ears' }, [])

  const [introRef, introInView] = useInView()
  const [audRef, audInView] = useInView()
  const [processRef, processInView] = useInView()

  return (
    <>
      {/* Page Hero */}
      <section className="page-hero" style={{ background: 'linear-gradient(135deg, #0A1A0F 0%, #0B2240 50%, #1A0A2A 100%)' }}>
        <div className="container">
          <div className="page-hero-content">
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link to="/">Home</Link>
              <span className="breadcrumb-sep">›</span>
              <Link to="/services">Services</Link>
              <span className="breadcrumb-sep">›</span>
              <span aria-current="page">Hearing Protection</span>
            </nav>
            <span className="eyebrow eyebrow-gold">Custom Ear Protection</span>
            <h1>Protect What You<br />Can't Get Back</h1>
            <span style={{ display: 'block', width: 48, height: 3, background: 'linear-gradient(90deg, var(--gold), var(--gold-light))', borderRadius: 2, margin: '1.25rem 0' }} />
            <p>
              Noise-induced hearing loss is permanent — and it's 100% preventable. Custom-molded ear protection from All About Ears gives Southeast Texas hunters, musicians, motorcyclists, and industrial workers the best protection available.
            </p>
            <div style={{ display: 'flex', gap: 12, marginTop: 28, flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn btn-gold">Order Custom Ear Protection</Link>
              <a href="tel:+14098667747" className="btn btn-outline-white">📞 (409) 866-7747</a>
            </div>
          </div>
        </div>
      </section>

      {/* The Custom Difference */}
      <section className="section-padded section-cream">
        <div className="container">
          <div ref={introRef} className={`two-col fade-up ${introInView ? 'in-view' : ''}`}>
            <div>
              <span className="eyebrow">Why Custom Matters</span>
              <h2>Generic Plugs vs. Custom Protection: No Contest</h2>
              <span className="gold-line" />
              <p style={{ color: 'var(--text-mid)', marginBottom: '1rem', lineHeight: 1.85 }}>
                A $3 foam earplug inserted incorrectly provides almost no protection. Even inserted correctly, it muffles all sound indiscriminately — making it hard to hear conversation, situational sounds, or the music you're trying to enjoy.
              </p>
              <p style={{ color: 'var(--text-mid)', marginBottom: '1.5rem', lineHeight: 1.85 }}>
                Custom ear protection is precision-molded to the exact shape of your ear canal. The result? A perfect seal every time — no guessing, no readjusting. And with filtered options, you get the protection you need while preserving the sounds that matter.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                <div style={{ padding: '20px', background: '#fff3f3', border: '1px solid #ffcccc', borderRadius: 'var(--radius-md)' }}>
                  <div style={{ fontWeight: 800, color: '#CC0000', marginBottom: 10, fontSize: '0.88rem' }}>❌ Generic Foam Plugs</div>
                  {['Inconsistent seal', 'Muffles all sound', 'Uncomfortable for long wear', 'Falls out constantly', 'Cheap materials degrade fast'].map((item, i) => (
                    <div key={i} style={{ fontSize: '0.85rem', color: '#666', marginBottom: 4 }}>· {item}</div>
                  ))}
                </div>
                <div style={{ padding: '20px', background: 'var(--teal-pale)', border: '1px solid rgba(14,139,124,0.3)', borderRadius: 'var(--radius-md)' }}>
                  <div style={{ fontWeight: 800, color: 'var(--teal)', marginBottom: 10, fontSize: '0.88rem' }}>✓ Custom All About Ears</div>
                  {['Perfect seal every time', 'Filtered to preserve sound', 'Comfortable all day long', 'Stays put — guaranteed', 'Durable silicone, years of use'].map((item, i) => (
                    <div key={i} style={{ fontSize: '0.85rem', color: 'var(--text-mid)', marginBottom: 4 }}>· {item}</div>
                  ))}
                </div>
              </div>
            </div>

            <div style={{ background: 'var(--navy)', borderRadius: 'var(--radius-xl)', padding: '40px 36px', color: 'white' }}>
              <h3 style={{ color: 'var(--white)', fontFamily: 'var(--font-display)', fontSize: '1.75rem', marginBottom: '1.25rem' }}>
                The Noise-Induced Hearing Loss Facts
              </h3>
              {[
                { stat: '26M', label: 'Americans have noise-induced hearing loss' },
                { stat: '165dB', label: 'Peak level of common rifle shot' },
                { stat: '100%', label: 'Preventable if protection is worn' },
                { stat: '0', label: 'Chance of recovery once permanent damage occurs' },
              ].map((item, i) => (
                <div key={i} style={{ padding: '16px 0', borderBottom: i < 3 ? '1px solid rgba(255,255,255,0.1)' : 'none' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.8rem', fontWeight: 700, color: 'var(--gold-light)', lineHeight: 1, marginBottom: 4 }}>{item.stat}</div>
                  <div style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.9rem' }}>{item.label}</div>
                </div>
              ))}
              <Link to="/contact" className="btn btn-gold" style={{ marginTop: 24, display: 'inline-flex' }}>
                Get Custom Protection Today
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Audience Cards */}
      <section className="section-padded section-white" aria-labelledby="audiences-heading">
        <div className="container">
          <div ref={audRef} className={`section-header centered fade-up ${audInView ? 'in-view' : ''}`}>
            <span className="eyebrow">Who We Serve</span>
            <h2 id="audiences-heading">Custom Protection for<br />Every Southeast Texas Lifestyle</h2>
            <span className="gold-line centered" />
          </div>
          <div className={`protection-audiences fade-up ${audInView ? 'in-view' : ''}`}>
            {AUDIENCES.map((aud, i) => (
              <div key={i} className={`audience-card ${aud.cardClass}`}>
                <span className="audience-emoji" aria-hidden="true">{aud.emoji}</span>
                <span className="audience-card-tag">{aud.tag}</span>
                <h3>{aud.title}</h3>
                <p>{aud.desc}</p>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 6, marginBottom: 24 }}>
                  {aud.features.map((f, j) => (
                    <li key={j} style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)', display: 'flex', alignItems: 'center', gap: 8 }}>
                      <span style={{ color: 'var(--gold-light)', flexShrink: 0 }}>✓</span>{f}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="btn btn-outline-white btn-sm">
                  Order {aud.tag} Protection →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ordering Process */}
      <section className="section-padded section-cream" aria-labelledby="process-heading">
        <div className="container">
          <div ref={processRef} className={`section-header centered fade-up ${processInView ? 'in-view' : ''}`}>
            <span className="eyebrow">Simple Process</span>
            <h2 id="process-heading">From Impressions to Delivery<br />in About 2 Weeks</h2>
            <span className="gold-line centered" />
          </div>
          <div className={`services-grid fade-up ${processInView ? 'in-view' : ''}`} style={{ gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>
            {[
              { step: '1', icon: '📞', title: 'Book Your Appointment', desc: 'Call or book online. Impressions take just 15–20 minutes.' },
              { step: '2', icon: '👂', title: 'Ear Impressions Taken', desc: 'Dr. Leila takes precise impressions of your ear canals in-office.' },
              { step: '3', icon: '🏭', title: 'Lab Fabrication', desc: 'Sent to our professional lab for precision manufacturing (approx. 10–14 days).' },
              { step: '4', icon: '✅', title: 'Pick Up & Fit Check', desc: 'Collect your custom devices, verify the fit, and get care instructions.' },
            ].map((s, i) => (
              <div key={i} style={{ padding: '32px 24px', background: 'var(--white)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-light)', textAlign: 'center' }}>
                <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--teal)', color: 'white', fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 12px', fontSize: '0.95rem' }}>{s.step}</div>
                <div style={{ fontSize: '1.8rem', marginBottom: 12 }} aria-hidden="true">{s.icon}</div>
                <h4 style={{ color: 'var(--navy)', marginBottom: 8, fontSize: '1rem' }}>{s.title}</h4>
                <p style={{ fontSize: '0.87rem', color: 'var(--text-light)', lineHeight: 1.65 }}>{s.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 48 }}>
            <Link to="/contact" className="btn btn-gold btn-lg">Book Impressions Appointment</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="final-cta">
        <div className="container">
          <div className="final-cta-content">
            <span className="eyebrow eyebrow-white">Your Hearing Is Irreplaceable</span>
            <h2>One Visit. A Lifetime of Protection.</h2>
            <p>Don't wait until the ringing starts. Custom hearing protection is an investment in decades of healthy hearing — for hunting seasons, concert seasons, and every season of your life.</p>
            <div className="final-cta-actions">
              <Link to="/contact" className="btn btn-white btn-lg">Order Custom Ear Protection</Link>
              <a href="tel:+14098667747" className="btn btn-outline-white btn-lg">📞 (409) 866-7747</a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
