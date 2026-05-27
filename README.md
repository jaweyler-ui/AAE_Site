# All About Ears, LLC — Website

> **Beaumont TX's Premier Audiology Practice Website**  
> Built with Vite + React · Conversion-Optimized · SEO-Ready · Mobile-First

---

## 🚀 Quick Start

### Prerequisites
- [Node.js 18+](https://nodejs.org/) installed

### Run Locally
```bash
npm install
npm run dev
```
Then open [http://localhost:5173](http://localhost:5173)

### Build for Production
```bash
npm run build
npm run preview  # preview the production build
```

---

## 📁 Project Structure

```
AAE_Site/
├── index.html              # Entry point + SEO schema markup
├── vite.config.js          # Vite build configuration
├── package.json
├── public/
│   ├── favicon.svg         # Ear + sound wave icon
│   └── robots.txt
└── src/
    ├── main.jsx            # React root
    ├── App.jsx             # Router + layout
    ├── index.css           # Complete design system (all styles)
    ├── hooks/
    │   └── useInView.js    # Scroll animation hook (IntersectionObserver)
    ├── components/
    │   ├── Header.jsx      # Sticky nav + mobile menu + urgency banner
    │   ├── Footer.jsx      # Full footer with NAP, links, schema
    │   ├── FloatingPhone.jsx  # Pulsing fixed phone button
    │   └── ExitModal.jsx   # Exit-intent lead magnet popup
    └── pages/
        ├── Home.jsx         # Homepage (hero, quiz, testimonials, CTA)
        ├── About.jsx        # Dr. Leila + Dinah bios, values
        ├── Services.jsx     # Complete service catalog
        ├── HearingAids.jsx  # Brand comparisons, styles, process
        ├── HearingProtection.jsx  # Hunters, musicians, industrial
        ├── Blog.jsx         # Articles + free resources
        └── Contact.jsx      # Booking form + map + hours
```

---

## 🎨 Design System

### Color Palette
| Token | Value | Use |
|-------|-------|-----|
| `--navy` | `#0B2240` | Primary dark, headers, text |
| `--teal` | `#0E8B7C` | CTAs, icons, accents |
| `--gold` | `#C8911F` | Warmth, urgency, Texas identity |
| `--cream` | `#F8F4EE` | Background sections |
| `--white` | `#FFFFFF` | Card backgrounds |

### Typography
- **Display** (headers, pull quotes): `Cormorant Garamond` — elegant, authoritative, warm
- **Body** (paragraphs, UI): `Nunito Sans` — friendly, readable, modern

---

## 🔄 Before Going Live — TODO List

### Required
- [ ] Replace `document.title` calls with [`react-helmet-async`](https://github.com/staylor/react-helmet-async) for proper meta per page
- [ ] Add real contact form backend (options: [Formspree](https://formspree.io/), [Netlify Forms](https://www.netlify.com/products/forms/), [EmailJS](https://www.emailjs.com/))
- [ ] Connect email signup forms to **Mailchimp** / **ConvertKit** / **HubSpot**
- [ ] Add real photos of Dr. Leila and Dinah (replace CSS placeholder initials)
- [ ] Replace `href="#"` on blog article links with real post URLs
- [ ] Embed real Google Maps iframe in Contact page
- [ ] Add real Google Review link (`https://g.page/r/[YOUR_PLACE_ID]/review`)
- [ ] Update schema JSON-LD in `index.html` with actual Google `@id` URL

### Recommended  
- [ ] Add `react-helmet-async` for per-page SEO meta descriptions
- [ ] Set up Google Analytics 4 / Google Tag Manager
- [ ] Add Google Search Console verification
- [ ] Configure Google Business Profile integration
- [ ] Add Live Chat (Intercom, Drift, or Tidio)
- [ ] Set up CareCredit financing widget/link
- [ ] Add before/after hearing simulation audio demos
- [ ] Create individual blog post pages with full content
- [ ] Add HIPAA-compliant contact form if collecting health information
- [ ] Set up remarketing pixels (Meta, Google)

### Deployment
- **Netlify**: `npm run build` → drop `dist/` folder or connect GitHub
- **Vercel**: `vercel --prod` (auto-detects Vite)
- **Traditional hosting**: Upload `dist/` contents to public_html

---

## 📞 Business Information

| | |
|---|---|
| **Business** | All About Ears, LLC |
| **Owner** | Dr. Leila Grant-Cleveland, Au.D. |
| **Co-Owner** | Dinah Grant, R.N. |
| **Phone** | (409) 866-7747 |
| **Email** | allaboutears15@yahoo.com |
| **Address** | 6270 Phelan Blvd, Beaumont, TX 77706 |
| **Hours** | Mon–Fri 8:00 AM – 5:00 PM |

---

## 📈 SEO Keywords Targeted

- `audiologist Beaumont TX`
- `hearing aids Beaumont TX`
- `hearing test Beaumont TX`
- `hearing loss Southeast Texas`
- `custom ear plugs hunters TX`
- `tinnitus treatment Beaumont`
- `hearing protection musicians Texas`
- `pediatric audiology Beaumont`
- `ear cleaning Beaumont TX`
- `hearing aid center Port Arthur TX`

---

*Built with ❤️ for All About Ears, LLC — Beaumont, TX*
