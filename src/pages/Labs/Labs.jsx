import Nav from '../../components/Nav/Nav.jsx'
import Footer from '../../components/Footer/Footer.jsx'
import WhatsAppButton from '../../components/WhatsAppButton/WhatsAppButton.jsx'
import Reveal from '../../components/Reveal/Reveal.jsx'
import styles from './Labs.module.css'
import heroImg from '../../assets/labs/biotensegridad/cristhian-hero.jpg'
import bannerImg from '../../assets/labs/banner.jpg'

// Enlace de reserva → WhatsApp de Bono.
const WHATSAPP = 'https://wa.link/dukhvd'

// Wireframe de tensegridad — elemento de firma del encuentro.
function Tensegrity({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 200"
      fill="none"
      stroke="currentColor"
      aria-hidden="true"
    >
      <g strokeWidth="1.6" strokeLinejoin="round" strokeLinecap="round">
        <polygon points="100,14 186,100 100,186 14,100" />
        <polygon points="100,52 148,100 100,148 52,100" />
        <line x1="52" y1="52" x2="148" y2="148" />
        <line x1="148" y1="52" x2="52" y2="148" />
        <line x1="100" y1="14" x2="52" y2="100" />
        <line x1="100" y1="14" x2="148" y2="100" />
        <line x1="100" y1="186" x2="52" y2="100" />
        <line x1="100" y1="186" x2="148" y2="100" />
      </g>
      <g fill="currentColor" stroke="none">
        <circle cx="100" cy="14" r="4.5" />
        <circle cx="186" cy="100" r="4.5" />
        <circle cx="100" cy="186" r="4.5" />
        <circle cx="14" cy="100" r="4.5" />
        <circle cx="100" cy="100" r="3.5" />
      </g>
    </svg>
  )
}

const MOMENTOS = [
  {
    titulo: 'Primero, la teoría a un modelo',
    texto:
      'Construimos juntos un modelo estructural de tensegridad para observar cómo se organizan la tensión y la compresión, y cómo pequeñas modificaciones pueden afectar al sistema completo.',
  },
  {
    titulo: 'Después, los principios al cuerpo',
    texto:
      'A través de ejercicios de ritmo, coordinación, percepción y movimiento exploramos qué sucede cuando empezamos a percibirnos menos como partes aisladas y más como un sistema integrado.',
  },
]

const INSTRUCTORES = [
  {
    nombre: 'Cristhian Castro Arenas',
    rol: 'Arquitecto e investigador de sistemas de tensión estructural',
  },
  {
    nombre: 'Bono Caranzano',
    rol: 'Entrenador físico e investigador del movimiento',
  },
]

const PARA_QUIEN = [
  'Personas interesadas en el cuerpo y el movimiento',
  'Practicantes de disciplinas físicas',
  'Terapeutas',
  'Arquitectos y estudiantes',
  'Curiosos que quieran profundizar su percepción corporal',
]

const MATERIALES = [
  { icono: '🥢', texto: '12 palitos de helado o bajalenguas' },
  { icono: '➰', texto: '20 gomitas elásticas' },
  { icono: '🎾', texto: '1 pelota de tenis' },
  { icono: '👕', texto: 'Ropa cómoda' },
  { icono: '↔️', texto: 'Un espacio libre para moverte' },
]

