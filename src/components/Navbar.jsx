import React from 'react'

export default function Navbar() {
  const scrollTo = (id) => (e) => {
    e.preventDefault()
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }
  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <a className="brand" href="#" onClick={scrollTo('home')}>Tech Curiosidades</a>
        <nav className="nav">
          <a className="nav__link" href="#" onClick={scrollTo('home')}>Início</a>
          <a className="nav__link" href="#" onClick={scrollTo('about')}>Sobre</a>
          <a className="nav__link" href="#" onClick={scrollTo('posts')}>Posts</a>
          <a className="nav__link" href="#" onClick={scrollTo('products')}>Produtos</a>
          <a className="nav__link" href="#" onClick={scrollTo('contact')}>Contato</a>
        </nav>
      </div>
    </header>
  )
}
