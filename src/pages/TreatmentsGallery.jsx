import { useState, useCallback, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight, Play, Camera } from 'lucide-react'
import usePageMeta from '../hooks/usePageMeta'
import ScrollReveal from '../components/ScrollReveal'
import CTABanner from '../components/CTABanner'
import PageTransition from '../components/PageTransition'

import earPiercingImg from '../assets/ear-piercing-gunshot.jpeg'
import earLobeTreatmentImg from '../assets/ear-lobe-treatment.jpeg'

const categories = ['All', 'Ear Piercing', 'Ear Lobe Treatment', 'Machinery Treatments in Action']

const photoItems = [
  { id: 1, category: 'Ear Piercing', type: 'photo', image: earPiercingImg, alt: 'Professional ear piercing service using sterilized piercing gun at Shine Beauty Parlour Vijayawada', caption: 'Ear Piercing with Sterilized Gun' },
  { id: 2, category: 'Ear Lobe Treatment', type: 'photo', image: earLobeTreatmentImg, alt: 'Ear lobe treatment before and after results at Shine Beauty Parlour Vijayawada', caption: 'Ear Lobe Treatment — Before & After' },
]

const videoItems = [
  { id: 3, category: 'Machinery Treatments in Action', type: 'video', src: '/videos/hydra-facial-treatment.mp4', caption: 'Hydra Facial Treatment' },
  { id: 4, category: 'Machinery Treatments in Action', type: 'video', src: '/videos/karbon-peel-treatment.mp4', caption: 'Karbon Peel Treatment' },
  { id: 5, category: 'Machinery Treatments in Action', type: 'video', src: '/videos/laser-hair-removal-treatment.mp4', caption: 'Unwanted Hair Removal Laser Treatment' },
  { id: 6, category: 'Machinery Treatments in Action', type: 'video', src: '/videos/tattoo-removal-treatment.mp4', caption: 'Tattoo Removal Treatment' },
  { id: 7, category: 'Machinery Treatments in Action', type: 'video', src: '/videos/warts-removal-treatment.mp4', caption: 'Warts Removal Treatment' },
]

const allItems = [...photoItems, ...videoItems]

const gridColors = [
  'from-primary/15 to-secondary/10',
  'from-secondary/15 to-gold/10',
  'from-gold/15 to-primary/10',
]

export default function TreatmentsGallery() {
  usePageMeta('Laser Treatment, Tattoo Removal & Ear Piercing Before/After Gallery', 'See real results of laser hair removal, tattoo removal, ear piercing, and advanced skin treatments performed at Shine Beauty Parlour, Vijayawada\'s trusted clinic for 15+ years.')

  const [activeCategory, setActiveCategory] = useState('All')
  const [lightboxIndex, setLightboxIndex] = useState(null)

  const filtered = activeCategory === 'All' ? allItems : allItems.filter(item => item.category === activeCategory)

  const openLightbox = (index) => setLightboxIndex(index)
  const closeLightbox = useCallback(() => setLightboxIndex(null), [])

  const goPrev = useCallback(() => {
    setLightboxIndex(prev => (prev > 0 ? prev - 1 : filtered.length - 1))
  }, [filtered.length])

  const goNext = useCallback(() => {
    setLightboxIndex(prev => (prev < filtered.length - 1 ? prev + 1 : 0))
  }, [filtered.length])

  useEffect(() => {
    if (lightboxIndex === null) return
    const handler = (e) => {
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowLeft') goPrev()
      if (e.key === 'ArrowRight') goNext()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [lightboxIndex, closeLightbox, goPrev, goNext])

  return (
    <PageTransition>
      <section className="pt-28 pb-16 lg:pt-36 lg:pb-20 bg-gradient-to-b from-blush to-ivory">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <span className="text-secondary font-medium tracking-widest uppercase text-sm">Real Results</span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-charcoal mt-3">
              Treatments <span className="text-primary italic">Gallery</span>
            </h1>
            <p className="text-charcoal-light mt-4 text-lg sm:text-xl max-w-2xl mx-auto">
              Real results from real clients at Shine Beauty Parlour — see our advanced treatments in action.
            </p>
            <div className="gold-divider mt-6" />
          </ScrollReveal>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => { setActiveCategory(cat); setLightboxIndex(null) }}
                  className={`px-4 sm:px-5 py-2.5 min-h-[44px] rounded-full text-sm font-medium transition-all ${
                    activeCategory === cat
                      ? 'bg-primary text-white shadow-md'
                      : 'bg-white text-charcoal-light border border-gold/15 hover:border-primary/30 hover:text-charcoal'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </ScrollReveal>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4"
            >
              {filtered.map((item, i) => (
                <ScrollReveal key={item.id} delay={i * 0.05}>
                  <button
                    onClick={() => openLightbox(i)}
                    className="group relative aspect-square rounded-2xl overflow-hidden border border-gold/10 hover:shadow-lg transition-all duration-300 w-full"
                  >
                    {item.type === 'photo' ? (
                      <img src={item.image} alt={item.alt} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
                    ) : (
                      <div className={`absolute inset-0 bg-gradient-to-br ${gridColors[i % gridColors.length]}`}>
                        <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                          <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mb-2">
                            <Play className="w-7 h-7 text-primary fill-primary/30" />
                          </div>
                          <p className="text-primary/70 text-xs font-medium text-center">{item.caption}</p>
                        </div>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/30 transition-colors flex items-center justify-center">
                      {item.type === 'video' ? (
                        <Play className="w-10 h-10 text-white opacity-0 group-hover:opacity-100 transition-opacity fill-white/30" />
                      ) : (
                        <Camera className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                      )}
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-charcoal/60 to-transparent p-3 pt-6">
                      <p className="text-white text-xs font-medium truncate">{item.caption}</p>
                    </div>
                  </button>
                </ScrollReveal>
              ))}
            </motion.div>
          </AnimatePresence>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <Camera className="w-12 h-12 text-primary/30 mx-auto mb-4" />
              <p className="text-charcoal-light">No items in this category yet.</p>
            </div>
          )}
        </div>
      </section>

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
              className="relative max-w-4xl max-h-[80vh] w-full rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {filtered[lightboxIndex].type === 'photo' ? (
                <img
                  src={filtered[lightboxIndex].image}
                  alt={filtered[lightboxIndex].alt}
                  className="w-full h-full object-contain bg-black max-h-[80vh]"
                />
              ) : (
                <video
                  src={filtered[lightboxIndex].src}
                  controls
                  autoPlay
                  className="w-full max-h-[80vh] bg-black"
                  controlsList="nodownload"
                >
                  Your browser does not support the video tag.
                </video>
              )}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-charcoal/80 to-transparent p-4 pt-8">
                <p className="text-white text-sm font-medium">{filtered[lightboxIndex].caption}</p>
              </div>
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

      <CTABanner headline="Book Your Treatment Consultation" compact />
    </PageTransition>
  )
}
