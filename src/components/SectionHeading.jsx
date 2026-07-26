import ScrollReveal from './ScrollReveal'

export default function SectionHeading({ subtitle, children, description, variant = 'light' }) {
  const isDark = variant === 'dark'
  return (
    <ScrollReveal>
      <div className="text-center mb-14 lg:mb-16">
        {subtitle && (
          <span className={`font-medium tracking-widest uppercase text-sm ${isDark ? 'text-gold' : 'text-secondary'}`}>
            {subtitle}
          </span>
        )}
        <h2 className={`font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mt-2 ${isDark ? 'text-blush' : 'text-charcoal'}`}>
          {children}
        </h2>
        {description && (
          <p className={`mt-4 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed ${isDark ? 'text-blush/80' : 'text-charcoal-light'}`}>
            {description}
          </p>
        )}
        <div className="gold-divider mt-5" />
      </div>
    </ScrollReveal>
  )
}
