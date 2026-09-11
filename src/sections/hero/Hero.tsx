import Scene from '../../components/3d/Scene'
import './Hero.css'

function Hero() {
  return (
    <section id="home" className="hero">
      <Scene />
      <div className="hero__content">
        <p className="hero__eyebrow">BIENVENUE DANS MON UNIVERS</p>

        <h1 className="hero__title">
          Yohan<span>.</span>
        </h1>

        <p className="hero__subtitle">
          Curieux d’aujourd’hui,
          <br />
          créatif pour demain.
        </p>

        <div className="hero__meta">
          <span>Technicien</span>
          <span>•</span>
          <span>Développeur</span>
          <span>•</span>
          <span>Gamer</span>
        </div>

        <div className="hero__meta">
          <span>Passionné</span>
          <span>•</span>
          <span>Curieux</span>
          <span>•</span>
          <span>Toujours en quête de plus</span>
        </div>

        <button className="hero__cta">
          <span>Explorer mon univers</span>
          <span className="hero__cta-arrow">→</span>
        </button>
      </div>

      <div className="hero__scroll">
        <span className="hero__scroll-icon">↓</span>
        <span>Scroll pour découvrir</span>
      </div>

      <div className="hero__bottom">
        <span>PLUS QU’UN SITE, UN TERRAIN D’EXPLORATION</span>
      </div>
    </section>
  )
}

export default Hero