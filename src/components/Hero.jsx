import React from 'react'

export default function Hero() {
  const handleScroll = (e) => {
    e.preventDefault()
    const el = document.querySelector('#products')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="hero container">
      <div className="hero__content">
        <h1 className="title">Curiosidades de Tecnologia</h1>
        <p className="subtitle">Descubra fatos rápidos e interessantes sobre o mundo tech: inovações, história e tendências — em leitura leve e direta.</p>
        <div className="hero__actions">
          <a href="#products" onClick={handleScroll} className="button button--primary">Ver Recomendações</a>
        </div>
      </div>
    </div>
  )
}
