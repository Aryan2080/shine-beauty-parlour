import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Star, Phone } from 'lucide-react'
import { siteConfig, navLinks } from '../data/siteConfig'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setIsMobileMenuOpen(false)
    window.scrollTo(0, 0)
  }, [location.pathname])

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isMobileMenuOpen])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 transition-all duration-300 border-b-2 border-gold/60 bg-primary-dark ${
          isMobileMenuOpen ? 'z-[70] py-2' :
          isScrolled
            ? 'z-50 shadow-lg shadow-black/20 py-2'
            : 'z-50 py-3 lg:py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <Link to="/" className="flex flex-col shrink-0">
            <span className="font-serif text-xl sm:text-2xl font-bold text-gold tracking-wide">
              {siteConfig.businessName}
            </span>
            <span className="text-[10px] sm:text-xs text-white/80 tracking-wider uppercase -mt-0.5">
              {siteConfig.tagline}
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `px-3 py-2 text-sm font-bold tracking-wide rounded-lg transition-colors ${
                    isActive
                      ? 'text-gold border-b-2 border-gold rounded-none'
                      : 'text-white hover:text-gold'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <div className="flex items-center gap-1 text-sm text-gold">
              <Star className="w-4 h-4 fill-gold text-gold" />
              <span className="font-semibold">{siteConfig.googleRating}</span>
            </div>
            <a
              href={`https://wa.me/${siteConfig.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold hover:bg-gold-light text-charcoal px-5 py-2.5 rounded-full text-sm font-bold tracking-wide transition-all hover:shadow-lg hover:shadow-gold/40 hover:-translate-y-0.5"
            >
              Book Appointment
            </a>
          </div>

          <button
            className="lg:hidden p-3 -mr-1 text-white hover:text-gold transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden fixed inset-0 bg-primary-dark z-[60]"
          >
            <nav className="flex flex-col items-center justify-center h-full gap-2">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <NavLink
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `text-2xl font-serif font-medium py-3 transition-colors ${
                        isActive ? 'text-gold' : 'text-white hover:text-gold'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
                className="flex flex-col gap-3 mt-6 items-center"
              >
                <div className="flex items-center gap-1.5 text-gold">
                  <Star className="w-5 h-5 fill-gold text-gold" />
                  <span className="font-semibold text-lg">{siteConfig.googleRating} Google Rated</span>
                </div>
                <a
                  href={`https://wa.me/${siteConfig.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gold hover:bg-gold-light text-charcoal px-8 py-3 rounded-full text-lg font-bold tracking-wide transition-all"
                >
                  Book Appointment
                </a>
                <a
                  href={`tel:${siteConfig.phoneTel}`}
                  className="flex items-center gap-2 text-white hover:text-gold transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span className="font-medium">Call Now</span>
                </a>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
