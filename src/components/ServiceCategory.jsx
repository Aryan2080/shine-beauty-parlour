import { useState } from 'react'
import { ChevronDown, MessageCircle, Crown, Sparkles, Scissors, Gem, Heart, Zap } from 'lucide-react'
import { siteConfig } from '../data/siteConfig'
import ScrollReveal from './ScrollReveal'

const iconMap = { Sparkles, Scissors, Gem, Heart, Crown, Zap }

export default function ServiceCategory({ category, index = 0 }) {
  const [isExpanded, setIsExpanded] = useState(false)
  const Icon = iconMap[category.icon]

  return (
    <ScrollReveal delay={index * 0.05}>
      <div
        id={category.id}
        className={`rounded-3xl overflow-hidden border transition-all duration-300 ${
          category.featured
            ? 'border-primary/30 bg-gradient-to-br from-white to-blush shadow-lg'
            : 'border-gold/10 bg-white hover:shadow-md'
        }`}
      >
        {category.featured && (
          <div className="bg-gradient-to-r from-primary to-primary-dark px-6 py-2.5 text-center">
            <span className="text-white text-sm font-semibold flex items-center justify-center gap-2">
              <Crown className="w-4 h-4" />
              Our Signature Specialty
            </span>
          </div>
        )}

        <div className="p-6 sm:p-8">
          <div className="flex items-start gap-4 mb-4">
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 ${
              category.featured
                ? 'bg-gradient-to-br from-primary to-primary-dark'
                : 'bg-gradient-to-br from-primary/10 to-secondary/10'
            }`}>
              <Icon className={`w-7 h-7 ${category.featured ? 'text-white' : 'text-primary'}`} />
            </div>
            <div className="flex-1">
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-charcoal">{category.title}</h3>
              <p className="text-charcoal-light text-sm sm:text-base leading-relaxed mt-1">{category.description}</p>
            </div>
          </div>

          <div className="space-y-0 divide-y divide-blush">
            {category.items.slice(0, isExpanded ? undefined : 4).map((item, j) => (
              <div key={j} className="py-3 sm:py-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-secondary shrink-0 mt-2" />
                  <div>
                    <h4 className="font-semibold text-charcoal text-sm sm:text-base">{item.name}</h4>
                    <p className="text-charcoal-light text-xs sm:text-sm leading-relaxed mt-0.5">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {category.items.length > 4 && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center gap-1.5 text-primary font-medium text-sm mt-3 hover:text-primary-dark transition-colors"
            >
              {isExpanded ? 'Show Less' : `Show All ${category.items.length} Services`}
              <ChevronDown className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
            </button>
          )}

          <a
            href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(`Hi, I'm interested in your ${category.title} services. Could you share more details?`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-5 bg-primary/10 hover:bg-primary hover:text-white text-primary px-5 py-2.5 rounded-full text-sm font-semibold transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            Enquire on WhatsApp
          </a>
        </div>
      </div>
    </ScrollReveal>
  )
}
