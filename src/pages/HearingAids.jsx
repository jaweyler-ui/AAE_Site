import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useInView } from '../hooks/useInView'

const BRANDS = [
  {
    name: 'Starkey',
    tag: 'Made in the USA',
    color: '#1B3A5C',
    features: ['Healthable technology', 'Fall detection built-in', 'Direct iPhone &amp; Android streaming', 'Edge Mode+ AI noise control', 'Thrive app for remote care', 'Industry-leading warranty'],
  },
  {
    name: 'Phonak',
    tag: 'Swiss precision',
    color: '#1A4A6B',
    features: ['AutoSense OS 5.0 AI', 'Roger technology for noisy environments', 'Universal Bluetooth (any device)', 'RogerDirect &amp; TV Connector', 'Rechargeable &amp; battery models', 'Paradise &amp; Lumity platforms'],
  },
  {
    name: 'Oticon',
    tag: 'Brain hearing',
    color: '#0E3D5A',
    features: ['BrainHearing™ technology', 'MoreSound Intelligence 3.0', '360° soundscape awareness', 'Deep Neural Network processing', 'Rechargeable discrete styles', 'Remote fine-tuning available'],
  },
  {
    name: 'Signia',
    tag: 'German engineering',
    color: '#1A2E5C',
    features: ['Own Voice Processing (OVP)', 'Augmented Focus™ technology', 'Integrated Bluetooth streaming', 'Styletto slim-design models', 'TeleCare 4.0 remote care', 'Signia app control'],
  },
  {
    name: 'ReSound',
    tag: 'Danish innovation',
    color: '#0A3A4A',
    features: ['Organic Hearing™ design', 'M&RIE receiver-in-ear option', 'Direct streaming from Apple/Android', 'Smart 3D app', 'Relief app for tinnitus', 'Rechargeable mini RIC'],
  },
  {
    name: 'Widex',
    tag: 'Natural sound leader',
    color: '#1E3A4A',
    features: ['WIDEX MOMENT™ ZeroDelay', 'PureSound™ processing', '0.5ms processing speed', 'SoundSense Learn AI', 'EVOKE learning system', 'MOMENT Sheer slim design'],
  },
]

const TYPES = [
  { name: 'Invisible-in-Canal (IIC)', icon: '●', desc: 'The tiniest hearing aid — sits completely inside the ear canal. Virtually invisible. Best for mild to moderate hearing loss.', ideal: 'Mild–Moderate loss, cosmetic priority' },
  { name: 'Completely-in-Canal (CIC)', icon: '◉', desc: 'Nearly invisible, fits almost entirely in the canal. Minimal visibility. Natural sound due to outer ear\'s shape.', ideal: 'Mild–Moderate loss' },
  { name: 'In-the-Canal (ITC)', icon: '◎', desc: 'Sits in the lower portion of the outer ear. Slightly larger than CIC with more features available.', ideal: 'Mild–Moderately Severe loss' },
  { name: 'In-the-Ear (ITE)', icon: '○', desc: 'Fills the outer ear bowl. Easier to handle, longer battery life. Best for dexterity concerns.', ideal: 'Mild–Severe loss' },
  { name: 'Receiver-in-Canal (RIC)', icon: '◐', desc: 'Most popular style worldwide. Thin wire connects behind-ear unit to canal. Discreet, feature-rich, usually rechargeable.', ideal: 'Mild–Severe loss (most popular)' },
  { name: 'Behind-the-Ear (BTE)', icon: '◑', desc: 'The classic and most powerful style. Sits behind the ear with a tube leading to the canal. Maximum amplification.', ideal: 'All degrees of hearing loss' },
]

