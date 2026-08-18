import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import EscapadaNaturaleza from './pages/EscapadaNaturaleza/EscapadaNaturaleza.jsx'
import Home from './pages/Home/Home.jsx'
import Labs from './pages/Labs/Labs.jsx'

// Al navegar, si la URL trae un #ancla hacemos scroll suave hacia ella;
// si no, subimos al tope. Reemplaza el scroll-restoration nativo del HTML original.
function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
        return
      }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])

  // Meta Pixel: el snippet del <head> ya dispara el PageView de la carga inicial.
  // Al ser una SPA, las navegaciones entre rutas no recargan la página, así que
  // registramos un PageView adicional en cada cambio de ruta (saltando el primero).
  const firstLoad = useRef(true)
  useEffect(() => {
    if (firstLoad.current) {
      firstLoad.current = false
      return
    }
    if (window.fbq) window.fbq('track', 'PageView')
  }, [pathname])

  return null
}

export default function App() {
  return (
    <>
      <ScrollManager />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/escapada" element={<EscapadaNaturaleza />} />
        <Route path="/labs" element={<Labs />} />
      </Routes>
    </>
  )
}
