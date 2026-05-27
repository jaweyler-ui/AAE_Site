import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useInView } from '../hooks/useInView'

const POSTS = [
  {
    emoji: '🧠',
    bg: 'linear-gradient(135deg, #0B2240 0%, #153560 100%)',
    tag: 'Brain Health',
    title: '7 Signs You Might Need a Hearing Evaluation — And Why Most Texans Wait Too Long',
    desc: 'The average person waits over 7 years from first noticing hearing difficulty to seeking help. Dr. Leila shares the signs that signal it\'s time to act.',
    date: 'March 2025',
    read: '5 min read',
    author: 'Dr. Leila Grant-Cleveland, Au.D.',
  },
  {
    emoji: '🎧',
    bg: 'linear-gradient(135deg, #0E3D5A 0%, #0E8B7C 100%)',
    tag: 'Hearing Aids',
    title: 'The Truth About Modern Hearing Aids: What\'s Changed in the Last 5 Years',
    desc: 'AI processing. Invisible fit. iPhone streaming. Rechargeable all day. Dr. Leila busts the biggest myths about today\'s hearing technology.',
    date: 'February 2025',
    read: '7 min read',
    author: 'Dr. Leila Grant-Cleveland, Au.D.',
  },
  {
    emoji: '🦌',
    bg: 'linear-gradient(135deg, #1A3020 0%, #2D5040 100%)',
    tag: 'Hearing Protection',
    title: 'Why Every Texas Hunter Should Be Wearing Custom Ear Protection (Not Foam)',
    desc: 'One rifle shot can permanently damage your hearing. Southeast Texas hunters have a hearing loss rate significantly above the national average. Here\'s what to do about it.',
    date: 'January 2025',
    read: '4 min read',
    author: 'Dr. Leila Grant-Cleveland, Au.D.',
  },
  {
    emoji: '👨‍👩‍👧',
    bg: 'linear-gradient(135deg, #2A1A0A 0%, #C8911F 100%)',
    tag: 'Family Health',
    title: 'Is My Child\'s Hearing Normal? A Beaumont Parent\'s Guide to Pediatric Audiology',
    desc: 'Undetected hearing loss is one of the most common developmental issues in children. Early identification changes outcomes dramatically. What to watch for at every age.',
    date: 'December 2024',
    read: '6 min read',
    author: 'Dr. Leila Grant-Cleveland, Au.D.',
  },
  {
    emoji: '🔔',
    bg: 'linear-gradient(135deg, #1A1A3A 0%, #2A2A5A 100%)',
    tag: 'Tinnitus',
    title: 'Tinnitus Treatment in Beaumont: What Actually Works (And What Doesn\'t)',
    desc: 'There\'s a lot of misinformation about tinnitus online. Dr. Leila breaks down the evidence-based options available to Southeast Texas patients right now.',
    date: 'November 2024',
    read: '8 min read',
    author: 'Dr. Leila Grant-Cleveland, Au.D.',
  },
  {
    emoji: '💳',
    bg: 'linear-gradient(135deg, #0B3A2A 0%, #0E8B7C 100%)',
    tag: 'Insurance & Financing',
    title: 'Does Texas Medicaid or Medicare Cover Hearing Aids? A 2025 Guide',
    desc: 'Navigating insurance coverage for hearing aids in Texas can be confusing. Here\'s exactly what\'s covered, what isn\'t, and how to maximize your benefits.',
    date: 'October 2024',
    read: '6 min read',
    author: 'Dr. Leila Grant-Cleveland, Au.D.',
  },
]

const RESOURCES = [
  {
    icon: '📄',
    title: 'Free: 7 Signs You May Need a Hearing Evaluation',
    desc: 'PDF guide by Dr. Leila, written specifically for Southeast Texas residents',
  },
  {
    icon: '🎵',
    title: 'Hearing Loss Sound Simulation',
    desc: 'Experience what mild, moderate, and severe hearing loss actually sounds like',
  },
  {
    icon: '📋',
    title: 'What to Expect at Your First Audiology Appointment',
    desc: 'A step-by-step walkthrough so there are no surprises on your first visit',
  },
  {
    icon: '📊',
    title: 'How to Read Your Audiogram',
    desc: 'Plain-language guide to understanding your hearing test results',
  },
  {
    icon: '🏥',
    title: 'Insurance & Benefits Checklist for Beaumont TX Patients',
    desc: 'Questions to ask your insurer before your first appointment',
  },
]

