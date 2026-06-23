import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import FloatingPhone from './components/FloatingPhone'
import ExitModal from './components/ExitModal'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import HearingAids from './pages/HearingAids'
import HearingProtection from './pages/HearingProtection'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import InsuranceFinancing from './pages/InsuranceFinancing'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/hearing-aids" element={<HearingAids />} />
          <Route path="/hearing-protection" element={<HearingProtection />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/insurance-financing" element={<InsuranceFinancing />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
      <FloatingPhone />
      <ExitModal />
    </>
  )
}
