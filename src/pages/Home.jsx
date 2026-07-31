import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Phone, MessageCircle, Star, Award, Users, Crown, Zap, Sparkles, Scissors, Gem, Heart, Check, ArrowRight, ShieldCheck, User, Camera, ExternalLink } from 'lucide-react'
import { siteConfig, trustStrip, whyUsPoints, instagramImages } from '../data/siteConfig'
import { servicePreviewCards } from '../data/services'
import { packages } from '../data/packages'
import { testimonials } from '../data/testimonials'
import subhashiniImg from '../assets/subhashini.jpg'
import heroBridalImg from '../assets/hero-bridal.png'
import usePageMeta from '../hooks/usePageMeta'
import ScrollReveal from '../components/ScrollReveal'
import SectionHeading from '../components/SectionHeading'
import CTABanner from '../components/CTABanner'
import PageTransition from '../components/PageTransition'

const iconMap = { Award, Users, Star, Crown, Zap, Sparkles, Scissors, Gem, Heart, User, ShieldCheck }

export default function Home() {
  usePageMeta(null, 'Shine Beauty Parlour by Subhashini — 15+ years of expert bridal makeup, party makeup, saree draping, skin care, hair care, and advanced laser treatments in Vijayawada, Andhra Pradesh. Google 5-star rated.')
  const previewTestimonials = testimonials.slice(0, 3)

  return (
    <PageTransition>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-ivory via-blush to-blush-dark" />
        <div className="absolute top-20 right-0 w-72 h-72 sm:w-96 sm:h-96 bg-secondary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-0 w-64 h-64 sm:w-80 sm:h-80 bg-primary/5 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6 border border-gold/20">
                <Star className="w-4 h-4 fill-gold text-gold" />
                <span className="text-sm font-medium text-charcoal">
                  {siteConfig.googleRating}★ Google Rated · {siteConfig.experience} Years Trusted
                </span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-charcoal leading-tight mb-6">
                {siteConfig.experience} Years of Making You{' '}
                <span className="text-primary italic">Shine</span>
              </h1>

              <blockquote className="font-serif italic text-lg sm:text-xl text-primary leading-relaxed mb-6 max-w-xl mx-auto lg:mx-0 pl-4 border-l-2 border-gold">
                <span className="text-gold not-italic mr-1">&ldquo;</span>
                Beauty is self confidence applied directly to the face.
                <span className="text-gold not-italic ml-1">&rdquo;</span>
              </blockquote>

              <p className="text-lg sm:text-xl text-charcoal-light leading-relaxed mb-4 max-w-xl mx-auto lg:mx-0">
                Bridal, Party & Complete Beauty Care — Skin, Hair, Nails, Body Care,
                and Advanced Machine Treatments by{' '}
                <span className="font-semibold text-primary">{siteConfig.owner}</span>.
              </p>

              <p className="text-base text-secondary font-medium mb-8 max-w-xl mx-auto lg:mx-0">
                Your trusted beauty destination in {siteConfig.locality}, {siteConfig.state}.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href={`https://wa.me/${siteConfig.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 bg-gold hover:bg-gold-light text-charcoal px-8 py-4 rounded-full text-lg font-bold tracking-wide shadow-lg shadow-gold/30 transition-all hover:-translate-y-0.5"
                >
                  <MessageCircle className="w-5 h-5" />
                  Book Your Appointment
                </a>
                <a
                  href={`tel:${siteConfig.phoneTel}`}
                  className="inline-flex items-center justify-center gap-2.5 bg-transparent hover:bg-primary/5 text-primary border-2 border-primary px-8 py-4 rounded-full text-lg font-bold tracking-wide transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative w-full aspect-[3/4] max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-gold/20 rounded-3xl rotate-3" />
                <div className="absolute inset-0 bg-gradient-to-tr from-blush-dark to-blush rounded-3xl -rotate-2 border border-gold/20" />
                <div className="relative bg-gradient-to-br from-blush to-blush-dark rounded-3xl overflow-hidden border border-gold/10 h-full">
                  <img
                    src={heroBridalImg}
                    alt="Bridal makeup look by Subhashini — Shine Beauty Parlour Vijayawada"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Trust Strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-16 lg:mt-20"
          >
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl border border-gold/10 py-5 px-4 sm:px-8">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {trustStrip.map((item, i) => {
                  const Icon = iconMap[item.icon]
                  return (
                    <div key={i} className="flex items-center justify-center gap-2 sm:gap-3">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                      </div>
                      <span className="text-xs sm:text-sm font-medium text-charcoal">{item.text}</span>
                    </div>
                  )
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Intro to Subhashini */}
      <section className="py-20 lg:py-28 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <ScrollReveal direction="left">
              <div className="relative aspect-[4/5] max-w-sm mx-auto lg:mx-0">
                <div className="absolute -inset-3 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl rotate-2" />
                <div className="relative bg-gradient-to-br from-blush to-blush-dark rounded-3xl overflow-hidden border border-gold/10 h-full">
                  <img
                    src={subhashiniImg}
                    alt="Subhashini — Owner & Professional Makeup Artist, Shine Beauty Parlour"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.1}>
              <span className="text-secondary font-medium tracking-widest uppercase text-sm">About the Artist</span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal mt-2 mb-6">
                Meet <span className="text-primary italic">{siteConfig.owner}</span>
              </h2>
              <p className="text-charcoal-light leading-relaxed text-base sm:text-lg mb-4">
                With over 15 years of dedicated experience and {siteConfig.happyClients} happy clients,
                Subhashini has become Vijayawada's most trusted name in bridal makeup, party styling,
                and advanced beauty treatments.
              </p>
              <p className="text-charcoal-light leading-relaxed text-base sm:text-lg mb-8">
                From traditional saree draping to modern HD airbrush makeup, every service at Shine Beauty
                Parlour is delivered with personal attention, hygienic care, and a genuine passion for
                making you look and feel your absolute best.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-semibold transition-colors group"
              >
                Meet Subhashini
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 lg:py-28 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="What We Offer"
            description="From everyday beauty care to bridal transformations and advanced skin treatments — everything you need, under one roof."
          >
            Our <span className="text-primary italic">Services</span>
          </SectionHeading>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicePreviewCards.map((service, i) => {
              const Icon = iconMap[service.icon]
              return (
                <ScrollReveal key={service.id} delay={i * 0.07}>
                  <div className="bg-white rounded-3xl border border-gold/10 p-6 sm:p-8 h-full hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center mb-5">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-serif text-xl font-bold text-charcoal mb-2">{service.title}</h3>
                    <p className="text-charcoal-light text-sm leading-relaxed">{service.description}</p>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>

          <ScrollReveal>
            <div className="text-center mt-12">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-charcoal px-8 py-4 rounded-full text-lg font-bold tracking-wide transition-all hover:shadow-lg hover:-translate-y-0.5"
              >
                View All Services
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Bridal Packages */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="Bridal Packages"
            description="Choose the perfect package for your special day — every package is delivered with Subhashini's personal attention to detail."
          >
            Signature Bridal & <span className="text-primary italic">Makeover</span> Packages
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
                      Signature Package
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
                      {pkg.shortFeatures.map((f, j) => (
                        <li key={j} className="flex items-start gap-3 text-sm text-charcoal-light">
                          <Check className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <a
                      href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(`Hi, I'm interested in the ${pkg.name} package (₹${pkg.price}). Could you share more details?`)}`}
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

      {/* Why Choose Us */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-primary-dark via-primary to-primary-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 20% 30%, #FFD700 0%, transparent 40%), radial-gradient(circle at 80% 70%, #FFD700 0%, transparent 40%)' }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading subtitle="Why Us" variant="dark">
            Why Choose <span className="text-gold italic">Shine Beauty Parlour</span>
          </SectionHeading>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUsPoints.map((point, i) => {
              const Icon = iconMap[point.icon]
              return (
                <ScrollReveal key={point.title} delay={i * 0.07}>
                  <div className="bg-blush rounded-3xl p-6 sm:p-8 border border-gold/30 text-center h-full hover:shadow-xl hover:shadow-gold/20 hover:-translate-y-1 transition-all duration-300">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gold/20 to-gold/10 border border-gold/30 flex items-center justify-center mx-auto mb-5">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-serif text-lg font-bold text-charcoal mb-2">{point.title}</h3>
                    <p className="text-sm text-charcoal-light leading-relaxed">{point.description}</p>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-blush to-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading subtitle="Testimonials">
            What Our <span className="text-primary italic">Clients</span> Say
          </SectionHeading>

          <ScrollReveal>
            <div className="flex items-center justify-center gap-3 mb-12">
              <div className="bg-white rounded-2xl px-6 py-3 border border-gold/10 shadow-sm flex items-center gap-3">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                  ))}
                </div>
                <div className="h-6 w-px bg-gold/20" />
                <div>
                  <span className="font-serif text-2xl font-bold text-primary">{siteConfig.googleRating}</span>
                  <span className="text-charcoal-light text-sm ml-1.5">on Google</span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6">
            {previewTestimonials.map((t, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gold/10 h-full shadow-sm">
                  <div className="flex gap-0.5 mb-4">
                    {[...Array(t.rating)].map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-gold text-gold" />
                    ))}
                  </div>
                  <p className="text-charcoal-light text-sm sm:text-base leading-relaxed mb-6 italic">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-3 pt-4 border-t border-blush">
                    <div className="w-11 h-11 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-sm">
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

          <ScrollReveal>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
              <a
                href={siteConfig.googleReviewsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-primary hover:text-primary-dark font-medium text-sm transition-colors"
              >
                Read More Reviews on Google <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <span className="hidden sm:block text-charcoal-light/30">|</span>
              <Link
                to="/testimonials"
                className="inline-flex items-center gap-1.5 text-primary hover:text-primary-dark font-medium text-sm transition-colors"
              >
                See All Testimonials <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Instagram Teaser */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-10">
              <span className="text-secondary font-medium tracking-widest uppercase text-sm">Follow Us</span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-charcoal mt-2">
                <span className="text-primary italic">{siteConfig.instagramHandle}</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 sm:gap-3">
            {instagramImages.map((img, i) => (
              <ScrollReveal key={img.id} delay={i * 0.05}>
                <a
                  href={siteConfig.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative aspect-square rounded-xl overflow-hidden border border-gold/10"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Camera className="w-6 h-6 text-primary/30" />
                  </div>
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/30 transition-colors flex items-center justify-center">
                    <Camera className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </a>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="text-center mt-6">
              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-medium text-sm transition-colors"
              >
                Follow us on Instagram <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Final CTA */}
      <CTABanner />
    </PageTransition>
  )
}