export default function Blog() {
  useEffect(() => { document.title = 'Hearing Health Blog & Resources | All About Ears Beaumont TX' }, [])

  const [postsRef, postsInView] = useInView()
  const [resRef, resInView] = useInView()

  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-content">
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link to="/">Home</Link>
              <span className="breadcrumb-sep">›</span>
              <span aria-current="page">Blog &amp; Resources</span>
            </nav>
            <span className="eyebrow eyebrow-gold">Education &amp; Insights</span>
            <h1>Hearing Health Resources<br />for Southeast Texas</h1>
            <span style={{ display: 'block', width: 48, height: 3, background: 'linear-gradient(90deg, var(--gold), var(--gold-light))', borderRadius: 2, margin: '1.25rem 0' }} />
            <p>
              Free articles, guides, and tools written by Dr. Leila Grant-Cleveland, Au.D. to help you understand, protect, and improve your hearing health.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="section-padded section-white" aria-labelledby="blog-heading">
        <div className="container">
          <div
            ref={postsRef}
            className={`section-header centered fade-up ${postsInView ? 'in-view' : ''}`}
          >
            <span className="eyebrow">From Dr. Leila's Desk</span>
            <h2 id="blog-heading">Latest Articles</h2>
            <span className="gold-line centered" />
          </div>
          <div className={`blog-grid fade-up ${postsInView ? 'in-view' : ''}`}>
            {POSTS.map((post, i) => (
              <article key={i} className={`blog-card delay-${(i % 3) + 1}`}>
                <div className="blog-card-img" style={{ background: post.bg }} aria-hidden="true">
                  <span style={{ fontSize: '3.5rem' }}>{post.emoji}</span>
                </div>
                <div className="blog-card-body">
                  <span className="blog-tag">{post.tag}</span>
                  <h4>{post.title}</h4>
                  <p>{post.desc}</p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div className="blog-meta">
                      <span>✍️ {post.author.split(',')[0]}</span>
                      <span>·</span>
                      <span>{post.date}</span>
                      <span>·</span>
                      <span>{post.read}</span>
                    </div>
                  </div>
                  <div style={{ marginTop: 14 }}>
                    <a href="#" className="blog-read-more">
                      Read Article →
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 48, padding: '40px', background: 'var(--cream)', borderRadius: 'var(--radius-xl)', border: '1px solid var(--border-light)' }}>
            <div style={{ fontSize: '2rem', marginBottom: 12 }} aria-hidden="true">✉️</div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.75rem', color: 'var(--navy)', marginBottom: 8 }}>
              Get New Articles in Your Inbox
            </h3>
            <p style={{ color: 'var(--text-light)', maxWidth: 440, margin: '0 auto 20px', fontSize: '0.92rem' }}>
              Dr. Leila writes new articles monthly. No spam — just genuinely useful hearing health info for Southeast Texans.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              style={{ display: 'flex', gap: 12, maxWidth: 400, margin: '0 auto', flexWrap: 'wrap', justifyContent: 'center' }}
            >
              <input
                type="email"
                placeholder="Your email address"
                className="form-input"
                style={{ flex: 1, minWidth: 200 }}
                aria-label="Email address for newsletter"
              />
              <button type="submit" className="btn btn-teal">Subscribe</button>
            </form>
          </div>
        </div>
      </section>

      {/* Free Resources */}
      <section className="section-padded section-cream" aria-labelledby="resources-heading">
        <div className="container">
          <div
            ref={resRef}
            className={`section-header centered fade-up ${resInView ? 'in-view' : ''}`}
          >
            <span className="eyebrow">Free Downloads</span>
            <h2 id="resources-heading">Free Resources from All About Ears</h2>
            <span className="gold-line centered" />
            <p style={{ maxWidth: 480, margin: '0 auto', color: 'var(--text-light)' }}>
              All resources are free, no strings attached. Dr. Leila believes informed patients make better decisions about their hearing health.
            </p>
          </div>
          <ul className={`resources-list fade-up ${resInView ? 'in-view' : ''}`}>
            {RESOURCES.map((res, i) => (
              <li key={i}>
                <div className="resource-item" role="button" tabIndex={0} aria-label={`Download: ${res.title}`}>
                  <div className="resource-icon" aria-hidden="true">{res.icon}</div>
                  <div>
                    <div className="resource-title">{res.title}</div>
                    <div className="resource-desc">{res.desc}</div>
                  </div>
                  <div className="resource-arrow" aria-hidden="true">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
                    </svg>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padded" style={{ background: 'linear-gradient(135deg, var(--teal) 0%, var(--teal-light) 100%)', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: 640 }}>
          <h2 style={{ color: 'var(--white)', marginBottom: '1rem' }}>
            Have Questions? Dr. Leila Would Love to Help.
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.85)', marginBottom: '2rem', fontSize: '1.05rem' }}>
            Reading is one thing — but nothing replaces a real conversation with a board-certified Doctor of Audiology who knows Southeast Texas.
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-white btn-lg">Book a Free Consultation</Link>
            <a href="tel:+14098667747" className="btn btn-outline-white btn-lg">📞 (409) 866-7747</a>
          </div>
        </div>
      </section>
    </>
  )
}
