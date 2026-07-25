import { Link } from 'react-router-dom'
import { Heart, ShieldCheck, Zap, Sparkles, ArrowRight } from 'lucide-react'
import { siteConfig } from '../data/siteConfig'
import subhashiniImg from '../assets/subhashini.jpg'
import bridalGreenSaree from '../assets/bridal-green-saree.jpg'
import bridalGoldPinkSaree from '../assets/bridal-gold-pink-saree.jpg'
import partyRedSaree from '../assets/party-red-saree.jpg'
import partyGoldSaree from '../assets/party-gold-saree.jpg'
import halfsareePinkGold from '../assets/halfsaree-pink-gold.jpg'
import halfsareeMaroonStage from '../assets/halfsaree-maroon-stage.jpg'

const glimpsePhotos = [
  { src: bridalGreenSaree, alt: 'Bridal makeup look with green Kanjivaram saree by Shine Beauty Parlour' },
  { src: partyRedSaree, alt: 'Party makeup look with red saree by Shine Beauty Parlour' },
  { src: halfsareePinkGold, alt: 'Half-saree ceremony draping in pink and gold by Shine Beauty Parlour' },
  { src: bridalGoldPinkSaree, alt: 'Bridal makeup with gold and pink silk saree by Shine Beauty Parlour' },
  { src: partyGoldSaree, alt: 'Party makeup with gold Kanjivaram saree by Shine Beauty Parlour' },
  { src: halfsareeMaroonStage, alt: 'Half-saree ceremony makeover with maroon lehenga by Shine Beauty Parlour' },
]
import usePageMeta from '../hooks/usePageMeta'
import ScrollReveal from '../components/ScrollReveal'
import SectionHeading from '../components/SectionHeading'
import CTABanner from '../components/CTABanner'
import PageTransition from '../components/PageTransition'

const stats = [
  { value: siteConfig.experience, label: "Years of Experience" },
  { value: siteConfig.happyClients, label: "Happy Clients" },
  { value: siteConfig.googleRating + "★", label: "Google Rating" },
  { value: "6", label: "Specialty Categories" },
]

const pillars = [
  {
    icon: Heart,
    title: "Personalized Attention",
    description: "Every client receives one-on-one care from Subhashini herself. No rushed appointments, no rotating staff — just dedicated, personal expertise tailored to your unique features and preferences.",
  },
  {
    icon: ShieldCheck,
    title: "Hygiene First",
    description: "Every tool is sterilized between clients. We use only branded, high-quality products and maintain the highest cleanliness standards throughout our parlour — your safety is non-negotiable.",
  },
  {
    icon: Zap,
    title: "Advanced & Safe Technology",
    description: "From hydra facials to laser hair removal and tattoo removal, we invest in certified, professional-grade equipment. Every advanced treatment is performed with proper training and safety protocols.",
  },
  {
    icon: Sparkles,
    title: "Traditional + Modern Expertise",
    description: "Whether it's a classic South Indian bridal look with traditional saree draping or a contemporary HD airbrush makeup, Subhashini blends time-honored techniques with modern trends effortlessly.",
  },
]

const timeline = [
  { period: "Early Career", description: "Began training in professional makeup artistry and beauty care, developing a foundation in skin and hair treatments." },
  { period: "Building Expertise", description: "Specialized in bridal makeup and traditional saree draping, serving hundreds of brides across Vijayawada and surrounding areas." },
  { period: "Expanding Services", description: "Introduced advanced machine treatments — laser hair removal, hydra facials, and tattoo removal — making professional-grade technology accessible locally." },
  { period: "Shine Beauty Parlour Today", description: "15+ years of experience, 10,000+ happy clients, and a consistent 5.0★ Google rating. A trusted name in bridal beauty and complete care in PNT Colony, Vijayawada." },
]

