import { useState, useEffect, useRef } from 'react'
import Nav from '../../components/Nav/Nav.jsx'
import Footer from '../../components/Footer/Footer.jsx'
import WhatsAppButton from '../../components/WhatsAppButton/WhatsAppButton.jsx'
import Reveal from '../../components/Reveal/Reveal.jsx'
import styles from './EscapadaNaturaleza.module.css'
import heroImg from '../../assets/escapada/hero.jpg'
import heroVideo from '../../assets/video/Recap Escapada (corto).mp4'
import lugarImg from '../../assets/escapada/lugar.jpg'
import gal1 from '../../assets/galeria/DSC07781.jpg'
import gal2 from '../../assets/galeria/IMG_0209.jpg'
import gal3 from '../../assets/galeria/IMG_0445.jpg'
import gal4 from '../../assets/galeria/IMG_0622.jpg'
import gal5 from '../../assets/galeria/IMG_0766.jpeg'
import bonoFotoImg from '../../assets/escapada/team-bono.jpg'
import marianaImg from '../../assets/profesores/mariana.jpg'
import federicoImg from '../../assets/profesores/federico.jpg'
import mauroImg from '../../assets/profesores/mauro.jpg'
import hugoImg from '../../assets/hugo/hugo.png'
import testimoniosVideo from '../../assets/video/testimonios.mp4'
import testimoniosPoster from '../../assets/video/testimonios-poster.jpg'

const GALERIA = [
  { img: gal1, alt: 'Momento de la Escapada Naturaleza' },
  { img: gal2, alt: 'Momento de la Escapada Naturaleza' },
  { img: gal3, alt: 'Momento de la Escapada Naturaleza' },
  { img: gal4, alt: 'Momento de la Escapada Naturaleza' },
  { img: gal5, alt: 'Momento de la Escapada Naturaleza' },
]

const ASPECTOS = [
  {
    titulo: 'Movimiento',
    texto: 'Entrenamientos de fuerza, movilidad, coordinación y exploración corporal.',
  },
  {
    titulo: 'Respiración',
    texto:
      'Herramientas para comprender cómo respiramos, regular el sistema nervioso y mejorar el rendimiento.',
  },
  {
    titulo: 'Juego',
    texto:
      'Dinámicas grupales donde el aprendizaje aparece desde la curiosidad y la creatividad.',
  },
  {
    titulo: 'Naturaleza',
    texto: 'Caminatas, playa, aire libre y tiempo para bajar el ritmo.',
  },
  {
    titulo: 'Comunidad',
    texto:
      'Compartir con personas que llegan desde recorridos diferentes pero con una misma inquietud: seguir aprendiendo.',
  },
]

const INCLUYE = [
  {
    titulo: 'Hospedaje',
    texto:
      'Nos alojamos en Casa La Paloma, a pocos metros del mar, con habitaciones compartidas, espacios comunes y una sala de entrenamiento disponible durante toda la estadía.',
  },
  {
    titulo: 'Alimentación',
    texto:
      'Todas las comidas incluidas (desayuno, almuerzo, merienda y cena*), con chef privado a cargo de una propuesta gastronómica consciente y adaptada a un entrenamiento intensivo. Nos adaptamos a restricciones o intolerancias.',
    nota: '*Solo una cena no está incluida.',
  },
  {
    titulo: 'Traslados',
    texto:
      'Transfer privado desde CABA hasta Casa La Paloma, Chapadmalal, tanto para la ida como para la vuelta.',
  },
  {
    titulo: 'Práctica intensiva',
    texto:
      'Tres jornadas completas de entrenamiento, exploración, teoría y talleres durante viernes, sábado y domingo.',
  },
]

