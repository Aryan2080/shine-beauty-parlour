import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Header from './components/Header'
import Footer from './components/Footer'
import StickyMobileCTA from './components/StickyMobileCTA'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Gallery from './pages/Gallery'
import Testimonials from './pages/Testimonials'
import Contact from './pages/Contact'

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
            <Route path="/services" element={<Services />} />
            <Route path="/gallery" element={<Gallery />} />
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
