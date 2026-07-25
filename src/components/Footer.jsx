import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Clock, Camera, Globe, Star, Navigation } from 'lucide-react'
import { siteConfig, navLinks } from '../data/siteConfig'
import { serviceCategories } from '../data/services'

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
              {serviceCategories.map((s) => (
                <li key={s.id}>
                  <Link
                    to="/services"
                    className="text-sm text-white/60 hover:text-secondary transition-colors"
                  >
                    {s.title}
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
                href={siteConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-secondary/30 transition-colors"
                aria-label="Follow on Instagram"
              >
                <Camera className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${siteConfig.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-secondary/30 transition-colors"
                aria-label="Chat on WhatsApp"
              >
                <Globe className="w-4 h-4" />
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