const ITINERARIO = [
  {
    dia: 'JUE 8/10 · Día 1',
    titulo: 'Traslado y bienvenida',
    bloques: [
      {
        label: '14:00 hs · Salida en transfer privado',
        texto: 'Desde CABA directo a Casa La Paloma, Chapadmalal.',
      },
      { label: 'Cena y bienvenida', texto: 'Encuentro inicial y apertura del retiro.' },
    ],
  },
  {
    dia: 'VIE 9/10 · Día 2',
    titulo: 'Respiración · Fuerza · Desplazamiento',
    bloques: [
      {
        label: 'Práctica 1 — Cuerpo presente',
        texto:
          'Práctica de yoga · regulación del sistema nervioso autónomo · foco de la respiración en movimiento.',
      },
      {
        label: 'Teoría 1 — Conocer desde dónde respiramos',
        texto:
          'Anatomía de la respiración · dióxido de carbono y regulación del oxígeno (efecto Bohr) · guía para la meditación.',
      },
      {
        label: 'Práctica 2 — Fuerza · patrón de tracción',
        texto:
          'Lográ tu primera dominada / mejorá tu técnica / adueñate del Muscle Up · ¿cómo respirás cuando entrenás? · "ABC" de calistenia: Front Lever / Back Lever / Skin the Cat · ejercicios, técnica y pedagogía.',
      },
      {
        label: 'Práctica 3 — Desplazamiento',
        texto:
          'Parada de manos: fundamentos del equilibrio · acrobacia blanda: construcción de la inversión dinámica · floorwork: relacionarte con el suelo de forma fluida · herramientas para la integración e improvisación del movimiento.',
      },
      { label: 'Bonus track', texto: 'Masaje Thai.' },
    ],
  },
  {
    dia: 'SÁB 10/10 · Día 3',
    titulo: 'Composición, concentración y juego',
    bloques: [
      {
        label: 'Práctica 1 — Práctica de movimiento',
        texto:
          'Generar interés por la actividad física desde un enfoque restaurativo · guía para el movimiento constante e ininterrumpido · cómo incorporar el movimiento en tu rutina.',
      },
      {
        label: 'Teoría 1 — Mente creativa',
        texto:
          'La consigna cognitiva: el arte de diseñar dinámicas aptas para todo público.',
      },
      {
        label: 'Práctica 2 — Taller creativo',
        texto:
          'Propuestas lúdicas inspiradas en la Capoeira, el Contact y el combate cuerpo a cuerpo · manipulación de objetos: foco, coordinación y reacción · La Fábrica: espacio de creación.',
      },
      { label: 'Clase de surf', texto: 'Opcional en el mar.' },
      { label: 'Jam · Fogón y cena' },
    ],
  },
  {
    dia: 'DOM 11/10 · Día 4',
    titulo: 'Entrenamiento, comunicación y LAB',
    bloques: [
      {
        label: 'Práctica 1 — Caminata y entrenamiento',
        texto:
          'Caminata consciente hacia la playa · entrenamiento de alta intensidad en la playa.',
      },
      {
        label: 'Teoría 1 — Práctica de la comunicación',
        texto:
          'Herramientas para el intercambio con otros y con uno mismo · mapas para la acción: interpretar el entorno y tomar acción · exposición, lenguaje y estructura: oratoria y comunicación no verbal.',
      },
      {
        label: 'Práctica 2 — Taller creativo y programación',
        texto:
          'Coordinación, parada de manos y manipulación de objetos · propuestas lúdicas inspiradas en la Capoeira, el Contacto y el combate cuerpo a cuerpo · eje pedagógico: ¿qué necesita entrenar la gente hoy? Cómo ordenar la preparación física desde un enfoque integral del movimiento.',
      },
    ],
  },
  {
    dia: 'LUN 12/10 · Día 5',
    titulo: 'Regreso',
    bloques: [
      { texto: 'Desayuno · conversatorio y despedida.' },
      {
        label: '11:00 hs · Regreso en transfer',
        texto:
          'Salida hacia CABA. El lunes es feriado: compartimos la despedida por la mañana y emprendemos la vuelta temprano.',
      },
    ],
  },
]

