import { Link } from 'react-router-dom'
import Nav from '../../components/Nav/Nav.jsx'
import Footer from '../../components/Footer/Footer.jsx'
import styles from './Labs.module.css'
import heroImg from '../../assets/labs/hero.jpg'

/**
 * Placeholder de la página LABs. Reemplazalo cuando armemos el LAB;
 * la ruta /labs ya queda registrada y los CTA del Home apuntan acá.
 */
export default function Labs() {
  return (
    <div className={styles.page}>
      <Nav reservarHref="/escapada" />
      <section className={styles.hero}>
        <div
          className={styles.heroBg}
          style={{ backgroundImage: `url(${heroImg})` }}
        />
        <div className={styles.heroScrim} />
        <div className={styles.heroInner}>
          <p className={`${styles.kicker} pcHeroReveal`} style={{ animationDelay: '0.1s' }}>
            Experiencias · LABs
          </p>
          <h1 className={`${styles.title} pcHeroReveal`} style={{ animationDelay: '0.25s' }}>
            LABs
          </h1>
          <p className={`${styles.sub} pcHeroReveal`} style={{ animationDelay: '0.45s' }}>
            Encuentros intensivos de exploración corporal y creativa.
            <br />
            Próximamente, nuevos LABs
          </p>
          <Link to="/" className={`${styles.cta} pcHeroReveal`} style={{ animationDelay: '0.62s' }}>
            Volver al inicio
          </Link>
        </div>
      </section>
      <Footer subtitle="LABs · Próximamente" />
    </div>
  )
}
