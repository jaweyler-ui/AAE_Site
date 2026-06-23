import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useInView } from '../hooks/useInView'

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  )
}

const INSURANCE_PLANS = [
  'Blue Cross Blue Shield (BCBS)',
  'Aetna',
  'UnitedHealthcare',
  'Cigna',
  'Humana',
  'Medicare (Part B)',
  'Medicare Advantage Plans',
  'Texas Medicaid (select plans)',
  'TRICARE (Military)',
  'Federal Employee Plans (FEHB)',
  'Workers\' Compensation',
  'TRS-ActiveCare (Teacher Retirement)',
]

const FAQ_ITEMS = [
  {
    q: 'Does insurance cover hearing aids in Texas?',
    a: 'Many Texas insurance plans cover part or all of a hearing evaluation, and some offer partial coverage for hearing aids. Coverage varies widely by plan. We verify your specific benefits at no charge before your appointment so you know exactly what to expect.',
  },
  {
    q: 'Does Medicare cover hearing aids in Beaumont, TX?',
    a: 'Medicare Part B covers diagnostic hearing evaluations when ordered by a physician, but does not currently cover hearing aids. However, many Medicare Advantage plans (Part C) include a hearing aid benefit. We help you understand and maximize whatever coverage your specific plan offers.',
  },
  {
    q: 'Does Texas Medicaid pay for hearing aids?',
    a: 'Texas Medicaid covers hearing aids for children under 21 through the THSteps/EPSDT program. Adult Medicaid hearing aid coverage is limited but available through select managed care plans. Call us at (409) 866-7747 and we\'ll check your eligibility.',
  },
  {
    q: 'What is CareCredit and how does it work for hearing aids?',
    a: 'CareCredit is a healthcare credit card that offers promotional financing — including 0% interest periods of 6, 12, 18, or 24 months — specifically for medical expenses like hearing aids. You apply in our office or online, get an instant decision, and can begin treatment the same day.',
  },
  {
    q: 'How much do hearing aids cost without insurance?',
    a: 'Hearing aid prices range from roughly $1,000 to $6,000 per device depending on technology level. We carry options at every price point — from reliable budget-friendly devices to premium AI-powered hearing aids. Every purchase includes fitting, programming, follow-up adjustments, and a manufacturer warranty.',
  },
  {
    q: 'Can I make monthly payments on hearing aids?',
    a: 'Yes. Through CareCredit financing, you can spread the cost into affordable monthly payments — many with 0% interest during the promotional period. We also offer in-house payment arrangements for qualifying patients. Better hearing shouldn\'t wait because of cost.',
  },
  {
    q: 'How do I find out if my insurance covers a hearing test?',
    a: 'Call us at (409) 866-7747 or fill out our online contact form. Our team will verify your insurance benefits before your appointment at no charge — so you walk in knowing exactly what\'s covered and what your out-of-pocket cost will be.',
  },
]

