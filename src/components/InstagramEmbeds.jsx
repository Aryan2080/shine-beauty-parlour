import { Play } from 'lucide-react'
import { instagramReels } from '../data/instagramReels'

const gradients = [
  'from-primary via-primary-dark to-primary',
  'from-primary-dark via-primary to-primary-dark',
  'from-secondary via-primary to-primary-dark',
  'from-primary via-secondary to-gold',
  'from-primary-dark via-primary to-secondary',
  'from-gold via-secondary to-primary',
]

function InstagramGlyph({ className = 'w-8 h-8', strokeWidth = 1.5 }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

export default function InstagramEmbeds() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
      {instagramReels.map((reel, i) => (
        <a
          key={reel.url}
          href={reel.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Watch ${reel.label} on Instagram`}
          className="group relative block aspect-[9/16] rounded-2xl overflow-hidden border border-gold/30 shadow-md hover:shadow-xl hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 transition-all"
        >
          {reel.poster ? (
            <img
              src={reel.poster}
              alt={reel.label}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover"
            />
          ) : (
            <div className={`absolute inset-0 bg-gradient-to-br ${gradients[i % gradients.length]}`}>
              <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(circle at 30% 30%, #FFD700 0%, transparent 50%)' }} />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-gold">
                <InstagramGlyph />
                <span className="font-serif text-lg italic">{reel.label}</span>
              </div>
            </div>
          )}

          <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/25 transition-colors">
            <div className="w-14 h-14 rounded-full bg-gold/90 text-charcoal flex items-center justify-center opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all shadow-lg">
              <Play className="w-6 h-6 ml-0.5 fill-charcoal" />
            </div>
          </div>

          <div className="absolute bottom-2 right-2 w-8 h-8 rounded-full bg-black/60 backdrop-blur-sm text-white flex items-center justify-center">
            <InstagramGlyph className="w-4 h-4" strokeWidth={2} />
          </div>
        </a>
      ))}
    </div>
  )
}
