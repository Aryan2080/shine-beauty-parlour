import { instagramReels } from '../data/instagramReels'

function toEmbedUrl(url) {
  const clean = url.replace(/\/$/, '')
  return `${clean}/embed`
}

export default function InstagramEmbeds() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 justify-items-center">
      {instagramReels.map((url) => (
        <div
          key={url}
          className="w-full max-w-[400px] rounded-2xl overflow-hidden border border-gold/20 shadow-md bg-white"
        >
          <iframe
            src={toEmbedUrl(url)}
            className="w-full block"
            style={{ height: '640px' }}
            loading="lazy"
            allow="encrypted-media; picture-in-picture; web-share"
            allowFullScreen
            scrolling="no"
            title="Instagram reel"
          />
        </div>
      ))}
    </div>
  )
}
