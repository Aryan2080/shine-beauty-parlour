import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight, Camera, ExternalLink } from 'lucide-react'
import { siteConfig } from '../data/siteConfig'
import { galleryCategories, galleryImages } from '../data/faq'
import hairMultilayerCut from '../assets/hair-multilayer-cut.jpg'
import hairStraightening1 from '../assets/hair-straightening-1.jpg'
import hairStraightening2 from '../assets/hair-straightening-2.jpg'
import partyRedSaree from '../assets/party-red-saree.jpg'
import partyGoldSaree from '../assets/party-gold-saree.jpg'
import partyGreenSaree from '../assets/party-green-saree.jpg'
import partyPurpleSaree from '../assets/party-purple-saree.jpg'
import bridalGreenSaree from '../assets/bridal-green-saree.jpg'
import bridalBlueGoldSaree from '../assets/bridal-blue-gold-saree.jpg'
import bridalGoldPinkSaree from '../assets/bridal-gold-pink-saree.jpg'
import bridalTraditionalCeremony from '../assets/bridal-traditional-ceremony.jpg'
import halfsareePinkGold from '../assets/halfsaree-pink-gold.jpg'
import halfsareeBluePink from '../assets/halfsaree-blue-pink.jpg'
import halfsareeMaroonStage from '../assets/halfsaree-maroon-stage.jpg'
import halfsareePinkFloral from '../assets/halfsaree-pink-floral.jpg'
import mehandiPeacock from '../assets/mehandi-peacock.jpg'
import mehandiLotus from '../assets/mehandi-lotus.jpg'
import nailartMaroon from '../assets/nailart-maroon.jpg'
import nailartBlackFrench from '../assets/nailart-black-french.jpg'

const galleryImageMap = {
  'hair-multilayer-cut': hairMultilayerCut,
  'hair-straightening-1': hairStraightening1,
  'hair-straightening-2': hairStraightening2,
  'party-red-saree': partyRedSaree,
  'party-gold-saree': partyGoldSaree,
  'party-green-saree': partyGreenSaree,
  'party-purple-saree': partyPurpleSaree,
  'bridal-green-saree': bridalGreenSaree,
  'bridal-blue-gold-saree': bridalBlueGoldSaree,
  'bridal-gold-pink-saree': bridalGoldPinkSaree,
  'bridal-traditional-ceremony': bridalTraditionalCeremony,
  'halfsaree-pink-gold': halfsareePinkGold,
  'halfsaree-blue-pink': halfsareeBluePink,
  'halfsaree-maroon-stage': halfsareeMaroonStage,
  'halfsaree-pink-floral': halfsareePinkFloral,
  'mehandi-peacock': mehandiPeacock,
  'mehandi-lotus': mehandiLotus,
  'nailart-maroon': nailartMaroon,
  'nailart-black-french': nailartBlackFrench,
}
import usePageMeta from '../hooks/usePageMeta'
import ScrollReveal from '../components/ScrollReveal'
import SectionHeading from '../components/SectionHeading'
import PageTransition from '../components/PageTransition'

const colors = [
  'from-primary/15 to-secondary/10',
  'from-secondary/15 to-gold/10',
  'from-gold/15 to-primary/10',
  'from-blush-dark to-blush',
  'from-primary/10 to-blush-dark',
  'from-secondary/10 to-primary/10',
]

