import React from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Curiosities from './components/Curiosities.jsx'
import ProductList from './components/ProductList.jsx'
import Posts from './components/Posts.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <section id="home" className="section">
          <Hero />
        </section>
        <section id="curiosities" className="section">
          <Curiosities />
        </section>
        <section id="posts" className="section">
          <Posts />
        </section>
        <section id="products" className="section">
          <ProductList />
        </section>
        <section id="about" className="section">
          <About />
        </section>
        <section id="contact" className="section">
          <Contact />
        </section>
      </main>
      <footer className="footer">
        <div className="container footer__inner">
          <p>© {new Date().getFullYear()} Tech Curiosidades. Todos os direitos reservados.</p>
          <div className="footer__social">
            <a href="#" aria-label="Instagram" className="link">Instagram</a>
            <a href="#" aria-label="YouTube" className="link">YouTube</a>
            <a href="#" aria-label="LinkedIn" className="link">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
