import { lazy, Suspense } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Header from './components/Header'
import Footer from './components/Footer'
import StickyMobileCTA from './components/StickyMobileCTA'
import Home from './pages/Home'
import About from './pages/About'
import ServicesHub from './pages/ServicesHub'
import SalonServices from './pages/SalonServices'
import BridalMakeover from './pages/BridalMakeover'
import AdvancedTreatments from './pages/AdvancedTreatments'
import Gallery from './pages/Gallery'
import Testimonials from './pages/Testimonials'
import Contact from './pages/Contact'

const TreatmentsGallery = lazy(() => import('./pages/TreatmentsGallery'))

export default function App() {
  const location = useLocation()

  return (
    <>
      <Header />
      <main>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<ServicesHub />} />
            <Route path="/services/salon" element={<SalonServices />} />
            <Route path="/services/bridal-makeover" element={<BridalMakeover />} />
            <Route path="/services/advanced-treatments" element={<AdvancedTreatments />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/treatments-gallery" element={<Suspense fallback={<div className="min-h-screen" />}><TreatmentsGallery /></Suspense>} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  )
}
