import { Phone, MessageCircle } from 'lucide-react'
import { siteConfig } from '../data/siteConfig'

export default function StickyMobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-white/95 backdrop-blur-md border-t border-gold/10 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] px-4 py-3">
      <div className="flex gap-3 max-w-lg mx-auto">
        <a
          href={`tel:${siteConfig.phoneTel}`}
          className="flex-1 inline-flex items-center justify-center gap-2 bg-charcoal hover:bg-charcoal/90 text-white py-3.5 rounded-full font-semibold text-sm transition-colors"
        >
          <Phone className="w-4 h-4" />
          Call Now
        </a>
        <a
          href={`https://wa.me/${siteConfig.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white py-3.5 rounded-full font-semibold text-sm transition-colors"
        >
          <MessageCircle className="w-4 h-4" />
          WhatsApp
        </a>
      </div>
    </div>
  )
}
