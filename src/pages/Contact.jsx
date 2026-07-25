import { useState } from 'react'
import { Phone, MessageCircle, Mail, MapPin, Clock, Camera, Navigation } from 'lucide-react'
import { siteConfig } from '../data/siteConfig'
import { serviceCategories } from '../data/services'
import usePageMeta from '../hooks/usePageMeta'
import ScrollReveal from '../components/ScrollReveal'
import SectionHeading from '../components/SectionHeading'
import PageTransition from '../components/PageTransition'

export default function Contact() {
  usePageMeta('Contact & Booking', 'Book an appointment at Shine Beauty Parlour, Vijayawada. Call +91 74168 15516, WhatsApp us, or fill out our booking form. Open Mon–Sun, 10 AM – 9 PM.')
  const [form, setForm] = useState({
    name: '',
    phone: '',
    service: '',
    date: '',
    message: '',
  })
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  const validate = () => {
    const newErrors = {}
    if (!form.name.trim()) newErrors.name = 'Please enter your name'
    if (!form.phone.trim()) newErrors.phone = 'Please enter your phone number'
    else if (!/^[0-9+\-\s()]{7,15}$/.test(form.phone.trim())) newErrors.phone = 'Please enter a valid phone number'
    if (!form.service) newErrors.service = 'Please select a service'
    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = validate()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }
    const lines = [
      `Hi, I'd like to book an appointment at Shine Beauty Parlour.`,
      ``,
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Service: ${form.service}`,
    ]
    if (form.date) lines.push(`Preferred Date: ${form.date}`)
    if (form.message) lines.push(`Message: ${form.message}`)
    const text = encodeURIComponent(lines.join('\n'))
    window.open(`https://wa.me/${siteConfig.whatsapp}?text=${text}`, '_blank')
  }

  const inputClasses = (field) =>
    `w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary ${
      errors[field] ? 'border-red-400 bg-red-50/50' : 'border-gold/15 bg-ivory hover:border-secondary/40'
    }`

  return (
    <PageTransition>
      {/* Page Hero */}
      <section className="pt-28 pb-16 lg:pt-36 lg:pb-20 bg-gradient-to-b from-blush to-ivory">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <span className="text-secondary font-medium tracking-widest uppercase text-sm">Get in Touch</span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-charcoal mt-3">
              Book Your <span className="text-primary italic">Appointment</span>
            </h1>
            <p className="text-charcoal-light mt-4 text-lg sm:text-xl max-w-2xl mx-auto">
              Ready to shine? Fill out the form and we'll connect with you on WhatsApp to confirm your appointment.
            </p>
            <div className="gold-divider mt-6" />
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-10 lg:gap-12">
            {/* Booking Form */}
            <ScrollReveal direction="left" className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="bg-ivory rounded-3xl p-6 sm:p-8 border border-gold/10">
                <h2 className="font-serif text-2xl font-bold text-charcoal mb-6">Book an Appointment</h2>

                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-1.5">Your Name *</label>
                    <input type="text" id="name" name="name" value={form.name} onChange={handleChange} placeholder="Enter your full name" className={inputClasses('name')} />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-charcoal mb-1.5">Phone Number *</label>
                    <input type="tel" id="phone" name="phone" value={form.phone} onChange={handleChange} placeholder="Your phone number" className={inputClasses('phone')} />
                    {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-charcoal mb-1.5">Service Interested In *</label>
                    <select id="service" name="service" value={form.service} onChange={handleChange} className={inputClasses('service')}>
                      <option value="">Select a service</option>
                      {serviceCategories.map((s) => (
                        <option key={s.id} value={s.title}>{s.title}</option>
                      ))}
                    </select>
                    {errors.service && <p className="text-red-500 text-xs mt-1">{errors.service}</p>}
                  </div>
                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-charcoal mb-1.5">Preferred Date</label>
                    <input type="date" id="date" name="date" value={form.date} onChange={handleChange} className={inputClasses('date')} />
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-1.5">Message (optional)</label>
                  <textarea id="message" name="message" value={form.message} onChange={handleChange} rows="3" placeholder="Any specific requirements or questions..." className={inputClasses('message') + ' resize-none'} />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-3.5 rounded-full font-semibold transition-all hover:shadow-lg hover:-translate-y-0.5"
                >
                  <MessageCircle className="w-5 h-5" />
                  Send via WhatsApp
                </button>
              </form>
            </ScrollReveal>

            {/* Contact Info */}
            <ScrollReveal direction="right" delay={0.1} className="lg:col-span-2">
              <div className="space-y-6">
                <div className="bg-ivory rounded-3xl p-6 border border-gold/10">
                  <h3 className="font-serif text-lg font-bold text-charcoal mb-4">Contact Details</h3>
                  <div className="space-y-4">
                    <a href={`tel:${siteConfig.phoneTel}`} className="flex items-start gap-3 group">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                        <Phone className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-xs text-secondary font-medium">Call Us</div>
                        <div className="text-sm font-semibold text-charcoal group-hover:text-primary transition-colors">{siteConfig.phone}</div>
                      </div>
                    </a>

                    <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 group">
                      <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center shrink-0">
                        <MessageCircle className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <div className="text-xs text-secondary font-medium">WhatsApp</div>
                        <div className="text-sm font-semibold text-charcoal group-hover:text-green-600 transition-colors">Message Us</div>
                      </div>
                    </a>

                    <a href={`mailto:${siteConfig.email}`} className="flex items-start gap-3 group">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                        <Mail className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-xs text-secondary font-medium">Email</div>
                        <div className="text-sm font-semibold text-charcoal group-hover:text-primary transition-colors break-all">{siteConfig.email}</div>
                      </div>
                    </a>

                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                        <MapPin className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-xs text-secondary font-medium">Visit Us</div>
                        <div className="text-sm text-charcoal">{siteConfig.address}</div>
                        <div className="text-sm text-charcoal-light">{siteConfig.locality}, {siteConfig.state} {siteConfig.pincode}</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                        <Clock className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-xs text-secondary font-medium">Working Hours</div>
                        <div className="text-sm font-semibold text-charcoal">{siteConfig.workingHours}</div>
                        <div className="text-xs text-secondary">{siteConfig.workingHoursShort}</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-ivory rounded-3xl p-6 border border-gold/10">
                  <h3 className="font-serif text-lg font-bold text-charcoal mb-3">Follow Us</h3>
                  <div className="flex gap-3">
                    <a
                      href={siteConfig.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-11 h-11 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white hover:shadow-lg hover:-translate-y-0.5 transition-all"
                      aria-label="Follow on Instagram"
                    >
                      <Camera className="w-5 h-5" />
                    </a>
                    <a
                      href={`https://wa.me/${siteConfig.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-11 h-11 rounded-xl bg-green-500 flex items-center justify-center text-white hover:shadow-lg hover:-translate-y-0.5 transition-all"
                      aria-label="Chat on WhatsApp"
                    >
                      <MessageCircle className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                {/* Get Directions */}
                <a
                  href={siteConfig.googleMapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-charcoal hover:bg-charcoal/90 text-white py-3.5 rounded-2xl font-semibold transition-colors w-full"
                >
                  <Navigation className="w-5 h-5" />
                  Get Directions on Google Maps
                </a>

                {/* Map Placeholder */}
                <div className="bg-ivory rounded-3xl overflow-hidden border border-gold/10 aspect-video flex items-center justify-center">
                  <div className="text-center p-6">
                    <MapPin className="w-10 h-10 text-primary/30 mx-auto mb-2" />
                    <p className="text-primary/50 text-sm font-medium">[EMBED GOOGLE MAP HERE]</p>
                    <p className="text-primary/40 text-xs mt-1">Replace with Google Maps iframe</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
