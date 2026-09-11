import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import './PageLoader.css'

interface PageLoaderProps {
  onComplete: () => void
}

function PageLoader({ onComplete }: PageLoaderProps) {
  const loaderRef = useRef<HTMLDivElement>(null)
  const logoRef = useRef<HTMLDivElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)
  const progressRef = useRef<HTMLSpanElement>(null)
  const textRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    const loader = loaderRef.current
    const logo = logoRef.current
    const line = lineRef.current
    const progress = progressRef.current
    const text = textRef.current

    if (!loader || !logo || !line || !progress || !text) return

    const progressValue = { value: 0 }

    const timeline = gsap.timeline({
      onComplete: () => {
        onComplete()
      },
    })

    timeline
      .fromTo(
        logo,
        {
          opacity: 0,
          scale: 0.8,
          y: 10,
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.7,
          ease: 'power3.out',
        },
      )
      .fromTo(
        text,
        {
          opacity: 0,
          y: 10,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: 'power2.out',
        },
        '-=0.3',
      )
      .to(
        progressValue,
        {
          value: 100,
          duration: 1.2,
          ease: 'power2.inOut',
          onUpdate: () => {
            progress.textContent = `${Math.round(progressValue.value)
              .toString()
              .padStart(3, '0')}%`
          },
        },
        '-=0.2',
      )
      .to(
        line,
        {
          scaleX: 1,
          duration: 1.2,
          ease: 'power2.inOut',
        },
        '<',
      )
      .to(
        [logo, text, progress],
        {
          opacity: 0,
          y: -10,
          duration: 0.4,
          ease: 'power2.in',
          stagger: 0.05,
        },
      )
      .to(loader, {
        opacity: 0,
        duration: 0.7,
        ease: 'power2.inOut',
      })

    return () => {
      timeline.kill()
    }
  }, [onComplete])

  return (
    <div ref={loaderRef} className="page-loader">
      <div className="page-loader__content">
        <div ref={logoRef} className="page-loader__logo">
          Y<span>.</span>
        </div>

        <p ref={textRef} className="page-loader__text">
          INITIALISATION DE L’UNIVERS
        </p>

        <div className="page-loader__progress">
          <div className="page-loader__track">
            <div ref={lineRef} className="page-loader__line" />
          </div>

          <span ref={progressRef}>000%</span>
        </div>
      </div>
    </div>
  )
}

export default PageLoader