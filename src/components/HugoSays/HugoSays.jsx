import Reveal from '../Reveal/Reveal.jsx'
import styles from './HugoSays.module.css'
import hugoImg from '../../assets/hugo/hugo.png'

/**
 * Intervención de Hugo: tarjeta con ilustración + "Hugo dice…" + una frase breve.
 * Fondo sutilmente distinto para destacarla sin interrumpir la lectura.
 * Reutilizable en Home, LABs, Escapada, Sobre Bono, etc.
 *
 * @param {string} quote  la frase de Hugo (1–2 líneas).
 * @param {'light'|'dark'} tone  paleta según el fondo de la sección.
 */
export default function HugoSays({ quote, tone = 'light', tight = false }) {
  return (
    <div className={`${styles.wrap} ${tight ? styles.tight : ''}`}>
      <Reveal className={`${styles.card} ${tone === 'dark' ? styles.dark : ''}`}>
        <img className={styles.avatar} src={hugoImg} alt="Hugo" />
        <div className={styles.text}>
          <p className={styles.label}>Hugo dice…</p>
          <p className={styles.quote}>{quote}</p>
        </div>
      </Reveal>
    </div>
  )
}
