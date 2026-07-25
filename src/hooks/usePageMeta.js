import { useEffect } from 'react'

export default function usePageMeta(title, description) {
  useEffect(() => {
    const base = 'Shine Beauty Parlour'
    document.title = title ? `${title} | ${base}` : `${base} | Bridal Makeup, Beauty & Laser Hair Removal in Vijayawada`

    if (description) {
      let meta = document.querySelector('meta[name="description"]')
      if (!meta) {
        meta = document.createElement('meta')
        meta.name = 'description'
        document.head.appendChild(meta)
      }
      meta.content = description
    }
  }, [title, description])
}