const EQUIPO = [
  {
    nombre: 'Bono Caranzano',
    rol: 'Fundador de Práctica Constante · Instructor',
    foto: '[ foto — Bono ]',
    img: bonoFotoImg,
    parrafos: [
      'Se dedica al estudio, la práctica y la enseñanza del movimiento desde hace más de diez años. Su recorrido comenzó en los deportes de equipo y continuó por el levantamiento olímpico, el CrossFit, la calistenia y el yoga, dando lugar a una búsqueda que lo llevó a investigar en profundidad la cultura del movimiento.',
      'Creó Escapada Naturaleza para compartir las herramientas técnicas y humanas que sigue desarrollando. En cada edición participa como facilitador y como un integrante más del grupo, convencido de que el aprendizaje nace del intercambio.',
    ],
  },
  {
    nombre: 'Mariana García',
    rol: 'Profesora de Yoga y Movimiento · Instructora',
    foto: '[ foto — Mariana ]',
    img: marianaImg,
    parrafos: [
      'Más de quince años de experiencia en la enseñanza del movimiento. Su formación integra yoga, acrobacias aéreas, gimnasia artística, flexibilidad y exploración corporal, combinando herramientas de distintas disciplinas para desarrollar fuerza, movilidad y conciencia del cuerpo.',
      'Su recorrido también incluye formación teatral, una experiencia que amplió su interés por la presencia, el juego y las posibilidades expresivas del movimiento.',
    ],
  },
  {
    nombre: 'Federico Mulet',
    rol: 'Fundador de Manada · Instructor de Movimiento',
    foto: '[ foto — Federico ]',
    img: federicoImg,
    parrafos: [
      'Se dedica a la enseñanza del movimiento desde 2021. Su camino comenzó en la cultura de la calistenia y el entrenamiento de fuerza, especializándose en parada de manos, trabajo de suelo y desarrollo de capacidades físicas.',
      'Es fundador de Manada, un espacio dedicado al movimiento, y complementa su práctica con la carrera de Psicología, integrando una perspectiva que conecta el aprendizaje físico con los procesos cognitivos y emocionales.',
    ],
  },
  {
    nombre: 'Mauro Arce Almada',
    rol: 'Profesor de Educación Física · Entrenador',
    foto: '[ foto — Mauro ]',
    img: mauroImg,
    parrafos: [
      'Hace más de quince años que enseña y practica acrobacia y parada de manos. Su formación incluye rehabilitación, gimnasia artística y artes escénicas, disciplinas que fueron moldeando una mirada amplia sobre el entrenamiento.',
      'En los últimos años incorporó un enfoque integral del cuerpo a su propuesta pedagógica y dirige su propia escuela de movimiento, donde acompaña a personas con distintos niveles de experiencia.',
    ],
  },
]

const PARA_QUIEN = [
  'Querés comenzar un camino de movimiento más consciente.',
  'Ya practicás yoga, calistenia, crossfit, danza, acrobacia u otra disciplina y buscás ampliar tu mirada.',
  'Sos entrenador, profesor o facilitador y querés incorporar nuevas herramientas técnicas y pedagógicas.',
  'Sentís que necesitás hacer una pausa y regalarte unos días para salir de la rutina.',
]

const FAQ = [
  {
    q: '¿Necesito experiencia previa?',
    a: 'No. La Escapada está pensada para todos los niveles: cada práctica se adapta y podés participar sin experiencia previa.',
  },
  {
    q: '¿Qué nivel físico hace falta?',
    a: 'No necesitás ser un atleta. Solo tener ganas de aprender y moverte; las propuestas se ajustan a cada persona.',
  },
  {
    q: '¿Qué tengo que llevar?',
    a: 'Ropa cómoda para entrenar, abrigo, traje de baño y ganas de explorar. Te enviamos la lista completa al reservar.',
  },
  {
    q: '¿Cómo es el alojamiento?',
    a: 'Nos alojamos en Casa La Paloma, a pocos metros del mar, con habitaciones compartidas, espacios comunes y sala de entrenamiento.',
  },
  {
    q: '¿Puedo ir solo?',
    a: 'Sí. La mayoría llega sola: la experiencia está diseñada para conocer gente y compartir desde el primer día.',
  },
  {
    q: '¿Qué pasa si llueve?',
    a: 'La experiencia continúa: adaptamos las prácticas a los espacios cubiertos y reorganizamos las actividades al aire libre.',
  },
  {
    q: '¿Cómo reservo mi lugar?',
    a: 'Escribinos por WhatsApp o completá el formulario. Los grupos son reducidos, así que los lugares son limitados.',
  },
]

const WHATSAPP = 'https://wa.link/dukhvd'

