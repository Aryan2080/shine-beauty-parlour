import { Link } from 'react-router-dom'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sparkles, Crown, Zap, ArrowRight, Plus, Minus } from 'lucide-react'
import { siteConfig } from '../data/siteConfig'
import { faqItems } from '../data/faq'
import { serviceSchemas, buildFaqSchema } from '../data/structuredData'
import usePageMeta from '../hooks/usePageMeta'
import JsonLd from '../components/JsonLd'
import ScrollReveal from '../components/ScrollReveal'
import SectionHeading from '../components/SectionHeading'
import CTABanner from '../components/CTABanner'
import PageTransition from '../components/PageTransition'

const hubCards = [
  {
    icon: Sparkles,
    title: 'Salon Services',
    description: 'Skin care, hair styling, nail art, body care & waxing — everyday beauty services for every occasion.',
    path: '/services/salon',
    gradient: 'from-secondary/15 to-gold/10',
    iconBg: 'from-secondary/20 to-gold/20',
  },
  {
    icon: Crown,
    title: 'Bridal & Makeover',
    description: 'Signature bridal packages, party makeup, event styling, and saree draping by Subhashini.',
    path: '/services/bridal-makeover',
    gradient: 'from-primary/15 to-secondary/10',
    iconBg: 'from-primary to-primary-dark',
    featured: true,
  },
  {
    icon: Zap,
    title: 'Advanced Treatments',
    description: 'Laser hair removal, hydra facial, tattoo removal, ear piercing & more — safe, professional-grade equipment.',
    path: '/services/advanced-treatments',
    gradient: 'from-gold/15 to-primary/10',
    iconBg: 'from-gold/20 to-secondary/20',
  },
]

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

export default function ServicesHub() {
  usePageMeta('Services', 'Explore our complete range of beauty services — salon treatments, bridal & makeover packages, and advanced machine treatments. Shine Beauty Parlour, Vijayawada.')

  const faqSchema = buildFaqSchema(faqItems)

  return (
    <PageTransition>
      {serviceSchemas.map((schema, i) => <JsonLd key={i} data={schema} />)}
      <JsonLd data={faqSchema} />
      <section className="pt-28 pb-16 lg:pt-36 lg:pb-20 bg-gradient-to-b from-blush to-ivory">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <span className="text-secondary font-medium tracking-widest uppercase text-sm">Our Services</span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-charcoal mt-3">
              Complete Beauty <span className="text-primary italic">Services</span>
            </h1>
            <p className="text-charcoal-light mt-4 text-lg sm:text-xl max-w-2xl mx-auto">
              From everyday beauty care to bridal transformations and advanced treatments —
              everything you need, delivered with {siteConfig.experience} years of expertise.
            </p>
            <div className="gold-divider mt-6" />
          </ScrollReveal>
        </div>
      </section>

      {/* Thematic Quote Banner */}
      <section className="py-16 lg:py-24 bg-blush border-y border-gold/30">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-8 text-center">
          <ScrollReveal>
            <span className="text-gold text-3xl sm:text-4xl font-serif leading-none block mb-2" aria-hidden="true">&ldquo;</span>
            <blockquote className="font-serif font-bold text-charcoal text-2xl sm:text-3xl lg:text-4xl leading-snug">
              Beauty begins the moment you decide to be yourself.
            </blockquote>
            <div className="gold-divider mt-6" />
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-ivory">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {hubCards.map((card, i) => (
              <ScrollReveal key={card.path} delay={i * 0.1}>
                <Link
                  to={card.path}
                  className={`group block rounded-3xl overflow-hidden h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${
                    card.featured
                      ? 'border-2 border-primary bg-gradient-to-b from-white to-blush'
                      : 'border border-gold/10 bg-white'
                  }`}
                >
                  {card.featured && (
                    <div className="bg-gradient-to-r from-primary to-primary-dark px-4 py-2 text-center">
                      <span className="text-white text-xs font-semibold tracking-wider uppercase">Our Signature Specialty</span>
                    </div>
                  )}
                  <div className="p-8 sm:p-10 text-center">
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${card.iconBg} flex items-center justify-center mx-auto mb-6`}>
                      <card.icon className={`w-10 h-10 ${card.featured ? 'text-white' : 'text-primary'}`} />
                    </div>
                    <h2 className="font-serif text-2xl font-bold text-charcoal mb-3">{card.title}</h2>
                    <p className="text-charcoal-light text-sm leading-relaxed mb-6">{card.description}</p>
                    <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all">
                      Explore
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <FAQSection />

      <CTABanner headline="Book Your Service Today" compact />
    </PageTransition>
  )
}
