import React from 'react'
import { useParams, Link } from 'react-router-dom'
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

export default function PostPage() {
  const { id } = useParams()
  const post = POSTS.find((p) => p.id === id)

  if (!post) {
    return (
      <div className="container section__inner" style={{ paddingTop: 96 }}>
        <h2 className="section__title">Post não encontrado</h2>
        <Link className="button" to="/">Voltar</Link>
      </div>
    )
  }

  return (
    <div className="container section__inner" style={{ paddingTop: 96 }}>
      <Link className="link" to="/">← Voltar</Link>
      <article className="card" style={{ overflow: 'hidden' }}>
        {resolveImage(post.img) && (
          <img src={resolveImage(post.img)} alt={post.title} className="card__img" />
        )}
        <div className="card__body">
          <span className="badge">{new Date(post.date).toLocaleDateString('pt-BR')}</span>
          <h1 className="title" style={{ marginTop: 8 }}>{post.title}</h1>
          <p className="lead" style={{ marginTop: 8 }}>{post.excerpt}</p>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 8 }}>
            {post.tags?.map((t) => (
              <span key={t} className="chip">#{t}</span>
            ))}
          </div>
        </div>
      </article>
    </div>
  )
}
