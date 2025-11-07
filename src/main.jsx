import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './styles/global.css'
import './styles/layout.css'
import { HashRouter, Routes, Route } from 'react-router-dom'
import PostPage from './components/PostPage.jsx'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/post/:id" element={<PostPage />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
)
