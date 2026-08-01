import { Link } from 'react-router-dom'
import { ArrowLeft, MessageCircle } from 'lucide-react'
import { siteConfig } from '../data/siteConfig'
import { salonCategories } from '../data/services'
import usePageMeta from '../hooks/usePageMeta'
import ScrollReveal from '../components/ScrollReveal'
import ServiceCategory from '../components/ServiceCategory'
import CTABanner from '../components/CTABanner'
import PageTransition from '../components/PageTransition'

export default function SalonServices() {
  usePageMeta('Beauty Parlour & Hair Salon Services in Vijayawada', 'Full salon services including skin care, hair care, nail care, and full body care & waxing, by expert professionals. Located in Ajit Singh Nagar, Vijayawada.')

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
              Salon <span className="text-primary italic">Services</span>
            </h1>
            <p className="text-charcoal-light mt-4 text-lg sm:text-xl max-w-2xl mx-auto">
              Skin care, hair styling, nail art, and full body care — everyday beauty treatments delivered with expert care.
            </p>
            <div className="gold-divider mt-6" />
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-ivory">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {salonCategories.map((cat, i) => (
              <ServiceCategory key={cat.id} category={cat} index={i} />
            ))}
          </div>

          <ScrollReveal>
            <div className="mt-12 bg-white rounded-2xl border border-gold/10 p-6 sm:p-8 text-center">
              <p className="text-charcoal font-medium text-base sm:text-lg">
                ✓ All Skin & Hair Services Available — Don't See What You're Looking For?
              </p>
              <a
                href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent("Hi, I'm looking for a specific service not listed on your website. Could you help?")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 bg-gold hover:bg-gold-light text-charcoal px-6 py-3 rounded-full font-bold tracking-wide transition-all hover:-translate-y-0.5"
              >
                <MessageCircle className="w-4 h-4" />
                Ask Us Directly on WhatsApp
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <CTABanner headline="Book Your Salon Appointment" compact />
    </PageTransition>
  )
}
