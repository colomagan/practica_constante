import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Nav from '../../components/Nav/Nav.jsx'
import Footer from '../../components/Footer/Footer.jsx'
import WhatsAppButton from '../../components/WhatsAppButton/WhatsAppButton.jsx'
import Reveal from '../../components/Reveal/Reveal.jsx'
import HugoSays from '../../components/HugoSays/HugoSays.jsx'
import styles from './Home.module.css'
import heroImg from '../../assets/home/hero.jpg'
import heroVideo from '../../assets/video/Recap Escapada (corto).mp4'
import testimoniosVideo from '../../assets/video/testimonios.mp4'
import testimoniosPoster from '../../assets/video/testimonios-poster.jpg'
import expEscapadasImg from '../../assets/home/exp-escapadas.jpg'
import expLabsImg from '../../assets/home/exp-labs.jpg'
import bono1 from '../../assets/home/bono-1.jpg'
import bono2 from '../../assets/home/bono-2.jpg'
import bono3 from '../../assets/home/bono-3.jpg'
import bono4 from '../../assets/home/bono-4.jpg'

const PILARES = [
  {
    titulo: 'Movimiento',
    texto: 'Fuerza, movilidad, coordinación y exploración corporal.',
  },
  {
    titulo: 'Juego',
    texto: 'Aprender desde la curiosidad y la creatividad.',
  },
  {
    titulo: 'Comunidad',
    texto: 'Crecer compartiendo experiencias.',
  },
  {
    titulo: 'Presencia',
    texto: 'Entrenar para habitar mejor el presente.',
  },
]

const EXPERIENCIAS = [
  {
    id: 'escapadas',
    etiqueta: 'Escapadas',
    img: expEscapadasImg,
    texto:
      'Experiencias en la naturaleza donde se combinan entrenamiento, movilidad, respiración, juego, caminatas, descanso y comunidad. La propuesta busca generar un corte con la vida cotidiana para reconectar con el cuerpo, el entorno y el tiempo personal.',
    cta: 'Ver próxima escapada',
    to: '/escapada',
  },
  {
    id: 'labs',
    etiqueta: 'LABs',
    img: expLabsImg,
    texto:
      'Encuentros intensivos de exploración corporal y creativa donde se trabaja movimiento, coordinación, juego, improvisación y presencia. Son experiencias inmersivas de varias horas pensadas para salir de la rutina del entrenamiento tradicional y profundizar una temática específica.',
    cta: 'Conocer próximos LABs',
    to: '/labs',
  },
]

// Collage de "Sobre Bono": distintas etapas del recorrido.
const BONO_FOTOS = [
  { img: bono1, alt: 'Bono entrenando calistenia al aire libre' },
  { img: bono2, alt: 'Bono en competencia' },
  { img: bono3, alt: 'Bono en un viaje de formación' },
  { img: bono4, alt: 'Bono en un taller grupal' },
]

