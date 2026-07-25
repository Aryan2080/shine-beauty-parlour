const provider = {
  "@type": "BeautySalon",
  "name": "Shine Beauty Parlour"
}

const servicePhone = {
  "@type": "ContactPoint",
  "telephone": "+91 7416815516"
}

export const serviceSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Salon Services",
    "provider": provider,
    "description": "Full salon services including skin care, hair care, nail care, and full body care & waxing by expert professionals in Vijayawada",
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": "https://shinebeautyparlour.com/services/salon",
      "servicePhone": servicePhone
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Bridal Makeup",
    "provider": provider,
    "description": "Professional bridal makeup, draping and makeover packages for wedding day and reception looks",
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": "https://shinebeautyparlour.com/services/bridal-makeover",
      "servicePhone": servicePhone
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Advanced Skin & Laser Treatments",
    "provider": provider,
    "description": "Professional laser hair removal, tattoo removal, hydrafacial, ear piercing, and advanced skin treatments using safe, modern equipment",
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": "https://shinebeautyparlour.com/services/advanced-treatments",
      "servicePhone": servicePhone
    }
  }
]

export function buildFaqSchema(faqItems) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  }
}

export function buildReviewSchemas(testimonials) {
  return testimonials.map(t => ({
    "@context": "https://schema.org/",
    "@type": "Review",
    "itemReviewed": {
      "@type": "BeautySalon",
      "name": "Shine Beauty Parlour"
    },
    "author": {
      "@type": "Person",
      "name": t.name
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": String(t.rating),
      "bestRating": "5",
      "worstRating": "1"
    },
    "reviewBody": t.quote
  }))
}
