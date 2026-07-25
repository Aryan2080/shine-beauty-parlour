import { Phone, MessageCircle } from 'lucide-react'
import { siteConfig } from '../data/siteConfig'
import ScrollReveal from './ScrollReveal'

export default function CTABanner({ headline = "Ready to Shine? Book Your Appointment Today", compact = false }) {
  return (
    <ScrollReveal>
      <section className={`bg-gradient-to-r from-primary to-primary-dark ${compact ? 'py-12' : 'py-16 lg:py-20'}`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className={`font-serif font-bold text-white ${compact ? 'text-2xl sm:text-3xl' : 'text-3xl sm:text-4xl lg:text-5xl'} mb-6`}>
            {headline}
          </h2>
          <p className="text-white/80 mb-8 text-base sm:text-lg max-w-xl mx-auto">
            Call or WhatsApp us to book your appointment — we're open all week, 10 AM to 9 PM.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`https://wa.me/${siteConfig.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 bg-white text-primary hover:bg-blush px-8 py-4 rounded-full text-lg font-semibold transition-all hover:shadow-lg hover:-translate-y-0.5"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Us
            </a>
            <a
              href={`tel:${siteConfig.phoneTel}`}
              className="inline-flex items-center justify-center gap-2.5 border-2 border-white/40 text-white hover:bg-white/10 px-8 py-4 rounded-full text-lg font-semibold transition-all"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
          </div>
        </div>
      </section>
    </ScrollReveal>
  )
}
