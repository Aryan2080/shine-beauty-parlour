import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight, ShieldCheck, Play } from 'lucide-react'
import { advancedCategory } from '../data/services'
import usePageMeta from '../hooks/usePageMeta'
import ScrollReveal from '../components/ScrollReveal'
import ServiceCategory from '../components/ServiceCategory'
import CTABanner from '../components/CTABanner'
import PageTransition from '../components/PageTransition'

export default function AdvancedTreatments() {
  usePageMeta('Laser Hair Removal, Tattoo Removal & HydraFacial in Vijayawada', 'Professional laser hair removal, tattoo removal, hydrafacial, and advanced skin treatments using safe, modern equipment. Trusted results for 15+ years.')

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
              Advanced <span className="text-primary italic">Treatments</span>
            </h1>
            <p className="text-charcoal-light mt-4 text-lg sm:text-xl max-w-2xl mx-auto">
              Professional-grade machine and laser treatments — safe, certified, and effective results you can trust.
            </p>
            <div className="gold-divider mt-6" />
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-ivory">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ServiceCategory category={advancedCategory} />

          <ScrollReveal>
            <div className="mt-8 bg-gradient-to-br from-white to-blush rounded-2xl border border-gold/10 p-6 sm:p-8 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-charcoal mb-1">Safe & Professional Equipment</h3>
                <p className="text-charcoal-light text-sm leading-relaxed">
                  All advanced treatments at Shine Beauty Parlour use certified, professional-grade equipment
                  operated by trained professionals. Your safety and comfort are our top priorities — every
                  procedure includes a thorough consultation and skin assessment before treatment.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <Link
              to="/treatments-gallery"
              className="group block rounded-3xl border-2 border-dashed border-primary/30 hover:border-primary bg-gradient-to-r from-primary/5 to-secondary/5 hover:from-primary/10 hover:to-secondary/10 p-8 sm:p-10 text-center transition-all"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <Play className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-charcoal mb-2">Watch Real Treatments in Action</h3>
              <p className="text-charcoal-light text-sm max-w-md mx-auto mb-4">
                See real client results — before/after photos and video footage of our advanced treatments performed at the parlour.
              </p>
              <span className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                View Treatments Gallery
                <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <CTABanner headline="Book Your Treatment Consultation" compact />
    </PageTransition>
  )
}
