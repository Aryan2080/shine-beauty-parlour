import { useEffect } from 'react'

function setMeta(name, content, attr = 'name') {
  let el = document.querySelector(`meta[${attr}="${name}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, name)
    document.head.appendChild(el)
  }
  el.content = content
}

export default function usePageMeta(title, description) {
  useEffect(() => {
    const base = 'Shine Beauty Parlour'
    const fullTitle = !title
      ? `${base} | Bridal Makeup, Beauty & Laser Hair Removal in Vijayawada`
      : title.includes(base) ? title : `${title} | ${base}`

    document.title = fullTitle

    if (description) {
      setMeta('description', description)
      setMeta('og:description', description, 'property')
    }
    setMeta('og:title', fullTitle, 'property')
    setMeta('og:type', 'website', 'property')
    setMeta('og:url', window.location.href, 'property')
  }, [title, description])
}
