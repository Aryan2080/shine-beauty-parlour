import ScrollReveal from './ScrollReveal'

export default function SectionHeading({ subtitle, children, description }) {
  return (
    <ScrollReveal>
      <div className="text-center mb-14 lg:mb-16">
        {subtitle && (
          <span className="text-secondary font-medium tracking-widest uppercase text-sm">
            {subtitle}
          </span>
        )}
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal mt-2">
          {children}
        </h2>
        {description && (
          <p className="text-charcoal-light mt-4 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            {description}
          </p>
        )}
        <div className="gold-divider mt-5" />
      </div>
    </ScrollReveal>
  )
}
