import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
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
