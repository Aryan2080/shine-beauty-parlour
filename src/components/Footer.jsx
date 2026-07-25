import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Clock, MessageCircle, Star, Navigation } from 'lucide-react'
import { siteConfig, navLinks } from '../data/siteConfig'

const serviceLinks = [
  { label: 'Salon Services', path: '/services/salon' },
  { label: 'Bridal & Makeover', path: '/services/bridal-makeover' },
  { label: 'Advanced Treatments', path: '/services/advanced-treatments' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-charcoal text-white/80 pb-24 lg:pb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="block mb-4">
              <span className="font-serif text-2xl font-bold text-white">
                {siteConfig.businessName}
              </span>
              <p className="text-secondary text-xs tracking-wider uppercase mt-0.5">
                {siteConfig.tagline}
              </p>
            </Link>
            <p className="text-sm text-white/60 leading-relaxed mb-5">
              Your trusted beauty destination for bridal makeup, skin care,
              hair care, and advanced treatments in {siteConfig.locality}.
            </p>
            <div className="flex items-center gap-1.5 bg-white/10 rounded-full px-3 py-1.5 w-fit">
              <Star className="w-4 h-4 fill-gold text-gold" />
              <span className="text-sm font-medium text-gold">{siteConfig.googleRating}★ Google Rated</span>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-white/60 hover:text-secondary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Services
            </h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((s) => (
                <li key={s.path}>
                  <Link
                    to={s.path}
                    className="text-sm text-white/60 hover:text-secondary transition-colors"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                <a href={`tel:${siteConfig.phoneTel}`} className="text-sm hover:text-secondary transition-colors">
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                <a href={`mailto:${siteConfig.email}`} className="text-sm hover:text-secondary transition-colors break-all">
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                <span className="text-sm">
                  {siteConfig.address}, {siteConfig.locality}, {siteConfig.state} {siteConfig.pincode}
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                <span className="text-sm">{siteConfig.workingHours}</span>
              </li>
            </ul>

            <div className="flex gap-3 mt-5">
              <a
                href={`https://wa.me/${siteConfig.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#25D366]/20 flex items-center justify-center hover:bg-[#25D366]/40 transition-colors"
                aria-label="Chat on WhatsApp"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
              </a>
              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-secondary/30 transition-colors"
                aria-label="Follow on Instagram"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a
                href={siteConfig.googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-secondary/30 transition-colors"
                aria-label="Get Directions"
              >
                <Navigation className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-sm text-white/40">
            &copy; {year} {siteConfig.businessName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