export default function Labs() {
  return (
    <div className={styles.page}>
      <Nav reservarHref={WHATSAPP} />

      {/* ===== HERO ===== */}
      <section id="top" className={styles.hero}>
        <img className={styles.heroBg} src={heroImg} alt="" aria-hidden="true" />
        <div className={styles.heroScrim} />
        <Tensegrity className={styles.heroTense} />
        <div className={styles.heroInner}>
          <p className={`${styles.heroKicker} pcHeroReveal`} style={{ animationDelay: '0.1s' }}>
            Encuentro virtual · 03.10
          </p>
          <h1 className={`${styles.heroTitle} pcHeroReveal`} style={{ animationDelay: '0.22s' }}>
            <span>Bio</span>
            <span>tense</span>
            <span>gridad</span>
          </h1>
          <p className={`${styles.heroSub} pcHeroReveal`} style={{ animationDelay: '0.44s' }}>
            De la estructura al cuerpo. Arquitectura, tensión y conciencia corporal en un encuentro
            teórico-práctico.
          </p>
          <div className={`${styles.heroTags} pcHeroReveal`} style={{ animationDelay: '0.6s' }}>
            <span className={styles.heroTag}>📅 Sábado 3 de octubre</span>
            <span className={styles.heroTag}>🕙 10:00 a 12:00 hs</span>
            <span className={styles.heroTag}>💻 Virtual · Zoom</span>
          </div>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.heroCta} pcHeroReveal`}
            style={{ animationDelay: '0.78s' }}
          >
            Reservá tu lugar
          </a>
        </div>
        <a href="#que-es" aria-label="Bajar" className={styles.scrollDown}>
          <span className={styles.scrollCircle}>
            <span className={styles.scrollArrow} />
          </span>
        </a>
      </section>

      {/* ===== INTRO BAND ===== */}
      <section className={styles.introBand}>
        <Reveal as="p" className={styles.introText}>
          ¿Conocer la biotensegridad puede cambiar la forma en la que{' '}
          <em className={styles.introEm}>te movés?</em>
        </Reveal>
      </section>

      {/* ===== QUÉ ES / NARRATIVA ===== */}
      <section id="que-es" className={styles.section}>
        <div className={styles.queEsGrid}>
          <Reveal variant="left">
            <p className={styles.eyebrow}>De la estructura al cuerpo</p>
            <h2 className={styles.h2}>¿Y si el cuerpo fuera una red de relaciones?</h2>
            <figure className={styles.narFigure}>
              <img
                src={bannerImg}
                alt="Encuentro de biotensegridad"
                loading="lazy"
              />
            </figure>
          </Reveal>
          <Reveal delay={0.1} variant="right">
            <p className={styles.lead}>
              ¿Qué pasa si dejamos de pensar el cuerpo como una estructura de partes que se sostienen
              unas a otras y empezamos a pensarlo como una red de relaciones entre tensión,
              compresión y movimiento?
            </p>
            <p className={styles.body}>
              En este encuentro vamos a explorar esa pregunta desde dos lugares diferentes que se
              encuentran: la arquitectura de los sistemas de tensión y la investigación del
              movimiento.
            </p>
            <p className={styles.body}>
              Primero vamos a llevar la teoría a un modelo. Después vamos a llevar esos principios al
              cuerpo. No se trata solamente de entender la biotensegridad:{' '}
              <strong>se trata de poder experimentarla.</strong>
            </p>
          </Reveal>
        </div>
      </section>

      {/* ===== DOS MOMENTOS (cards oscuras) ===== */}
      <section id="jornada" className={styles.estructura}>
        <div className={styles.estructuraInner}>
          <Reveal as="p" className={styles.eyebrowPeach}>
            Cómo es el encuentro
          </Reveal>
          <Reveal as="h2" delay={0.06} className={styles.h2Light}>
            Construir · Percibir · Mover
          </Reveal>
          <div className={styles.momentosGrid}>
            {MOMENTOS.map((b, i) => (
              <Reveal key={b.titulo} delay={i * 0.08} variant="scale" className={styles.momentoCard}>
                <Tensegrity className={styles.momentoTense} />
                <p className={styles.estructuraNum}>{String(i + 1).padStart(2, '0')}</p>
                <h3 className={styles.cardTitlePeach}>{b.titulo}</h3>
                <p className={styles.cardBodyLight}>{b.texto}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== INSTRUCTORES ===== */}
      <section id="instructores" className={styles.section}>
        <Reveal as="p" className={styles.eyebrow}>
          A cargo de
        </Reveal>
        <Reveal as="h2" delay={0.06} className={styles.h2}>
          Dos miradas que se encuentran
        </Reveal>
        <div className={styles.instructoresGrid}>
          {INSTRUCTORES.map((m, i) => (
            <Reveal key={m.nombre} delay={i * 0.08} variant="scale" className={styles.instCard}>
              <h3 className={styles.instNombre}>{m.nombre}</h3>
              <p className={styles.instRol}>{m.rol}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ===== PARA QUIÉN + MATERIALES ===== */}
      <section id="preparate" className={styles.prepBand}>
        <div className={styles.prepGrid}>
          <Reveal className={styles.prepCol}>
            <p className={styles.eyebrow}>¿Para quién?</p>
            <h2 className={styles.h2}>Para cuerpos curiosos</h2>
            <ul className={styles.paraQuienList}>
              {PARA_QUIEN.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1} className={styles.prepCol}>
            <p className={styles.eyebrow}>Para participar necesitás</p>
            <h2 className={styles.h2}>Materiales</h2>
            <ul className={styles.materialesList}>
              {MATERIALES.map((m) => (
                <li key={m.texto} className={styles.materialItem}>
                  <span className={styles.materialIcono} aria-hidden="true">
                    {m.icono}
                  </span>
                  <span>{m.texto}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ===== INSCRIPCIÓN (zócalo) ===== */}
      <section id="inscripcion" className={styles.precio}>
        <Reveal className={styles.precioInner}>
          <div className={styles.precioMonto}>
            <span className={styles.precioLabel}>Valor</span>
            <span className={styles.precioCifra}>$20.000</span>
          </div>
          <ul className={styles.precioList}>
            <li>📅 Sábado 3 de octubre · de 10:00 a 12:00 hs.</li>
            <li>💻 Encuentro virtual por Zoom.</li>
            <li>Escribinos para reservar y recibir el link de pago.</li>
          </ul>
        </Reveal>
      </section>

      {/* ===== CTA FINAL ===== */}
      <section id="reservar" className={styles.cta}>
        <div className={styles.ctaGlow} />
        <Tensegrity className={styles.ctaTense} />
        <Reveal className={styles.ctaInner}>
          <p className={styles.ctaKicker}>Encuentro virtual · Zoom</p>
          <h2 className={styles.ctaTitle}>¿Te sumás?</h2>
          <p className={styles.ctaText}>
            Reservá tu lugar escribiéndonos por mensaje privado. Te pasamos el link de pago y todo lo
            que necesitás para participar.
          </p>
          <p className={styles.ctaTextSm}>Sábado 3 de octubre · 10:00 a 12:00 hs · Zoom · $20.000</p>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaButton}
          >
            Reservá tu lugar
          </a>
        </Reveal>
      </section>

      <Footer subtitle="Biotensegridad · De la estructura al cuerpo" />
      <WhatsAppButton href={WHATSAPP} />
    </div>
  )
}
