import { Link } from 'react-router-dom'
import styles from './Footer.module.css'

/**
 * Pie compartido. `subtitle` permite ajustar la línea de copyright por página.
 */
export default function Footer({ subtitle = 'Escapada Naturaleza · Chapadmalal 2026' }) {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
        <div className={styles.top}>
          <Link to="/" className={styles.brand}>
            Práctica Constante
          </Link>
          <nav className={styles.social} aria-label="Pie">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.iconLink}
              aria-label="Instagram"
            >
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" aria-hidden="true">
                <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" stroke="currentColor" strokeWidth="1.8" />
                <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.8" />
                <circle cx="17.4" cy="6.6" r="1.2" fill="currentColor" />
              </svg>
            </a>
            <a
              href="https://www.tiktok.com/@practica.constante"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.iconLink}
              aria-label="TikTok"
            >
              <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true">
                <path d="M16.5 3h-2.7v12.1a2.6 2.6 0 1 1-2.6-2.6c.2 0 .5 0 .7.1V9.8a5.5 5.5 0 1 0 4.6 5.4V8.9a6.7 6.7 0 0 0 3.9 1.2V7.4a3.9 3.9 0 0 1-3.9-4.4z" />
              </svg>
            </a>
          </nav>
        </div>
        <p className={styles.copy}>
          © {year} Práctica Constante · {subtitle}.
        </p>
      </footer>
  )
}
