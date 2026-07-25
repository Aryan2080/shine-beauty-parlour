import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sparkles, Scissors, Gem, Heart, Crown, Zap, ChevronDown, MessageCircle, Check, Star, ShieldCheck, Plus, Minus } from 'lucide-react'
import { siteConfig } from '../data/siteConfig'
import { serviceCategories } from '../data/services'
import { packages } from '../data/packages'
import { faqItems } from '../data/faq'
import usePageMeta from '../hooks/usePageMeta'
import ScrollReveal from '../components/ScrollReveal'
import SectionHeading from '../components/SectionHeading'
import CTABanner from '../components/CTABanner'
import PageTransition from '../components/PageTransition'

const iconMap = { Sparkles, Scissors, Gem, Heart, Crown, Zap }

function ServiceCategory({ category, index }) {
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

function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-ivory to-blush">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subtitle="FAQ"
          description="Got questions? We've got answers. If you don't find what you're looking for, feel free to contact us directly."
        >
          Frequently Asked <span className="text-primary italic">Questions</span>
        </SectionHeading>

        <div className="space-y-3">
          {faqItems.map((item, i) => (
            <ScrollReveal key={i} delay={i * 0.04}>
              <div className="bg-white rounded-2xl border border-gold/10 overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left"
                >
                  <span className="font-semibold text-charcoal text-sm sm:text-base pr-2">{item.question}</span>
                  <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                    openIndex === i ? 'bg-primary text-white' : 'bg-blush text-primary'
                  }`}>
                    {openIndex === i ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-0">
                        <div className="border-t border-blush pt-4">
                          <p className="text-charcoal-light text-sm sm:text-base leading-relaxed">{item.answer}</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function Services() {
  usePageMeta('Services', 'Bridal makeup, hair care, skin care, nail care, body waxing, laser hair removal, hydra facial & more beauty services in Vijayawada. View full service list and bridal package pricing.')
  return (
    <PageTransition>
      {/* Page Hero */}
      <section className="pt-28 pb-16 lg:pt-36 lg:pb-20 bg-gradient-to-b from-blush to-ivory">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <span className="text-secondary font-medium tracking-widest uppercase text-sm">Our Services</span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-charcoal mt-3">
              Complete Beauty <span className="text-primary italic">Services</span>
            </h1>
            <p className="text-charcoal-light mt-4 text-lg sm:text-xl max-w-2xl mx-auto">
              From everyday skin care to bridal transformations and advanced laser treatments —
              everything you need, delivered with {siteConfig.experience} years of expertise.
            </p>
            <div className="gold-divider mt-6" />
          </ScrollReveal>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-16 lg:py-24 bg-ivory">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {serviceCategories.map((cat, i) => (
              <ServiceCategory key={cat.id} category={cat} index={i} />
            ))}
          </div>

          {/* Closing Note */}
          <ScrollReveal>
            <div className="mt-12 bg-white rounded-2xl border border-gold/10 p-6 sm:p-8 text-center">
              <p className="text-charcoal font-medium text-base sm:text-lg">
                ✓ All Skin & Hair Services Available — Don't See What You're Looking For?
              </p>
              <a
                href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent("Hi, I'm looking for a specific service not listed on your website. Could you help?")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-full font-semibold transition-all hover:-translate-y-0.5"
              >
                <MessageCircle className="w-4 h-4" />
                Ask Us Directly on WhatsApp
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Full Pricing Table */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="Bridal Packages"
            description="Detailed bridal and makeover packages — each delivered with Subhashini's personal expertise and premium products."
          >
            Bridal & Makeover <span className="text-primary italic">Pricing</span>
          </SectionHeading>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {packages.map((pkg, i) => (
              <ScrollReveal key={pkg.name} delay={i * 0.1}>
                <div
                  className={`relative rounded-3xl overflow-hidden h-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${
                    pkg.popular
                      ? 'border-2 border-primary bg-gradient-to-b from-white to-blush'
                      : 'border border-gold/10 bg-white'
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-4 py-1.5 rounded-bl-2xl flex items-center gap-1">
                      <Star className="w-3 h-3 fill-white" />
                      Most Popular
                    </div>
                  )}
                  <div className="p-6 sm:p-8">
                    <h3 className="font-serif text-2xl font-bold text-charcoal mb-1">{pkg.name}</h3>
                    <p className="text-charcoal-light text-sm mb-4">{pkg.description}</p>
                    <div className="mb-6">
                      <span className="text-sm text-secondary font-medium">Starting from</span>
                      <div className="font-serif text-3xl font-bold text-primary mt-1">₹{pkg.price}</div>
                    </div>
                    <ul className="space-y-3 mb-8">
                      {pkg.fullFeatures.map((f, j) => (
                        <li key={j} className="flex items-start gap-3 text-sm text-charcoal-light">
                          <Check className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <a
                      href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(`Hi, I'm interested in the ${pkg.name} package (₹${pkg.price}). Could you share more details and availability?`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-full font-semibold transition-all hover:-translate-y-0.5 ${
                        pkg.popular
                          ? 'bg-primary hover:bg-primary-dark text-white shadow-lg shadow-primary/20'
                          : 'bg-ivory hover:bg-blush text-primary border border-primary/20'
                      }`}
                    >
                      <MessageCircle className="w-4 h-4" />
                      Enquire on WhatsApp
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <p className="text-center text-sm text-charcoal-light mt-10 max-w-xl mx-auto italic">
              Final pricing may vary based on look, products used, and event requirements — contact us for a personalized quote.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <FAQSection />

      <CTABanner headline="Book Your Service Today" compact />
    </PageTransition>
  )
}