export default function InsuranceFinancing() {
  useEffect(() => {
    document.title = 'Insurance & Financing for Hearing Aids | Beaumont TX | CareCredit | Medicare | All About Ears'
  }, [])

  const [overviewRef, overviewInView] = useInView()
  const [plansRef, plansInView] = useInView()
  const [medicareRef, medicareInView] = useInView()
  const [financingRef, financingInView] = useInView()
  const [processRef, processInView] = useInView()
  const [faqRef, faqInView] = useInView()

  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-content">
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link to="/">Home</Link>
              <span className="breadcrumb-sep">&rsaquo;</span>
              <span aria-current="page">Insurance &amp; Financing</span>
            </nav>
            <span className="eyebrow eyebrow-gold">Affordable Hearing Care</span>
            <h1>Hearing Aid Insurance &amp; Financing<br />in Beaumont, TX</h1>
            <span style={{ display: 'block', width: 48, height: 3, background: 'linear-gradient(90deg, var(--gold), var(--gold-light))', borderRadius: 2, margin: '1.25rem 0' }} />
            <p>
              Don't let cost keep you from better hearing. All About Ears accepts most major insurance plans, offers CareCredit financing with 0% interest options, and provides free benefits verification — so you know exactly what you'll pay before your appointment.
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="section-padded section-white">
        <div className="container">
          <div
            ref={overviewRef}
            className={`ins-overview fade-up ${overviewInView ? 'in-view' : ''}`}
          >
            <div className="ins-overview-text">
              <span className="eyebrow">Why Patients Choose Us</span>
              <h2>We Handle the Paperwork —<br />You Focus on Hearing Better</h2>
              <span className="gold-line" />
              <p>
                Navigating hearing aid insurance coverage in Texas can feel overwhelming. Every plan is different, and the fine print rarely makes sense. That's why our team at All About Ears handles benefits verification, pre-authorization, and claims filing on your behalf — at no extra charge.
              </p>
              <p>
                Whether you're covered by employer insurance, Medicare, Medicaid, TRICARE, or have no insurance at all — we'll find a path to affordable hearing care that fits your budget.
              </p>
              <ul className="benefits-list">
                {[
                  'Free insurance benefits verification before your visit',
                  'We file claims directly with your insurance provider',
                  'CareCredit financing with 0% interest options available',
                  'Hearing aids at every price point — budget to premium',
                  'No-surprise pricing — you\'ll know your cost upfront',
                ].map((item, i) => (
                  <li key={i}>
                    <span className="benefit-check" aria-hidden="true"><CheckIcon /></span>
                    {item}
                  </li>
                ))}
              </ul>
              <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginTop: 24 }}>
                <a href="tel:+14098667747" className="btn btn-gold">
                  📞 Call to Verify Benefits
                </a>
                <Link to="/contact" className="btn btn-outline-navy">
                  Request Benefits Check Online
                </Link>
              </div>
            </div>
            <div className="ins-overview-card">
              <div className="ins-stat-card">
                <div className="ins-stat-icon">💰</div>
                <div className="ins-stat-number">$0</div>
                <div className="ins-stat-label">Cost to Verify Your Benefits</div>
              </div>
              <div className="ins-stat-card">
                <div className="ins-stat-icon">⏱️</div>
                <div className="ins-stat-number">24hr</div>
                <div className="ins-stat-label">Average Verification Turnaround</div>
              </div>
              <div className="ins-stat-card">
                <div className="ins-stat-icon">📋</div>
                <div className="ins-stat-number">100%</div>
                <div className="ins-stat-label">Claims Filed For You</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accepted Insurance Plans */}
      <section className="section-padded section-cream">
        <div className="container">
          <div
            ref={plansRef}
            className={`section-header centered fade-up ${plansInView ? 'in-view' : ''}`}
          >
            <span className="eyebrow">Accepted Insurance</span>
            <h2>Insurance Plans We Accept<br />in Beaumont &amp; Southeast Texas</h2>
            <span className="gold-line centered" />
            <p style={{ maxWidth: 600, margin: '0 auto', color: 'var(--text-light)' }}>
              We work with most major health insurance carriers. If you don't see your plan listed below, call us — we likely accept it or can help you explore out-of-network benefits.
            </p>
          </div>
          <div className="ins-plans-grid">
            {INSURANCE_PLANS.map((plan, i) => (
              <div
                key={i}
                className={`ins-plan-card fade-up delay-${(i % 3) + 1} ${plansInView ? 'in-view' : ''}`}
              >
                <span className="ins-plan-check" aria-hidden="true"><CheckIcon /></span>
                <span>{plan}</span>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 40 }}>
            <p style={{ color: 'var(--text-light)', fontSize: '0.92rem', marginBottom: 16 }}>
              Don't see your insurance listed? We accept many additional plans.
            </p>
            <a href="tel:+14098667747" className="btn btn-navy">
              📞 Call (409) 866-7747 to Check
            </a>
          </div>
        </div>
      </section>

      {/* Medicare & Medicaid */}
      <section className="section-padded section-white">
        <div className="container">
          <div
            ref={medicareRef}
            className={`fade-up ${medicareInView ? 'in-view' : ''}`}
          >
            <div className="section-header centered" style={{ marginBottom: 48 }}>
              <span className="eyebrow">Government Programs</span>
              <h2>Medicare &amp; Medicaid Hearing Aid<br />Coverage in Texas</h2>
              <span className="gold-line centered" />
            </div>
            <div className="ins-gov-grid">
              <div className="ins-gov-card ins-gov-medicare">
                <div className="ins-gov-badge">Medicare</div>
                <h3>Medicare Coverage for Hearing Services</h3>
                <p>
                  <strong>Medicare Part B</strong> covers diagnostic hearing and balance exams when ordered by a physician to diagnose or monitor a medical condition. This includes the comprehensive hearing evaluations we perform at All About Ears.
                </p>
                <p>
                  <strong>Medicare Part B does not cover hearing aids.</strong> However, many <strong>Medicare Advantage plans (Part C)</strong> include hearing aid benefits ranging from $500 to $3,000+ per ear. We'll help you determine exactly what your specific Medicare plan covers.
                </p>
                <ul className="ins-gov-list">
                  <li>Diagnostic hearing evaluations — typically covered under Part B</li>
                  <li>Medicare Advantage hearing aid benefits vary by plan</li>
                  <li>We verify your specific Medicare benefits at no charge</li>
                  <li>CareCredit available for any remaining out-of-pocket balance</li>
                </ul>
              </div>
              <div className="ins-gov-card ins-gov-medicaid">
                <div className="ins-gov-badge ins-gov-badge-teal">Medicaid</div>
                <h3>Texas Medicaid Hearing Aid Coverage</h3>
                <p>
                  <strong>Children under 21:</strong> Texas Medicaid covers hearing aids and audiological services for children through the <strong>THSteps (Texas Health Steps) / EPSDT</strong> program. This includes evaluation, fitting, hearing aids, and follow-up care.
                </p>
                <p>
                  <strong>Adults:</strong> Texas Medicaid hearing aid coverage for adults is limited but may be available through certain managed care plans such as <strong>Superior HealthPlan, Molina Healthcare,</strong> and <strong>Amerigroup</strong>. Coverage and copay amounts vary.
                </p>
                <ul className="ins-gov-list">
                  <li>Children's hearing aids covered through THSteps/EPSDT</li>
                  <li>Select adult Medicaid managed care plans offer benefits</li>
                  <li>We verify Medicaid eligibility and covered services</li>
                  <li>Financing available for any non-covered amounts</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CareCredit & Financing */}
      <section className="section-padded" style={{ background: 'var(--gold-ultra-pale)' }}>
        <div className="container">
          <div
            ref={financingRef}
            className={`fade-up ${financingInView ? 'in-view' : ''}`}
          >
            <div className="section-header centered" style={{ marginBottom: 48 }}>
              <span className="eyebrow">Flexible Payment Options</span>
              <h2>CareCredit Financing &amp;<br />Hearing Aid Payment Plans</h2>
              <span className="gold-line centered" />
              <p style={{ maxWidth: 600, margin: '0 auto', color: 'var(--text-light)' }}>
                Better hearing is an investment in your quality of life, your relationships, and your cognitive health. We offer multiple ways to make it affordable.
              </p>
            </div>
            <div className="ins-financing-grid">
              <div className="ins-finance-card ins-finance-featured">
                <div style={{ fontSize: '2.5rem', marginBottom: 12 }}>💳</div>
                <h3>CareCredit Healthcare Financing</h3>
                <p>
                  CareCredit is the nation's leading healthcare credit card — accepted by over 250,000 providers. Apply in our office or online, receive an instant decision, and start treatment the same day.
                </p>
                <div className="ins-finance-highlights">
                  <div className="ins-finance-highlight">
                    <strong>0%</strong>
                    <span>Interest for 6–24 months*</span>
                  </div>
                  <div className="ins-finance-highlight">
                    <strong>60 sec</strong>
                    <span>Instant approval decision</span>
                  </div>
                  <div className="ins-finance-highlight">
                    <strong>$0</strong>
                    <span>Down payment required</span>
                  </div>
                </div>
                <p style={{ fontSize: '0.78rem', color: 'var(--text-lighter)', marginTop: 16 }}>
                  *Subject to credit approval. Minimum monthly payments required during promotional period. See CareCredit for full terms.
                </p>
              </div>
              <div className="ins-finance-options">
                <div className="ins-finance-card">
                  <div style={{ fontSize: '1.5rem', marginBottom: 8 }}>🏥</div>
                  <h4>Insurance + Financing Combo</h4>
                  <p>Use your insurance benefit for part of the cost, then finance the remaining balance through CareCredit at 0% interest. Many of our Beaumont patients use this approach.</p>
                </div>
                <div className="ins-finance-card">
                  <div style={{ fontSize: '1.5rem', marginBottom: 8 }}>💵</div>
                  <h4>Cash, Check &amp; Credit Card</h4>
                  <p>We accept all major credit cards, personal checks, and cash. Full payment at time of service is always an option for patients who prefer simplicity.</p>
                </div>
                <div className="ins-finance-card">
                  <div style={{ fontSize: '1.5rem', marginBottom: 8 }}>📞</div>
                  <h4>Custom Payment Arrangements</h4>
                  <p>Need something more flexible? Talk to our team. We believe cost should never prevent someone in Southeast Texas from getting the hearing care they need.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works — Process */}
      <section className="section-padded section-white">
        <div className="container">
          <div
            ref={processRef}
            className={`fade-up ${processInView ? 'in-view' : ''}`}
          >
            <div className="section-header centered" style={{ marginBottom: 48 }}>
              <span className="eyebrow">Simple Process</span>
              <h2>How Insurance Verification Works<br />at All About Ears</h2>
              <span className="gold-line centered" />
            </div>
            <div className="ins-process-grid">
              {[
                { step: '01', title: 'Call or Submit Online', desc: 'Contact us with your insurance information. You can call (409) 866-7747 or use our online contact form — whichever is easiest.' },
                { step: '02', title: 'We Verify Your Benefits', desc: 'Our team contacts your insurance provider directly to determine exactly what audiological services and hearing aids are covered under your specific plan.' },
                { step: '03', title: 'Know Your Cost Upfront', desc: 'Before your appointment, we\'ll tell you precisely what your insurance covers, what your copay or out-of-pocket cost will be, and what financing options are available.' },
                { step: '04', title: 'We File Your Claim', desc: 'After your appointment, we handle all the insurance paperwork and claims filing. You focus on your new hearing — we handle the rest.' },
              ].map((item, i) => (
                <div key={i} className={`ins-process-step fade-up delay-${i + 1} ${processInView ? 'in-view' : ''}`}>
                  <div className="ins-process-num">{item.step}</div>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padded section-cream">
        <div className="container" style={{ maxWidth: 800 }}>
          <div
            ref={faqRef}
            className={`fade-up ${faqInView ? 'in-view' : ''}`}
          >
            <div className="section-header centered" style={{ marginBottom: 48 }}>
              <span className="eyebrow">Common Questions</span>
              <h2>Hearing Aid Insurance &amp; Financing FAQ</h2>
              <span className="gold-line centered" />
            </div>
            <div className="ins-faq-list">
              {FAQ_ITEMS.map((item, i) => (
                <details key={i} className="ins-faq-item">
                  <summary>
                    <span className="ins-faq-q">{item.q}</span>
                    <span className="ins-faq-toggle" aria-hidden="true">+</span>
                  </summary>
                  <p className="ins-faq-a">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="final-cta" aria-labelledby="ins-cta-heading">
        <div className="container">
          <div className="final-cta-content">
            <span className="eyebrow eyebrow-white" style={{ color: 'rgba(255,255,255,0.65)' }}>Ready to Get Started?</span>
            <h2 id="ins-cta-heading">Free Benefits Verification —<br />Know Your Coverage Before You Visit</h2>
            <p>
              Call All About Ears today and our team will verify your insurance benefits at no charge. Serving Beaumont, Port Arthur, Orange, Lumberton, Silsbee, Vidor, Nederland &amp; all of Southeast Texas.
            </p>
            <div className="final-cta-actions">
              <Link to="/contact" className="btn btn-white btn-lg">Schedule Your Hearing Test</Link>
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
