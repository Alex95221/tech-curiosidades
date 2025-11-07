import React, { useEffect, useMemo, useState } from 'react'
import { PRODUCTS } from '../data/products'
import ProductCard from './ProductCard'

function slugify(str) {
  return str
    .toLowerCase()
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

export default function ProductList() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('tudo')

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return PRODUCTS.filter((p) => {
      const matchQuery = !q || p.name.toLowerCase().includes(q)
      const matchCat = category === 'tudo' || p.category === category
      return matchQuery && matchCat
    })
  }, [query, category])

  useEffect(() => {
    if (!localStorage.getItem('tc_clicks')) {
      localStorage.setItem('tc_clicks', JSON.stringify({}))
    }
  }, [])

  const handleClick = (product) => {
    const clicks = JSON.parse(localStorage.getItem('tc_clicks') || '{}')
    const key = slugify(product.name)
    clicks[key] = (clicks[key] || 0) + 1
    localStorage.setItem('tc_clicks', JSON.stringify(clicks))
    window.open(product.link, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="container section__inner">
      <h2 className="section__title">Recomendações de Produtos</h2>

      <div className="filters">
        <input
          type="text"
          placeholder="Buscar por nome..."
          className="input"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          aria-label="Busca por nome"
        />
        <div className="select-group" role="group" aria-label="Filtro de categoria">
          {['tudo', 'notebook', 'smartphone', 'cozinha', 'pet'].map((cat) => (
            <button
              key={cat}
              className={`chip ${category === cat ? 'chip--active' : ''}`}
              onClick={() => setCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid--cards">
        {filtered.map((p) => (
          <ProductCard key={p.name} product={p} onClick={() => handleClick(p)} />)
        )}
      </div>

      {filtered.length === 0 && (
        <p className="muted">Nenhum produto encontrado.</p>
      )}
    </div>
  )
}
