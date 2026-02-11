import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

const rootElement = document.getElementById('root')!
const app = (
  <StrictMode>
    <App />
  </StrictMode>
)

if (rootElement.children.length > 0) {
  hydrateRoot(rootElement, app)
} else {
  createRoot(rootElement).render(app)
}
