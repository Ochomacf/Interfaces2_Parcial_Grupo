import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const rutas={
  "/principal":"Principal",
  "/login":"Login",
  "/administracion":"Administracion",
  "/menu":"Menu",
  "/reservas":"Reservas"
}

const pagina= rutas[window.location.pathname]
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App pagina={pagina} />
  </StrictMode>,
)

