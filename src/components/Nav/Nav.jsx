import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './Nav.module.css'

/**
 * Navegación fija compartida por todas las páginas.
 * - Fondo transparente que se vuelve sólido al hacer scroll.
 * - Dropdown "Experiencias".
 * - Menú móvil a pantalla completa.
 *
 * @param {string} reservarHref  destino del botón "Reservar" (por defecto ancla local).
 */
export default function Nav({ reservarHref = '#reservar' }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <header className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
        <Link to="/" className={styles.brand}>
          Práctica Constante
        </Link>

        <nav className={styles.links} aria-label="Principal">
          <div className={styles.hasDd}>
            <Link to="/#experiencias" className={styles.navlink} aria-haspopup="true">
              Experiencias{' '}
              <span className={styles.ddCaret} aria-hidden="true">
                ▾
              </span>
            </Link>
            <div className={styles.dd} role="menu">
              <Link to="/escapada" role="menuitem">
                <span className={styles.ddT}>Escapada</span>
                <span className={styles.ddD}>Cinco días en la naturaleza</span>
              </Link>
              <Link to="/labs" role="menuitem">
                <span className={styles.ddT}>LABs</span>
                <span className={styles.ddD}>Talleres inmersivos de movimiento</span>
              </Link>
            </div>
          </div>

          <Link to="/#nosotros" className={styles.navlink}>
            Nosotros
          </Link>
          <Link to="/#testimonios" className={styles.navlink}>
            Testimonios
          </Link>
          <Link to="/#contacto" className={styles.navlink}>
            Contacto
          </Link>
          <a href={reservarHref} className={styles.reservar}>
            Reservar
          </a>
        </nav>

        <button
          className={styles.burger}
          aria-label="Abrir menú"
          onClick={() => setMenuOpen(true)}
        >
          <span />
          <span />
          <span />
        </button>
      </header>

      {menuOpen && (
        <div className={styles.mobileMenu}>
          <p className={styles.mobileLabel}>Experiencias</p>
          <Link to="/escapada" className={styles.mobileExp} onClick={closeMenu}>
            Escapada
          </Link>
          <Link to="/labs" className={styles.mobileExp} onClick={closeMenu}>
            LABs
          </Link>
          <span className={styles.mobileDivider} />
          <Link to="/#nosotros" className={styles.mobileLink} onClick={closeMenu}>
            Nosotros
          </Link>
          <Link to="/#testimonios" className={styles.mobileLink} onClick={closeMenu}>
            Testimonios
          </Link>
          <Link to="/#contacto" className={styles.mobileLink} onClick={closeMenu}>
            Contacto
          </Link>
          <a href={reservarHref} className={styles.mobileReservar} onClick={closeMenu}>
            Reservar mi lugar
          </a>
          <button
            className={styles.mobileClose}
            aria-label="Cerrar menú"
            onClick={closeMenu}
          >
            ×
          </button>
        </div>
      )}
    </>
  )
}