export default function Gallery() {
  usePageMeta('Gallery', 'Browse our portfolio of bridal looks, party makeup, hair styling, saree draping, and skin care transformations at Shine Beauty Parlour, Vijayawada.')
  const [activeCategory, setActiveCategory] = useState('All')
  const [lightboxIndex, setLightboxIndex] = useState(null)

  const filtered =
    activeCategory === 'All'
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory)

  const closeLightbox = () => setLightboxIndex(null)

  const goPrev = useCallback(() => {
    if (lightboxIndex === null) return
    setLightboxIndex((prev) => (prev === 0 ? filtered.length - 1 : prev - 1))
  }, [lightboxIndex, filtered.length])

  const goNext = useCallback(() => {
    if (lightboxIndex === null) return
    setLightboxIndex((prev) => (prev === filtered.length - 1 ? 0 : prev + 1))
  }, [lightboxIndex, filtered.length])

  useEffect(() => {
    if (lightboxIndex === null) return
    const handleKey = (e) => {
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowLeft') goPrev()
      if (e.key === 'ArrowRight') goNext()
    }
    window.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [lightboxIndex, goPrev, goNext])

  return (
    <PageTransition>
      {/* Page Hero */}
      <section className="pt-28 pb-16 lg:pt-36 lg:pb-20 bg-gradient-to-b from-blush to-ivory">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <span className="text-secondary font-medium tracking-widest uppercase text-sm">Portfolio</span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-charcoal mt-3">
              Our <span className="text-primary italic">Gallery</span>
            </h1>
            <p className="text-charcoal-light mt-4 text-lg sm:text-xl max-w-2xl mx-auto">
              A showcase of bridal looks, party makeovers, styling, and more —
              each crafted with love and expertise by Subhashini.
            </p>
            <div className="gold-divider mt-6" />
          </ScrollReveal>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10">
              {galleryCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => { setActiveCategory(cat); setLightboxIndex(null) }}
                  className={`px-4 sm:px-5 py-2 rounded-full text-sm font-medium transition-all ${
                    activeCategory === cat
                      ? 'bg-primary text-white shadow-md shadow-primary/20'
                      : 'bg-blush text-charcoal-light hover:bg-blush-dark hover:text-primary'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </ScrollReveal>

          <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            <AnimatePresence mode="popLayout">
              {filtered.map((img, i) => (
                <motion.button
                  key={img.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: i * 0.03 }}
                  onClick={() => setLightboxIndex(i)}
                  className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer border border-gold/10"
                >
                  {img.image && galleryImageMap[img.image] ? (
                    <img
                      src={galleryImageMap[img.image]}
                      alt={img.alt}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  ) : (
                    <>
                      <div className={`absolute inset-0 bg-gradient-to-br ${colors[i % colors.length]}`} />
                      <div className="absolute inset-0 flex flex-col items-center justify-center p-3 text-center">
                        <Camera className="w-8 h-8 text-primary/30 mb-2" />
                        <p className="text-primary/50 text-xs sm:text-sm font-medium leading-snug">{img.placeholder}</p>
                      </div>
                    </>
                  )}
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors flex items-center justify-center">
                    <span className="text-white font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity">View</span>
                  </div>
                </motion.button>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Instagram CTA */}
          <ScrollReveal>
            <div className="text-center mt-12">
              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-semibold transition-colors"
              >
                See more on Instagram {siteConfig.instagramHandle}
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && filtered[lightboxIndex] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-charcoal/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button onClick={closeLightbox} className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white/80 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors z-10" aria-label="Close">
              <X className="w-6 h-6 sm:w-8 sm:h-8" />
            </button>
            <button onClick={(e) => { e.stopPropagation(); goPrev() }} className="absolute left-2 sm:left-6 text-white/80 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors z-10" aria-label="Previous">
              <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
            </button>

            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-4xl max-h-[80vh] w-full aspect-[4/3] rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {filtered[lightboxIndex].image && galleryImageMap[filtered[lightboxIndex].image] ? (
                <img
                  src={galleryImageMap[filtered[lightboxIndex].image]}
                  alt={filtered[lightboxIndex].alt}
                  className="absolute inset-0 w-full h-full object-contain bg-black"
                />
              ) : (
                <>
                  <div className={`absolute inset-0 bg-gradient-to-br ${colors[lightboxIndex % colors.length]}`} />
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                    <Camera className="w-16 h-16 text-primary/30 mb-4" />
                    <p className="text-primary/60 font-serif text-xl italic">{filtered[lightboxIndex].placeholder}</p>
                    <p className="text-primary/40 text-sm mt-2">{filtered[lightboxIndex].alt}</p>
                  </div>
                </>
              )}
            </motion.div>

            <button onClick={(e) => { e.stopPropagation(); goNext() }} className="absolute right-2 sm:right-6 text-white/80 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors z-10" aria-label="Next">
              <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
            </button>
            <div className="absolute bottom-4 sm:bottom-6 text-white/60 text-sm">
              {lightboxIndex + 1} / {filtered.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </PageTransition>
  )
}