export default function About() {
  usePageMeta('About Subhashini', 'Meet Subhashini — owner and professional makeup artist at Shine Beauty Parlour, Vijayawada. 15+ years of experience, 10,000+ happy clients, specializing in bridal makeup, saree draping, and advanced treatments.')
  return (
    <PageTransition>
      {/* Page Hero */}
      <section className="pt-28 pb-16 lg:pt-36 lg:pb-20 bg-gradient-to-b from-blush to-ivory">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <span className="text-secondary font-medium tracking-widest uppercase text-sm">About the Artist</span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-charcoal mt-3">
              Meet <span className="text-primary italic">{siteConfig.owner}</span>
            </h1>
            <p className="text-charcoal-light mt-4 text-lg sm:text-xl max-w-2xl mx-auto">
              Owner & Professional Makeup Artist, {siteConfig.businessName}
            </p>
            <div className="gold-divider mt-6" />
          </ScrollReveal>
        </div>
      </section>

      {/* Full Story */}
      <section className="py-20 lg:py-28 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <ScrollReveal direction="left">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl rotate-2" />
                <div className="relative aspect-[4/5] bg-gradient-to-br from-blush to-blush-dark rounded-3xl overflow-hidden border border-gold/10">
                  <img
                    src={subhashiniImg}
                    alt="Subhashini — Owner & Professional Makeup Artist, Shine Beauty Parlour Vijayawada"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.1}>
              <div className="space-y-5 text-charcoal-light leading-relaxed text-base sm:text-lg">
                <p>
                  With over 15 years of dedicated experience in the beauty industry, Subhashini has transformed
                  over 10,000 women into their most radiant selves. Her journey began with a deep passion for artistry
                  and a genuine belief that every woman deserves to feel beautiful — not just on her wedding day,
                  but every day.
                </p>
                <p>
                  Specializing in bridal makeup, party looks, and the traditional art of saree draping, Subhashini
                  brings a personal touch to every appointment. At Shine Beauty Parlour, you're not just another
                  client — you receive one-on-one attention, expert advice tailored to your skin type and features,
                  and a warm, hygienic environment that puts you completely at ease.
                </p>
                <p>
                  Over the years, she has expanded her expertise to include advanced machine treatments — hydra
                  facials, laser hair removal, tattoo removal, and more — ensuring that her clients in Vijayawada
                  have access to the latest in safe, professional-grade beauty technology.
                </p>
                <p>
                  From bridal makeup for weddings across Andhra Pradesh to everyday facials and skin care for her
                  loyal regular clients in PNT Colony, every service is delivered with the same philosophy: quality
                  products, meticulous hygiene, and a genuine desire to make you shine.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-gradient-to-r from-primary to-primary-dark">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {stats.map((stat, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="text-center">
                  <div className="font-serif text-3xl sm:text-4xl font-bold text-white">{stat.value}</div>
                  <div className="text-white/70 text-sm mt-1 font-medium">{stat.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy / Pillars */}
      <section className="py-20 lg:py-28 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading subtitle="Our Approach">
            The <span className="text-primary italic">Shine</span> Philosophy
          </SectionHeading>

          <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
            {pillars.map((pillar, i) => {
              const Icon = pillar.icon
              return (
                <ScrollReveal key={pillar.title} delay={i * 0.08}>
                  <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gold/10 h-full">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center mb-5">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-serif text-xl font-bold text-charcoal mb-3">{pillar.title}</h3>
                    <p className="text-charcoal-light text-sm sm:text-base leading-relaxed">{pillar.description}</p>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading subtitle="Our Journey">
            A Legacy of <span className="text-primary italic">Beauty</span> & Trust
          </SectionHeading>

          <div className="relative">
            <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/20 via-secondary/40 to-gold/20" />
            <div className="space-y-10">
              {timeline.map((item, i) => (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <div className="relative pl-12 sm:pl-16">
                    <div className="absolute left-2.5 sm:left-4.5 top-1 w-3 h-3 rounded-full bg-primary border-2 border-white shadow-md" />
                    <h3 className="font-serif text-lg font-bold text-primary mb-1">{item.period}</h3>
                    <p className="text-charcoal-light text-sm sm:text-base leading-relaxed">{item.description}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          <ScrollReveal>
            <p className="text-center text-xs text-charcoal-light/60 mt-8 italic">
              Timeline is illustrative — exact years can be updated by the business owner.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Work Highlight Gallery Strip */}
      <section className="py-16 lg:py-20 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-10">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-charcoal">
                A Glimpse of Our <span className="text-primary italic">Work</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 sm:gap-3">
            {glimpsePhotos.map((photo, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <div className="aspect-square rounded-xl overflow-hidden border border-gold/10">
                  <img src={photo.src} alt={photo.alt} className="w-full h-full object-cover" loading="lazy" />
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="text-center mt-8">
              <Link
                to="/gallery"
                className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-semibold transition-colors group"
              >
                See Full Gallery
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <CTABanner headline="Book a Consultation with Subhashini" />
    </PageTransition>
  )
}
