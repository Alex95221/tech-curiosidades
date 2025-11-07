import React from 'react'

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <a className="brand" href="#home">Tech Curiosidades</a>
        <nav className="nav">
          <a className="nav__link" href="#home">Início</a>
          <a className="nav__link" href="#about">Sobre</a>
          <a className="nav__link" href="#products">Produtos</a>
          <a className="nav__link" href="#contact">Contato</a>
        </nav>
      </div>
    </header>
  )
}