function EquipoCard({ m, delay }) {
  const [abierto, setAbierto] = useState(false)
  const [primerParrafo, ...resto] = m.parrafos

  return (
    <Reveal as="article" delay={delay} className={styles.equipoCard}>
      {m.img ? (
        <img className={styles.equipoFoto} src={m.img} alt={m.nombre} loading="lazy" />
      ) : (
        <div className={styles.equipoFoto}>{m.foto}</div>
      )}
      <div className={styles.equipoBody}>
        <h3 className={styles.equipoNombre}>{m.nombre}</h3>
        <p className={styles.equipoRol}>{m.rol}</p>
        <p className={styles.equipoParrafo}>{primerParrafo}</p>
        {abierto &&
          resto.map((p, j) => (
            <p key={j} className={styles.equipoParrafo}>
              {p}
            </p>
          ))}
        {resto.length > 0 && (
          <button
            type="button"
            className={styles.verMas}
            onClick={() => setAbierto((v) => !v)}
            aria-expanded={abierto}
          >
            {abierto ? 'Ver menos' : 'Ver más'}
          </button>
        )}
      </div>
    </Reveal>
  )
}

function Galeria() {
  const [index, setIndex] = useState(0)
  const [lightbox, setLightbox] = useState(false)
  const n = GALERIA.length

  const go = (dir) => setIndex((i) => (i + dir + n) % n)
  const prev = () => go(-1)
  const next = () => go(1)

  useEffect(() => {
    if (!lightbox) return
    const onKey = (e) => {
      if (e.key === 'Escape') setLightbox(false)
      else if (e.key === 'ArrowLeft') prev()
      else if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [lightbox, n])

  return (
    <section className={styles.galeria}>
      <div className={styles.galeriaInner}>
        <Reveal as="p" className={styles.eyebrow}>
          Galería de la experiencia
        </Reveal>

        <div className={styles.carousel}>
          <button
            type="button"
            className={`${styles.carArrow} ${styles.carArrowLeft}`}
            onClick={prev}
            aria-label="Foto anterior"
          >
            ‹
          </button>

          <div className={styles.carViewport}>
            <div
              className={styles.carTrack}
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {GALERIA.map((g, i) => (
                <button
                  key={i}
                  type="button"
                  className={styles.carSlide}
                  onClick={() => setLightbox(true)}
                  aria-label={`Ampliar foto ${i + 1}`}
                  tabIndex={i === index ? 0 : -1}
                >
                  <img
                    className={styles.carFoto}
                    src={g.img}
                    alt={g.alt}
                    loading="lazy"
                  />
                  <span className={styles.carZoom} aria-hidden="true">⤢</span>
                </button>
              ))}
            </div>
          </div>

          <button
            type="button"
            className={`${styles.carArrow} ${styles.carArrowRight}`}
            onClick={next}
            aria-label="Foto siguiente"
          >
            ›
          </button>
        </div>

        <div className={styles.carDots}>
          {GALERIA.map((_, i) => (
            <button
              key={i}
              type="button"
              className={`${styles.carDot} ${i === index ? styles.carDotActive : ''}`}
              onClick={() => setIndex(i)}
              aria-label={`Ir a la foto ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {lightbox && (
        <div
          className={styles.lightbox}
          onClick={() => setLightbox(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Galería ampliada"
        >
          <button
            type="button"
            className={styles.lbClose}
            onClick={() => setLightbox(false)}
            aria-label="Cerrar"
          >
            ×
          </button>
          <button
            type="button"
            className={`${styles.lbArrow} ${styles.lbArrowLeft}`}
            onClick={(e) => {
              e.stopPropagation()
              prev()
            }}
            aria-label="Foto anterior"
          >
            ‹
          </button>
          <figure className={styles.lbFigure} onClick={(e) => e.stopPropagation()}>
            <img className={styles.lbFoto} src={GALERIA[index].img} alt={GALERIA[index].alt} />
            <figcaption className={styles.lbCaption}>
              {index + 1} / {n}
            </figcaption>
          </figure>
          <button
            type="button"
            className={`${styles.lbArrow} ${styles.lbArrowRight}`}
            onClick={(e) => {
              e.stopPropagation()
              next()
            }}
            aria-label="Foto siguiente"
          >
            ›
          </button>
        </div>
      )}
    </section>
  )
}

export default function EscapadaNaturaleza() {
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
      <Nav reservarHref={WHATSAPP} />

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
          <p className={`${styles.heroKicker} pcHeroReveal`} style={{ animationDelay: '0.1s' }}>
            5ta Edición
          </p>
          <h1 className={`${styles.heroTitle} pcHeroReveal`} style={{ animationDelay: '0.25s' }}>
            Escapada
          </h1>
          <p className={`${styles.heroSub} pcHeroReveal`} style={{ animationDelay: '0.45s' }}>
            Cinco días para salir de la rutina y volver a conectar con lo esencial.
          </p>
          <div className={`${styles.heroTags} pcHeroReveal`} style={{ animationDelay: '0.6s' }}>
            <span className={styles.heroTag}>📍 Chapadmalal, Mar del Plata</span>
            <span className={styles.heroTag}>📅 8 al 12 de octubre de 2026</span>
          </div>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.heroCta} pcHeroReveal`}
            style={{ animationDelay: '0.78s' }}
          >
            Reservar mi lugar
          </a>
        </div>
        <a href="#experiencia" aria-label="Bajar" className={styles.scrollDown}>
          <span className={styles.scrollCircle}>
            <span className={styles.scrollArrow} />
          </span>
        </a>
      </section>

      {/* ===== INTRO BAND ===== */}
      <section id="experiencia" className={styles.introBand}>
        <Reveal as="p" className={styles.introText}>
          Una experiencia inmersiva donde el movimiento, la naturaleza y la comunidad se
          encuentran para transformar la forma en que{' '}
          <em className={styles.introEm}>entrenás, aprendés y habitás tu cuerpo.</em>
        </Reveal>
      </section>

      {/* ===== QUÉ ES ===== */}
      <section className={styles.section}>
        <div className={styles.queEsGrid}>
          <Reveal variant="left">
            <p className={styles.eyebrow}>Qué es</p>
            <h2 className={styles.h2}>¿Qué es Escapada Naturaleza?</h2>
          </Reveal>
          <Reveal delay={0.1} variant="right">
            <p className={styles.lead}>
              No es un retiro tradicional. No es un curso intensivo. No son simplemente
              vacaciones.
            </p>
            <p className={styles.body}>
              Escapada Naturaleza es una <strong>experiencia</strong> diseñada para quienes
              desean entrenar el cuerpo desde una mirada integral, desarrollar nuevas capacidades
              y regalarse unos días lejos del ritmo cotidiano.
            </p>
            <p className={styles.body}>
              Durante cinco días compartimos movimiento, respiración, creatividad, naturaleza y
              aprendizaje en un entorno pensado para detenerse, explorar y volver con
              herramientas que continúan funcionando mucho después del regreso.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ===== PARA QUIÉN ===== */}
      <section className={styles.paraQuien}>
        <div className={styles.paraQuienInner}>
          <Reveal as="p" className={styles.eyebrow}>
            Para quién es
          </Reveal>
          <Reveal as="h2" delay={0.06} className={styles.h2}>
            ¿Para quién es esta experiencia?
          </Reveal>
          <Reveal as="p" delay={0.1} className={styles.bodyWide}>
            Está pensada para personas que sienten curiosidad por descubrir nuevas formas de
            moverse y aprender. Es ideal si:
          </Reveal>
          <Reveal as="ul" delay={0.14} className={styles.checkList}>
            {PARA_QUIEN.map((item, i) => (
              <li key={i} className={styles.checkItem}>
                <span className={styles.dot}>·</span>
                {item}
              </li>
            ))}
          </Reveal>
          <Reveal as="p" delay={0.18} className={styles.quoteSm}>
            No necesitás ser un atleta. Solo tener ganas de aprender.
          </Reveal>
        </div>
      </section>

      {/* ===== HUGO (mini) ===== */}
      <section className={styles.hugoMiniWrap}>
        <Reveal className={styles.hugoMini}>
          <img className={styles.hugoAvatar} src={hugoImg} alt="Hugo" />
          <div className={styles.hugoMiniText}>
            <p className={styles.hugoLabel}>Hugo dice…</p>
            <p className={styles.hugoQuote}>
              "A veces el mejor entrenamiento es cambiar de paisaje."
            </p>
          </div>
        </Reveal>
      </section>

      {/* ===== GALERÍA ===== */}
      <Galeria />

      {/* ===== QUÉ VAS A VIVIR ===== */}
      <section className={styles.section}>
        <Reveal as="p" className={styles.eyebrow}>
          Qué vas a vivir
        </Reveal>
        <Reveal as="h2" delay={0.06} className={styles.h2}>
          Distintos aspectos del
          <br />
          movimiento y el desarrollo
        </Reveal>
        <div className={styles.aspectosGrid}>
          {ASPECTOS.map((a, i) => (
            <Reveal key={a.titulo} delay={i * 0.08} variant="scale" className={styles.aspectoCard}>
              <h3 className={styles.cardTitleRust}>{a.titulo}</h3>
              <p className={styles.cardBody}>{a.texto}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ===== QUÉ INCLUYE ===== */}
      <section className={styles.incluye}>
        <div className={styles.incluyeInner}>
          <Reveal as="p" className={styles.eyebrowPeach}>
            Qué incluye
          </Reveal>
          <Reveal as="h2" delay={0.06} className={styles.h2Light}>
            Solo tenés que ocuparte
            <br />
            de vivir la experiencia
          </Reveal>
          <div className={styles.incluyeGrid}>
            {INCLUYE.map((item, i) => (
              <Reveal key={item.titulo} delay={i * 0.08} variant="scale" className={styles.incluyeCard}>
                <h3 className={styles.cardTitlePeach}>{item.titulo}</h3>
                <p className={styles.cardBodyLight}>{item.texto}</p>
                {item.nota && <p className={styles.nota}>{item.nota}</p>}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ITINERARIO ===== */}
      <section id="itinerario" className={styles.itinerario}>
        <Reveal as="p" className={styles.eyebrow}>
          Itinerario
        </Reveal>
        <Reveal as="h2" delay={0.06} className={styles.h2}>
          Cinco días de práctica
        </Reveal>
        <Reveal as="p" delay={0.1} className={styles.bodyWide}>
          Cinco días para entrenar el cuerpo, desarrollar criterio, crear junto a otros y
          construir herramientas que sigan funcionando cuando vuelvas a casa.
        </Reveal>

        <div className={styles.days}>
          {ITINERARIO.map((d) => (
            <details key={d.dia} className={styles.day}>
              <summary className={styles.daySummary}>
                <span className={styles.dayTag}>{d.dia}</span>
                <span className={styles.dayTitle}>{d.titulo}</span>
                <span className={styles.dayCaret} aria-hidden="true">+</span>
              </summary>
              <div className={styles.dayBody}>
                {d.bloques.map((b, i) => (
                  <div key={i}>
                    {b.label && <p className={styles.dayBlockLabel}>{b.label}</p>}
                    {b.texto && <p>{b.texto}</p>}
                  </div>
                ))}
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* ===== PRECIO (zócalo) ===== */}
      <section className={styles.precio}>
        <Reveal className={styles.precioInner}>
          <div className={styles.precioMonto}>
            <span className={styles.precioLabel}>Inversión</span>
            <span className={styles.precioCifra}>$600 USD</span>
          </div>
          <ul className={styles.precioList}>
            <li>Se puede pagar en 2 cuotas sin interés.</li>
            <li>Pago a través de transferencia (en pesos se cotiza al cambio oficial).</li>
            <li>Los cupos son limitados.</li>
          </ul>
        </Reveal>
      </section>

      {/* ===== TESTIMONIOS (video) ===== */}
      <section id="testimonios" className={styles.testimonios}>
        <p className={styles.testimoniosTitle}>Testimonios de nuestros participantes</p>
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

      {/* ===== EL LUGAR ===== */}
      <section className={styles.lugar}>
        <div
          className={styles.lugarBg}
          style={{ backgroundImage: `url(${lugarImg})` }}
        />
        <div className={styles.lugarScrim} />
        <Reveal className={styles.lugarInner}>
          <p className={styles.eyebrowPeach}>El lugar</p>
          <h2 className={styles.lugarTitle}>Casa La Paloma</h2>
          <p className={styles.lugarText}>
            Un espacio pensado para descansar, compartir y entrenar a pocos metros del mar.
            <br />
            La naturaleza deja de ser el escenario para convertirse en parte de la experiencia.
          </p>
        </Reveal>
      </section>

      {/* ===== EL EQUIPO ===== */}
      <section id="equipo" className={styles.section}>
        <Reveal as="p" className={styles.eyebrow}>
          El equipo
        </Reveal>
        <Reveal as="h2" delay={0.06} className={styles.h2}>
          Guías del movimiento
        </Reveal>
        <Reveal as="p" delay={0.1} className={styles.bodyWide}>
          Escapada Naturaleza está guiada por un equipo de profesionales con recorridos diversos
          y una mirada en común: entender el movimiento como una herramienta de aprendizaje,
          exploración y desarrollo personal. Cada integrante aporta su experiencia desde
          distintas disciplinas, enriqueciendo una propuesta donde la técnica, la creatividad y
          el intercambio ocupan el mismo lugar.
        </Reveal>
        <div className={styles.equipoGrid}>
          {EQUIPO.map((m, i) => (
            <EquipoCard key={m.nombre} m={m} delay={i * 0.06} />
          ))}
        </div>
        <div className={styles.quoteBand}>
          <div className={styles.quoteGlow} />
          <Reveal as="p" delay={0.2} className={styles.quoteLg}>
            Cada edición es el resultado del trabajo conjunto de un equipo que comparte una misma
            filosofía: aprender desde la práctica, respetar los tiempos de cada persona y crear un
            espacio donde el movimiento sea una herramienta para conectar con uno mismo, con los
            demás y con el entorno.
          </Reveal>
        </div>
      </section>

      {/* ===== LA MASCOTA · HUGO ===== */}
      <section id="hugo" className={styles.hugo}>
        <div className={styles.hugoGrid}>
          <Reveal variant="left" className={styles.hugoImgWrap}>
            <img className={styles.hugoImg} src={hugoImg} alt="Hugo, la mascota de Práctica Constante" />
          </Reveal>
          <Reveal delay={0.1} variant="right">
            <p className={styles.eyebrowPeach}>La mascota</p>
            <h2 className={styles.h2Light}>Conocé a Hugo</h2>
            <p className={styles.hugoText}>
              Hugo es el personaje que acompaña cada Escapada. Aparece de a ratos, con
              reflexiones breves que le dan identidad y personalidad a Práctica Constante.
            </p>
            <p className={styles.hugoText}>
              No interrumpe ni ocupa el centro de la escena: solo acompaña, para que la
              experiencia se sienta un poco más cercana y memorable.
            </p>
            <blockquote className={styles.hugoBlockquote}>
              <p className={styles.hugoLabelPeach}>Hugo dice…</p>
              <p className={styles.hugoQuoteLg}>
                "A veces el mejor entrenamiento empieza cuando dejás de mirar el reloj."
              </p>
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className={styles.faq}>
        <Reveal as="p" className={styles.eyebrow}>
          Preguntas frecuentes
        </Reveal>
        <div className={styles.faqList}>
          {FAQ.map((f) => (
            <details key={f.q} className={styles.faqItem}>
              <summary className={styles.faqSummary}>
                {f.q}
                <span className={styles.faqPlus}>+</span>
              </summary>
              <p className={styles.faqAnswer}>{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* ===== CTA FINAL ===== */}
      <section id="reservar" className={styles.cta}>
        <div className={styles.ctaGlow} />
        <Reveal className={styles.ctaInner}>
          <h2 className={styles.ctaTitle}>
            Regalarte 5 días
            <br />
            puede cambiar mucho más que
            <br />
            una semana.
          </h2>
          <p className={styles.ctaText}>
            Escapada Naturaleza es una invitación a entrenar, aprender y compartir desde otro
            lugar.
          </p>
          <p className={styles.ctaTextSm}>
            Los grupos son reducidos para cuidar la calidad de la experiencia.
          </p>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaButton}
          >
            Reservar mi lugar
          </a>
        </Reveal>
      </section>

      <Footer subtitle="Escapada Naturaleza · Chapadmalal 2026" />
      <WhatsAppButton href={WHATSAPP} />
    </div>
  )
}