export default function Home() {
  const testimoniosRef = useRef(null)
  const [testimoniosPlaying, setTestimoniosPlaying] = useState(false)

  const playTestimonios = () => {
    const v = testimoniosRef.current
    if (!v) return
    v.play()
    setTestimoniosPlaying(true)
  }

  return (
    <div className={styles.page}>
      <Nav reservarHref="/escapada" />

      {/* ===== HERO ===== */}
      <section id="top" className={styles.hero}>
        <video
          className={styles.heroBg}
          src={heroVideo}
          poster={heroImg}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />
        <div className={styles.heroScrim} />
        <div className={styles.heroInner}>
          <p className={styles.heroKicker}>Práctica Constante</p>
          <h1 className={styles.heroTitle}>
            Entrená para moverte mejor.
            <br />
            Practicá para vivir distinto.
          </h1>
          <p className={styles.heroSub}>
            El movimiento puede transformar mucho más que tu cuerpo.
          </p>
          <div className={styles.heroCtas}>
            <Link to="/escapada" className={styles.ctaPrimary}>
              Quiero participar
            </Link>
            <a href="#experiencias" className={styles.ctaSecondary}>
              Conocer las experiencias
            </a>
          </div>
        </div>
        <a href="#intro" aria-label="Bajar" className={styles.scrollDown}>
          <span className={styles.scrollCircle}>
            <span className={styles.scrollArrow} />
          </span>
        </a>
      </section>

      {/* ===== INTRO (bajada del hero) ===== */}
      <section id="intro" className={styles.introBand}>
        <Reveal as="p" className={styles.introLead}>
          En Práctica Constante creemos que entrenar no significa solamente ganar fuerza o
          mejorar una técnica. Significa desarrollar herramientas para vivir con mayor presencia,
          adaptarte a nuevos desafíos y descubrir nuevas formas de relacionarte con vos mismo y
          con los demás.
        </Reveal>
        <Reveal as="p" delay={0.1} className={styles.introText}>
          Cada clase, cada LAB y cada Escapada nace con un mismo propósito: convertir el
          movimiento en una práctica que trascienda el entrenamiento.
        </Reveal>
      </section>

      {/* ===== QUÉ NOS DIFERENCIA ===== */}
      <section className={styles.section}>
        <div className={styles.diferenciaInner}>
          <Reveal as="p" className={styles.eyebrow}>
            Qué nos diferencia
          </Reveal>
          <Reveal as="h2" delay={0.06} className={styles.h2}>
            No es un gimnasio.
            <br />
            Es una práctica.
          </Reveal>
          <Reveal delay={0.1} className={styles.diferenciaText}>
            <p className={styles.body}>
              Durante años el entrenamiento estuvo asociado únicamente al rendimiento o a la
              estética.
            </p>
            <p className={styles.body}>
              En Práctica Constante creemos que existe otra posibilidad. Una donde el movimiento
              también sea juego. Donde la exploración tenga tanto valor como el resultado. Donde
              entrenar sirva para desarrollar un cuerpo más adaptable, una mente más curiosa y una
              mejor forma de habitar la vida cotidiana.
            </p>
            <p className={styles.bodyStrong}>
              No buscamos que hagas más. Buscamos que descubras nuevas maneras de moverte,
              aprender y crecer.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ===== HUGO (tras "No es un gimnasio") ===== */}
      <HugoSays quote="Cuando dejás de entrenar para demostrar algo, empezás a descubrir todo lo que el movimiento puede enseñarte." />

      {/* ===== PILARES ===== */}
      <section className={styles.pilares}>
        <div className={styles.pilaresInner}>
          <Reveal as="p" className={styles.eyebrowPeach}>
            Nuestros pilares
          </Reveal>
          <Reveal as="h2" delay={0.06} className={styles.h2Light}>
            Cuatro maneras de
            <br />
            entender el movimiento
          </Reveal>
          <div className={styles.pilaresGrid}>
            {PILARES.map((p, i) => (
              <Reveal key={p.titulo} delay={i * 0.06} className={styles.pilarCard}>
                <span className={styles.pilarNum}>0{i + 1}</span>
                <h3 className={styles.pilarTitle}>{p.titulo}</h3>
                <p className={styles.pilarText}>{p.texto}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== EXPERIENCIAS ===== */}
      <section id="experiencias" className={styles.section}>
        <Reveal as="p" className={styles.eyebrow}>
          Experiencias
        </Reveal>
        <Reveal as="h2" delay={0.06} className={styles.h2}>
          Elegí cómo querés practicar
        </Reveal>
        <div className={styles.expGrid}>
          {EXPERIENCIAS.map((e, i) => (
            <Reveal
              as="article"
              key={e.id}
              id={e.id}
              delay={i * 0.08}
              className={styles.expCard}
            >
              <div
                className={styles.expFoto}
                style={{ backgroundImage: `url(${e.img})` }}
              >
                <span className={styles.expChip}>{e.etiqueta}</span>
              </div>
              <div className={styles.expBody}>
                <h3 className={styles.expTitle}>{e.etiqueta}</h3>
                <p className={styles.expText}>{e.texto}</p>
                <Link to={e.to} className={styles.expCta}>
                  {e.cta}
                  <span aria-hidden="true"> →</span>
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ===== FILOSOFÍA ===== */}
      <section className={styles.filosofia}>
        <div className={styles.filosofiaGlow} />
        <Reveal className={styles.filosofiaInner}>
          <p className={styles.eyebrowPeach}>Filosofía</p>
          <h2 className={styles.filosofiaTitle}>
            Los cambios importantes no suceden de un día para otro.
          </h2>
          <p className={styles.filosofiaText}>
            Se construyen a través de pequeñas acciones repetidas con intención. La práctica
            constante no busca la perfección. Busca desarrollar personas más presentes,
            adaptables y conscientes.
          </p>
        </Reveal>
      </section>

      {/* ===== SOBRE BONO ===== */}
      <section id="nosotros" className={styles.section}>
        <div className={styles.bonoGrid}>
          <Reveal className={styles.bonoText}>
            <p className={styles.eyebrow}>Sobre Bono</p>
            <h2 className={styles.h2}>El origen de la práctica</h2>
            <p className={styles.body}>
              Práctica Constante nace a partir de la evolución de Bono Caranzano como entrenador
              y explorador del movimiento. Después de años de trabajo corporal, entrenamiento y
              búsqueda personal, comenzó a cuestionar la idea del ejercicio entendido únicamente
              como rendimiento o estética.
            </p>
            <p className={styles.body}>
              Esa búsqueda lo llevó a integrar movilidad, fuerza, juego, improvisación,
              respiración y experiencias en la naturaleza dentro de una misma metodología. Así
              surge Práctica Constante: un espacio donde el movimiento se convierte en una
              herramienta de aprendizaje, presencia y transformación.
            </p>
          </Reveal>
          <Reveal delay={0.1} className={styles.bonoCollage}>
            {BONO_FOTOS.map((f, i) => (
              <img key={i} className={styles.bonoFoto} src={f.img} alt={f.alt} loading="lazy" />
            ))}
          </Reveal>
        </div>
      </section>

      {/* ===== HUGO (tras Sobre Bono) ===== */}
      <HugoSays quote="Toda práctica empieza con una pregunta." />

      {/* ===== TESTIMONIOS (video) ===== */}
      <section id="testimonios" className={styles.testimonios}>
        <video
          ref={testimoniosRef}
          className={styles.testimoniosVideo}
          src={testimoniosVideo}
          poster={testimoniosPoster}
          controls={testimoniosPlaying}
          playsInline
          preload="metadata"
          onPlay={() => setTestimoniosPlaying(true)}
        />
        {!testimoniosPlaying && (
          <button
            type="button"
            className={styles.testimoniosPlay}
            onClick={playTestimonios}
            aria-label="Reproducir video de testimonios"
          >
            <span className={styles.testimoniosPlayIcon} />
          </button>
        )}
      </section>

      {/* ===== HUGO (antes del contacto) ===== */}
      <HugoSays quote="Nos vemos en la próxima práctica." />

      {/* ===== CIERRE / CONTACTO ===== */}
      <section id="contacto" className={styles.cierre}>
        <div className={styles.cierreGlow} />
        <Reveal className={styles.cierreInner}>
          <h2 className={styles.cierreTitle}>No importa desde dónde empezás.</h2>
          <p className={styles.cierreText}>Lo importante es empezar a practicar.</p>
          <a href="#contacto" className={styles.cierreCta}>
            Quiero recibir información
          </a>
        </Reveal>
      </section>

      <Footer subtitle="Movimiento, juego y presencia" />
      <WhatsAppButton href="/escapada" />
    </div>
  )
}