export default function HearingAids() {
  useEffect(() => { document.title = 'Hearing Aids in Beaumont TX | All About Ears, LLC | (409) 866-7747' }, [])

  const [introRef, introInView] = useInView()
  const [whyRef, whyInView] = useInView()
  const [brandsRef, brandsInView] = useInView()
  const [typesRef, typesInView] = useInView()
  const [processRef, processInView] = useInView()

  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-content">
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link to="/">Home</Link>
              <span className="breadcrumb-sep">›</span>
              <Link to="/services">Services</Link>
              <span className="breadcrumb-sep">›</span>
              <span aria-current="page">Hearing Aids</span>
            </nav>
            <span className="eyebrow eyebrow-gold">Digital Hearing Aids</span>
            <h1>Premium Hearing Aids<br />in Beaumont, TX</h1>
            <span style={{ display: 'block', width: 48, height: 3, background: 'linear-gradient(90deg, var(--gold), var(--gold-light))', borderRadius: 2, margin: '1.25rem 0' }} />
            <p>
              All major brands. Expert fitting. Ongoing support. Dr. Leila recommends the right device for <em>your</em> hearing loss, lifestyle, and budget — not what pays the highest commission.
            </p>
            <div style={{ display: 'flex', gap: 12, marginTop: 28, flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn btn-gold">Schedule Fitting Consultation</Link>
              <a href="tel:+14098667747" className="btn btn-outline-white">📞 (409) 866-7747</a>
            </div>
          </div>
        </div>
      </section>

      {/* Intro / Objection Handling */}
      <section className="section-padded section-cream" aria-labelledby="aids-intro-heading">
        <div className="container">
          <div ref={introRef} className={`two-col fade-up ${introInView ? 'in-view' : ''}`}>
            <div>
              <span className="eyebrow">Addressing Your Concerns</span>
              <h2 id="aids-intro-heading">Modern Hearing Aids Are Nothing Like You Remember</h2>
              <span className="gold-line" />
              <p style={{ color: 'var(--text-mid)', lineHeight: 1.85, marginBottom: '1rem' }}>
                We hear it often: <em>"I don't want something big and obvious."</em> Or: <em>"My uncle had one and it just made everything loud and squealy."</em> We understand — and we're happy to tell you that hearing technology has changed completely.
              </p>
              <p style={{ color: 'var(--text-mid)', lineHeight: 1.85, marginBottom: '1.5rem' }}>
                Today's hearing aids are powered by artificial intelligence, stream music and calls directly from your phone, recharge overnight like a smartphone, and are so discreet that most people will never know you're wearing one unless you tell them.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {[
                  { fear: '"They\'re too visible"', truth: 'Today\'s smallest devices fit completely inside the ear canal — invisible to most observers.' },
                  { fear: '"They\'re too expensive"', truth: 'We offer all price points, insurance assistance, and CareCredit financing to fit every budget.' },
                  { fear: '"They\'ll sound unnatural"', truth: 'Modern AI processing is so advanced that many wearers say sounds are actually richer than before.' },
                  { fear: '"They\'re too complicated"', truth: 'Most adjust automatically. Many are controlled with your smartphone or just a tap of your ear.' },
                ].map((item, i) => (
                  <div key={i} style={{ padding: '16px 20px', background: 'var(--white)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
                    <div style={{ fontWeight: 700, color: 'var(--text-light)', fontSize: '0.88rem', marginBottom: 4 }}>{item.fear}</div>
                    <div style={{ color: 'var(--text-mid)', fontSize: '0.92rem' }}>
                      <span style={{ color: 'var(--teal)', fontWeight: 700 }}>✓ </span>{item.truth}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ background: 'var(--navy)', borderRadius: 'var(--radius-xl)', padding: '48px 40px', color: 'white' }}>
              <div style={{ fontSize: '3rem', marginBottom: 16 }}>🎧</div>
              <h3 style={{ color: 'white', fontFamily: 'var(--font-display)', marginBottom: '1rem', fontSize: '2rem' }}>
                The Cost of Waiting Is Higher Than You Think
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                The average person waits <strong style={{ color: 'var(--gold-light)' }}>7 years</strong> from first noticing hearing loss to seeking treatment. During that time, the brain's hearing processing pathways weaken — making adjustment to hearing aids harder and the outcomes worse.
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10, marginBottom: '2rem' }}>
                {[
                  'Untreated hearing loss is linked to cognitive decline',
                  'Increases risk of depression and social withdrawal',
                  'Strains relationships with family and friends',
                  'Creates safety risks (traffic, alarms, alerts)',
                  'Makes workplace participation harder',
                ].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: '0.9rem', color: 'rgba(255,255,255,0.75)' }}>
                    <span style={{ color: 'var(--gold-light)', flexShrink: 0 }}>→</span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="btn btn-gold" style={{ display: 'inline-flex' }}>Start Your Journey Today</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why All About Ears for Hearing Aids */}
      <section className="section-padded section-white" aria-labelledby="why-aae-heading">
        <div className="container">
          <div ref={whyRef} className={`section-header centered fade-up ${whyInView ? 'in-view' : ''}`}>
            <span className="eyebrow">Why Choose Us</span>
            <h2 id="why-aae-heading">The All About Ears Hearing Aid Promise</h2>
            <span className="gold-line centered" />
          </div>
          <div className={`aids-why-grid fade-up ${whyInView ? 'in-view' : ''}`}>
            {[
              { num: '01', title: 'Brand-Neutral Recommendations', desc: 'We\'re not locked into any brand. Dr. Leila recommends the best device for YOUR hearing profile and lifestyle.' },
              { num: '02', title: 'Precise Digital Programming', desc: 'Your aids are programmed to a Real Ear Measurement (REM) standard — the gold standard of verification.' },
              { num: '03', title: 'Unlimited Follow-Up Care', desc: 'Adjustments, cleanings, reprogramming — we\'re here as long as you need us. No surprise service fees.' },
              { num: '04', title: 'Trial Period Available', desc: 'Try your hearing aids in the real world. We offer trial periods so you can be sure before you commit.' },
              { num: '05', title: 'Loss & Damage Warranty', desc: 'All devices come with manufacturer warranties, and we help you navigate any claims or replacements.' },
              { num: '06', title: 'CareCredit Financing', desc: '0% financing options available. Better hearing shouldn\'t wait for a big birthday or tax refund.' },
            ].map((item, i) => (
              <div key={i} className={`aid-why-card delay-${(i % 3) + 1}`}>
                <div className="aid-why-num">{item.num}</div>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands */}
      <section className="section-padded section-cream" aria-labelledby="brands-heading">
        <div className="container">
          <div ref={brandsRef} className={`section-header centered fade-up ${brandsInView ? 'in-view' : ''}`}>
            <span className="eyebrow">Brands We Carry</span>
            <h2 id="brands-heading">The World's Best Hearing Aid Brands,<br />All Available in Beaumont</h2>
            <span className="gold-line centered" />
            <p style={{ maxWidth: 540, margin: '0 auto', color: 'var(--text-light)' }}>
              We stock and fit all major hearing aid brands, so you're never limited by what one manufacturer makes.
            </p>
          </div>
          <div className={`brands-compare-grid fade-up ${brandsInView ? 'in-view' : ''}`}>
            {BRANDS.map((brand, i) => (
              <div key={i} className={`brand-card delay-${(i % 3) + 1}`}>
                <div className="brand-card-name" style={{ color: brand.color }}>{brand.name}</div>
                <div className="brand-card-tag">{brand.tag}</div>
                <ul>
                  {brand.features.map((f, j) => (
                    <li key={j}><span dangerouslySetInnerHTML={{ __html: f }} /></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p style={{ textAlign: 'center', color: 'var(--text-light)', fontSize: '0.88rem', marginTop: 24 }}>
            Additional brands available upon request. Ask Dr. Leila about Bernafon, Unitron, and others.
          </p>
        </div>
      </section>

      {/* Hearing Aid Styles */}
      <section className="section-padded section-white" aria-labelledby="styles-heading">
        <div className="container">
          <div ref={typesRef} className={`section-header centered fade-up ${typesInView ? 'in-view' : ''}`}>
            <span className="eyebrow">Device Styles</span>
            <h2 id="styles-heading">Which Hearing Aid Style Is Right for You?</h2>
            <span className="gold-line centered" />
            <p style={{ maxWidth: 540, margin: '0 auto', color: 'var(--text-light)' }}>
              Dr. Leila will guide you through the options based on your degree of hearing loss, ear anatomy, lifestyle, and preferences.
            </p>
          </div>
          <div className={`services-grid fade-up ${typesInView ? 'in-view' : ''}`} style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
            {TYPES.map((t, i) => (
              <div key={i} className="service-card">
                <div style={{ fontSize: '2rem', marginBottom: 12, color: 'var(--teal)' }} aria-hidden="true">{t.icon}</div>
                <h4>{t.name}</h4>
                <p style={{ marginBottom: 12 }}>{t.desc}</p>
                <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--teal)', textTransform: 'uppercase', letterSpacing: '0.06em', padding: '4px 10px', background: 'var(--teal-pale)', borderRadius: 'var(--radius-full)', display: 'inline-block' }}>
                  Best for: {t.ideal}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Process */}
      <section className="section-padded" style={{ background: 'var(--navy)' }} aria-labelledby="process-heading">
        <div className="container">
          <div ref={processRef} className={`section-header centered fade-up ${processInView ? 'in-view' : ''}`}>
            <span className="eyebrow" style={{ color: 'var(--gold-light)' }}>How It Works</span>
            <h2 id="process-heading" style={{ color: 'var(--white)' }}>Your Path to Better Hearing</h2>
            <span style={{ display: 'block', width: 48, height: 3, background: 'linear-gradient(90deg, var(--gold), var(--gold-light))', borderRadius: 2, margin: '1rem auto 2.5rem' }} />
          </div>
          <div className={`fade-up ${processInView ? 'in-view' : ''}`} style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
            {[
              { num: '1', icon: '🗓️', title: 'Book Your Visit', desc: 'Call or book online. Same-week appointments usually available.' },
              { num: '2', icon: '🔬', title: 'Comprehensive Evaluation', desc: 'Dr. Leila conducts a full audiological assessment. No pressure, no rush.' },
              { num: '3', icon: '🎧', title: 'Try Hearing Aids', desc: 'Demo top devices in our office. See what the technology can do for you.' },
              { num: '4', icon: '✅', title: 'Perfect Fitting', desc: 'Professional fitting, digital programming, and unlimited follow-up care.' },
            ].map((step, i) => (
              <div key={i} style={{ textAlign: 'center', padding: '32px 20px', background: 'rgba(255,255,255,0.05)', borderRadius: 'var(--radius-lg)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'var(--gold)', color: 'var(--white)', fontWeight: 800, fontSize: '1.1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>{step.num}</div>
                <div style={{ fontSize: '2rem', marginBottom: 12 }} aria-hidden="true">{step.icon}</div>
                <h4 style={{ color: 'var(--white)', marginBottom: 8 }}>{step.title}</h4>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.88rem', lineHeight: 1.7 }}>{step.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 48 }}>
            <Link to="/contact" className="btn btn-gold btn-lg">Start Step 1 — Book Today</Link>
          </div>
        </div>
      </section>

      {/* Financing */}
      <section className="section-padded section-white">
        <div className="container" style={{ maxWidth: 800 }}>
          <div className="financing-card">
            <div style={{ fontSize: '2.5rem', marginBottom: 16 }} aria-hidden="true">💳</div>
            <h3>Financing Available — Don't Let Cost Stop You</h3>
            <p>
              We offer CareCredit financing with 0% interest promotional periods, plus assistance with insurance benefits verification. Better hearing is an investment in your quality of life, your relationships, and your cognitive health — and we'll help you find a way to make it work.
            </p>
            <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/insurance-financing" className="btn btn-gold">View Financing Options</Link>
              <a href="tel:+14098667747" className="btn btn-outline-navy">📞 (409) 866-7747</a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
