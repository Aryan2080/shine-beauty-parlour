import { Link } from 'react-router-dom'
import { ArrowLeft, MessageCircle, Check, Star } from 'lucide-react'
import { siteConfig } from '../data/siteConfig'
import { bridalCategory } from '../data/services'
import { packages } from '../data/packages'
import usePageMeta from '../hooks/usePageMeta'
import ScrollReveal from '../components/ScrollReveal'
import SectionHeading from '../components/SectionHeading'
import ServiceCategory from '../components/ServiceCategory'
import CTABanner from '../components/CTABanner'
import PageTransition from '../components/PageTransition'

export default function BridalMakeover() {
  usePageMeta('Best Bridal Makeup Artist in Vijayawada', 'Bridal makeup packages, saree draping, and event makeovers by Vijayawada\'s top bridal artist with 15+ years of experience. Book your wedding look now.')

  return (
    <PageTransition>
      <section className="pt-28 pb-16 lg:pt-36 lg:pb-20 bg-gradient-to-b from-blush to-ivory">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <Link to="/services" className="inline-flex items-center gap-1.5 text-primary hover:text-primary-dark font-medium text-sm mb-4 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              All Services
            </Link>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-charcoal mt-2">
              Bridal & <span className="text-primary italic">Makeover</span>
            </h1>
            <p className="text-charcoal-light mt-4 text-lg sm:text-xl max-w-2xl mx-auto">
              Make your special day unforgettable with Subhashini's signature bridal and event makeup artistry.
            </p>
            <div className="gold-divider mt-6" />
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-ivory">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ServiceCategory category={bridalCategory} />
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="Bridal Packages"
            description="Detailed bridal and makeover packages — each delivered with Subhashini's personal expertise and premium products."
          >
            Signature Bridal & <span className="text-primary italic">Makeover</span> Pricing
          </SectionHeading>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 md:items-stretch">
            {packages.map((pkg, i) => (
              <ScrollReveal key={pkg.name} delay={i * 0.1}>
                <div
                  className={`group relative rounded-3xl overflow-hidden h-full transition-all duration-300 active:scale-[0.98] ${
                    pkg.popular
                      ? 'border-2 border-primary bg-gradient-to-b from-blush to-blush-dark shadow-xl shadow-primary/15 md:scale-[1.02]'
                      : 'border border-primary/20 bg-blush hover:-translate-y-1 hover:shadow-xl'
                  }`}
                >
                  {!pkg.popular && (
                    <div className="pointer-events-none absolute inset-0 bg-white opacity-0 group-hover:opacity-[0.12] transition-opacity duration-300" />
                  )}
                  <div className="relative flex flex-col h-full p-6 sm:p-8">
                    {pkg.popular && (
                      <div className="inline-flex self-start items-center gap-1.5 bg-primary text-gold text-[10px] sm:text-xs font-bold tracking-wider uppercase whitespace-nowrap px-3 py-1.5 rounded-full mb-4">
                        <Star className="w-3 h-3 fill-gold" />
                        Signature Package
                      </div>
                    )}
                    <h3 className="font-serif text-2xl font-bold text-charcoal mb-1">{pkg.name}</h3>
                    <p className="text-charcoal-light text-sm mb-4">{pkg.description}</p>
                    <div className="mb-6">
                      <span className="text-sm text-primary font-semibold tracking-wide">Starting from</span>
                      <div className="font-serif text-3xl font-bold text-primary mt-1">₹{pkg.price}</div>
                    </div>
                    <ul className="space-y-3 mb-8">
                      {pkg.fullFeatures.map((f, j) => (
                        <li key={j} className="flex items-start gap-3 text-sm text-charcoal">
                          <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <a
                      href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(`Hi, I'm interested in the ${pkg.name} package (₹${pkg.price}). Could you share more details and availability?`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`mt-auto w-full inline-flex items-center justify-center gap-2 py-3.5 min-h-[48px] rounded-full font-bold tracking-wide transition-all hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-blush ${
                        pkg.popular
                          ? 'bg-gold hover:bg-gold-light text-charcoal shadow-lg shadow-gold/30'
                          : 'bg-primary hover:bg-primary-dark text-white'
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
              Final pricing depends on look, products used, and event requirements — contact us for a personalized quote.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <CTABanner headline="Book Your Bridal Consultation" compact />
    </PageTransition>
  )
}
