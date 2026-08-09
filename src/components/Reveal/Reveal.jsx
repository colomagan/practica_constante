import { useEffect, useRef, useState } from 'react'
import styles from './Reveal.module.css'

/**
 * Envuelve contenido que aparece con un fade + slide cuando entra en viewport.
 * Replica el comportamiento de `.pc-reveal` + IntersectionObserver del HTML original.
 *
 * @param {string}  as         etiqueta a renderizar (div, p, h2, ul, article...)
 * @param {number}  delay      retraso de la transición en segundos (stagger)
 * @param {string}  className  clases extra
 */
export default function Reveal({
  as: Tag = 'div',
  delay = 0,
  className = '',
  children,
  ...rest
}) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (!('IntersectionObserver' in window)) {
      setVisible(true)
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -6% 0px' },
    )

    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      className={`${styles.reveal} ${visible ? styles.visible : ''} ${className}`.trim()}
      style={{ transitionDelay: `${delay}s` }}
      {...rest}
    >
      {children}
    </Tag>
  )
}
