import React from 'react'

const ITEMS = [
  {
    title: 'O primeiro bug de software',
    text: 'Em 1947, um inseto preso em um computador Mark II originou o termo “bug”.',
    img: 'curiosity-ai.svg',
  },
  {
    title: 'E-mail é mais antigo que a web',
    text: 'O e-mail surgiu nos anos 1970; a web, apenas em 1991 por Tim Berners-Lee.',
    img: 'curiosity-email.svg',
  },
  {
    title: '1 GB no bolso',
    text: 'Um cartão SD de 1 GB hoje é minúsculo; em 1980, 1 GB exigia um disco de 250 kg.',
    img: 'curiosity-storage.svg',
  },
  {
    title: 'Lei de Moore',
    text: 'Por décadas, a capacidade dos chips dobrou a cada ~2 anos, impulsionando a computação.',
    img: 'curiosity-moore.svg',
  },
  {
    title: 'Primeiro smartphone',
    text: 'O IBM Simon (1994) já tinha tela touch, e-mail e apps simples.',
    img: 'curiosity-smartphone.svg',
  },
  {
    title: 'Satélites por todo lado',
    text: 'Milhares de satélites em órbita viabilizam GPS, internet e comunicações globais.',
    img: 'curiosity-satellite.svg',
  },
  {
    title: 'Senha mais usada do mundo',
    text: '“123456” segue no topo de senhas fracas — sempre use gerenciadores e 2FA.',
    img: 'curiosity-ai.svg',
  },
  {
    title: 'O primeiro site da história',
    text: 'Em 1991, o CERN publicou a primeira página da web explicando o próprio projeto.',
    img: 'curiosity-email.svg',
  },
  {
    title: 'Containers ganharam o mundo',
    text: 'Docker popularizou microserviços e portabilidade com imagens leves e isoladas.',
    img: 'curiosity-storage.svg',
  },
  {
    title: 'Bluetooth tem nome viking',
    text: 'Homenagem a Harald “Bluetooth” Gormsson, rei que unificou tribos na Dinamarca.',
    img: 'curiosity-moore.svg',
  },
  {
    title: 'Primeiro upload do YouTube',
    text: '“Me at the zoo”, 2005, foi o primeiro vídeo publicado na plataforma.',
    img: 'curiosity-smartphone.svg',
  },
  {
    title: 'Emoji nasceu no Japão',
    text: 'Criados nos anos 1990, os primeiros emojis tinham 12×12 pixels e eram monocromáticos.',
    img: 'curiosity-satellite.svg',
  },
]

export default function Curiosities() {
  const fallback = 'data:image/svg+xml;utf8,\
  <svg xmlns="http://www.w3.org/2000/svg" width="800" height="450" viewBox="0 0 800 450">\
    <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">\
      <stop offset="0%" stop-color="#0b0f14"/><stop offset="100%" stop-color="#11161d"/>\
    </linearGradient></defs>\
    <rect width="800" height="450" fill="url(%23g)"/>\
    <g opacity="0.5"><circle cx="650" cy="100" r="180" fill="#243049"/><circle cx="150" cy="350" r="140" fill="#1a2436"/></g>\
    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#a6b0be" font-family="Inter, Arial" font-size="24">Curiosidade Tech</text>\
  </svg>'

  const resolveImage = (val) => {
    if (!val) return fallback
    if (/^https?:\/\//i.test(val) || val.startsWith('/')) return val
    try {
      return new URL(`../assets/${val}`, import.meta.url).href
    } catch {
      return fallback
    }
  }
  return (
    <div className="container section__inner">
      <h2 className="section__title">Curiosidades Tech</h2>
      <div className="grid grid--cards">
        {ITEMS.map((item, idx) => (
          <article key={idx} className="card">
            <img src={resolveImage(item.img)} alt={item.title} className="card__img" />
            <div className="card__body">
              <h3 className="card__title">{item.title}</h3>
              <p className="card__text">{item.text}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
