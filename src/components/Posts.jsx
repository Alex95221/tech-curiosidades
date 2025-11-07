import React, { useMemo, useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
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
  const location = useLocation()
  const navigate = useNavigate()
  const searchParams = new URLSearchParams(location.search)
  const initialPage = Math.max(1, parseInt(searchParams.get('p') || '1', 10))
  const [page, setPage] = useState(initialPage)
  const perPage = 6
  const totalPages = Math.max(1, Math.ceil(POSTS.length / perPage))

  useEffect(() => {
    if (page > totalPages) setPage(totalPages)
  }, [totalPages, page])

  useEffect(() => {
    const params = new URLSearchParams(location.search)
    const current = Math.max(1, parseInt(params.get('p') || '1', 10))
    if (current !== page) {
      params.set('p', String(page))
      navigate({ pathname: '/', search: `?${params.toString()}` }, { replace: true })
    }
    const el = document.getElementById('posts')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }, [page])

  const items = useMemo(() => {
    const start = (page - 1) * perPage
    return POSTS.slice(start, start + perPage)
  }, [page])

  const next = () => setPage((p) => Math.min(totalPages, p + 1))
  const prev = () => setPage((p) => Math.max(1, p - 1))

  return (
    <div className="container section__inner">
      <h2 className="section__title">Posts recentes</h2>
      <div className="grid grid--cards">
        {items.map((p) => (
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
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, justifyContent: 'center', marginTop: 12 }}>
        <button className="button" onClick={prev} disabled={page === 1}>Anterior</button>
        <span className="muted">Página {page} de {totalPages}</span>
        <button className="button" onClick={next} disabled={page === totalPages}>Próximo</button>
      </div>
    </div>
  )
}
