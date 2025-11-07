import React, { useState } from 'react'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const submit = (e) => {
    e.preventDefault()
    alert('Mensagem enviada!')
    setName('')
    setEmail('')
    setMessage('')
  }

  return (
    <div className="container section__inner">
      <h2 className="section__title">Contato</h2>
      <form className="form" onSubmit={submit}>
        <div className="form__row">
          <label className="label" htmlFor="name">Nome</label>
          <input id="name" className="input" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className="form__row">
          <label className="label" htmlFor="email">Email</label>
          <input id="email" type="email" className="input" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="form__row">
          <label className="label" htmlFor="message">Mensagem</label>
          <textarea id="message" className="input input--textarea" rows="5" value={message} onChange={(e) => setMessage(e.target.value)} required />
        </div>
        <button type="submit" className="button button--primary">Enviar</button>
      </form>
    </div>
  )
}
