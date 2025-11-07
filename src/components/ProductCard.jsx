import React from 'react'

export default function ProductCard({ product, onClick }) {
  const { name, category, img, desc } = product
  const fallback = 'data:image/svg+xml;utf8,\
  <svg xmlns="http://www.w3.org/2000/svg" width="800" height="450" viewBox="0 0 800 450">\
    <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">\
      <stop offset="0%" stop-color="#0b0f14"/><stop offset="100%" stop-color="#11161d"/>\
    </linearGradient></defs>\
    <rect width="800" height="450" fill="url(%23g)"/>\
    <g opacity="0.5"><circle cx="650" cy="100" r="180" fill="#243049"/><circle cx="150" cy="350" r="140" fill="#1a2436"/></g>\
    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#a6b0be" font-family="Inter, Arial" font-size="24">Imagem do Produto</text>\
  </svg>'

  const resolveImage = (val) => {
    if (!val || val === 'placeholder') return fallback
    if (/^https?:\/\//i.test(val) || val.startsWith('/')) return val
    try {
      return new URL(`../assets/${val}`, import.meta.url).href
    } catch {
      return fallback
    }
  }
  const imageSrc = resolveImage(img)

  return (
    <article className="card">
      <img src={imageSrc} alt={name} className="card__img" />
      <div className="card__body">
        <span className="badge">{category}</span>
        <h3 className="card__title">{name}</h3>
        <p className="card__text">{desc}</p>
        <div className="card__actions">
          <button className="button button--secondary" onClick={onClick}>
            Ver no Mercado Livre
          </button>
        </div>
      </div>
    </article>
  )
}
