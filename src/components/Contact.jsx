import React, { useState } from 'react'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [botField, setBotField] = useState('')

  const submit = (e) => {
    e.preventDefault()
    const formName = 'contact'
    const data = {
      'form-name': formName,
      name,
      email,
      message,
      'bot-field': botField,
    }

    const body = new URLSearchParams(data).toString()

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body,
    })
      .then(() => {
        setName('')
        setEmail('')
        setMessage('')
        setBotField('')
        window.location.assign('/thanks')
      })
      .catch(() => alert('Falha ao enviar. Tente novamente.'))
  }

  return (
    <div className="container section__inner">
      <h2 className="section__title">Contato</h2>
      <form
        className="form"
        name="contact"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        onSubmit={submit}
      >
        <input type="hidden" name="form-name" value="contact" />
        <p style={{ display: 'none' }}>
          <label>
            Não preencha: <input name="bot-field" value={botField} onChange={(e) => setBotField(e.target.value)} />
          </label>
        </p>
        <div className="form__row">
          <label className="label" htmlFor="name">Nome</label>
          <input id="name" name="name" className="input" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className="form__row">
          <label className="label" htmlFor="email">Email</label>
          <input id="email" name="email" type="email" className="input" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="form__row">
          <label className="label" htmlFor="message">Mensagem</label>
          <textarea id="message" name="message" className="input input--textarea" rows="5" value={message} onChange={(e) => setMessage(e.target.value)} required />
        </div>
        <div data-netlify-recaptcha="true" style={{ marginBottom: 12 }}></div>
        <button type="submit" className="button button--primary">Enviar</button>
      </form>
    </div>
  )
}
