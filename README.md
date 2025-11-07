# Tech Curiosidades

Blog de Curiosidades sobre Tecnologia. Construído com Vite + React.

## Scripts
- `npm run dev` – inicia o servidor de desenvolvimento
- `npm run build` – gera build de produção em `dist/`
- `npm run preview` – pré-visualiza o build

## Stack
- Vite
- React (Hooks: useState, useEffect, useMemo)
- CSS organizado por componentes (global.css, layout.css)

## Estrutura
- `src/components` – componentes de UI (Navbar, Hero, Curiosities, ProductList, ProductCard, About, Contact)
- `src/data/products.js` – dados dos produtos
- `src/assets` – imagens do site
- `public/imagens` – assets públicos opcionais

## Deploy (Netlify)
- Build command: `npm run build`
- Publish directory: `dist`
- Config: `netlify.toml`

## SEO/UX (opcional)
- Adicionar meta tags Open Graph/Twitter em `index.html`
- Ajustar favicon e ícones em `public/`

## Licença
Projeto para fins educacionais/demonstrativos.
