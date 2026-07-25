import { Star, ExternalLink } from 'lucide-react'
import { siteConfig } from '../data/siteConfig'
import { testimonials } from '../data/testimonials'
import { buildReviewSchemas } from '../data/structuredData'
import usePageMeta from '../hooks/usePageMeta'
import ScrollReveal from '../components/ScrollReveal'
import PageTransition from '../components/PageTransition'
import JsonLd from '../components/JsonLd'

export default function Testimonials() {
  usePageMeta('Real Client Reviews of Shine Beauty Parlour | 5.0★ Google Rating', 'See what real clients say about their experience at Shine Beauty Parlour, Vijayawada\'s top-rated beauty clinic with a 5.0-star Google rating across 10,000+ happy customers.')

  const reviewSchemas = buildReviewSchemas(testimonials)

  return (
    <PageTransition>
      {reviewSchemas.map((schema, i) => <JsonLd key={i} data={schema} />)}
      {/* Page Hero */}
      <section className="pt-28 pb-16 lg:pt-36 lg:pb-20 bg-gradient-to-b from-blush to-ivory">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <span className="text-secondary font-medium tracking-widest uppercase text-sm">Testimonials</span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-charcoal mt-3">
              What Our <span className="text-primary italic">Clients</span> Say
            </h1>
            <p className="text-charcoal-light mt-4 text-lg sm:text-xl max-w-2xl mx-auto">
              Real reviews from real clients — here's why {siteConfig.happyClients} women trust Shine Beauty Parlour.
            </p>
            <div className="gold-divider mt-6" />
          </ScrollReveal>
        </div>
      </section>

      {/* Google Rating Banner */}
      <section className="py-8 bg-white border-b border-gold/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
              <div className="flex items-center gap-3">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-gold text-gold" />
                  ))}
                </div>
                <div>
                  <span className="font-serif text-3xl font-bold text-primary">{siteConfig.googleRating}</span>
                  <span className="text-charcoal-light text-sm ml-2">on Google</span>
                </div>
              </div>
              <a
                href={siteConfig.googleReviewsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all hover:-translate-y-0.5"
              >
                Read / Write a Review on Google
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 lg:py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <ScrollReveal key={i} delay={i * 0.06}>
                <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gold/10 h-full shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex gap-0.5 mb-4">
                    {[...Array(t.rating)].map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-gold text-gold" />
                    ))}
                  </div>
                  <p className="text-charcoal-light text-sm sm:text-base leading-relaxed mb-6 italic">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-3 pt-4 border-t border-blush">
                    <div className="w-11 h-11 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-sm shrink-0">
                      {t.initials}
                    </div>
                    <div>
                      <div className="font-semibold text-charcoal text-sm">{t.name}</div>
                      <div className="text-xs text-secondary">{t.occasion}</div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Leave a Review CTA */}
          <ScrollReveal>
            <div className="mt-16 bg-white rounded-3xl border border-gold/10 p-8 sm:p-10 text-center max-w-2xl mx-auto">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-charcoal mb-3">
                Loved Your Experience?
              </h2>
              <p className="text-charcoal-light mb-6">
                We'd love to hear from you! Leave us a review on Google and help other women discover Shine Beauty Parlour.
              </p>
              <a
                href={siteConfig.googleReviewsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-3.5 rounded-full font-semibold transition-all hover:shadow-lg hover:-translate-y-0.5"
              >
                Leave Us a Review
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </PageTransition>
  )
}
