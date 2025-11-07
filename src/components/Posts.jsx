import React from 'react'
import { Link } from 'react-router-dom'
import { POSTS } from '../data/posts'

function resolveImage(val) {
  if (!val) return null
  if (/^https?:\/\//i.test(val) || val.startsWith('/')) return val
  try {
    return new URL(`../assets/${val}`, import.meta.url).href
  } catch {
    return null
  }
}

export default function Posts() {
  return (
    <div className="container section__inner">
      <h2 className="section__title">Posts recentes</h2>
      <div className="grid grid--cards">
        {POSTS.map((p) => (
          <article key={p.id} className="card">
            {resolveImage(p.img) && (
              <img src={resolveImage(p.img)} alt={p.title} className="card__img" />
            )}
            <div className="card__body">
              <span className="badge">{new Date(p.date).toLocaleDateString('pt-BR')}</span>
              <h3 className="card__title">{p.title}</h3>
              <p className="card__text">{p.excerpt}</p>
              <div className="card__actions" style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                {p.tags?.map((t) => (
                  <span key={t} className="chip">#{t}</span>
                ))}
                <Link className="button button--secondary" to={`/post/${p.id}`}>Ler mais</Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
