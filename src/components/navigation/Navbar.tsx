import './Navbar.css'

const navigationItems = [
  { label: 'Accueil', href: '#home' },
  { label: 'Univers', href: '#univers' },
  { label: 'Projets', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

function Navbar() {
  return (
    <header className="navbar">
      <a href="#home" className="navbar__logo" aria-label="Accueil">
        Y.
      </a>

      <nav className="navbar__links" aria-label="Navigation principale">
        {navigationItems.map((item, index) => (
          <a
            key={item.href}
            href={item.href}
            className={`navbar__link ${
              index === 0 ? 'navbar__link--active' : ''
            }`}
          >
            {item.label}
          </a>
        ))}
      </nav>

      <button
        type="button"
        className="navbar__theme"
        aria-label="Changer le thème"
      >
        ☼
      </button>
    </header>
  )
}

export default Navbar