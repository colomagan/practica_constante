import { Link } from 'react-router-dom'
import styles from './Footer.module.css'

/**
 * Pie compartido. `subtitle` permite ajustar la línea de copyright por página.
 */
export default function Footer({ subtitle = 'Escapada Naturaleza · Chapadmalal 2026' }) {
  const year = new Date().getFullYear()

  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.top}>
          <Link to="/" className={styles.brand}>
            Práctica Constante
          </Link>
          <nav className={styles.social} aria-label="Pie">
            <a href="#reservar">Instagram</a>
            <a href="#reservar">WhatsApp</a>
          </nav>
        </div>
        <p className={styles.copy}>
          © {year} Práctica Constante · {subtitle}.
        </p>
      </footer>

      <div className={styles.dev}>
        <p className={styles.devText}>
          Este sitio web fue desarrollado por{' '}
          <a
            href="https://aires-soft.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.devLink}
          >
            Aires-Soft
          </a>
        </p>
      </div>
    </>
  )
}
