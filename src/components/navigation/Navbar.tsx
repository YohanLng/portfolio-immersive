import {
  FolderOpen,
  Globe2,
  House,
  Mail,
  Sun,
} from 'lucide-react'
import './Navbar.css'

const navigationItems = [
  {
    label: 'Accueil',
    href: '#home',
    icon: House,
  },
  {
    label: 'Univers',
    href: '#univers',
    icon: Globe2,
  },
  {
    label: 'Projets',
    href: '#projects',
    icon: FolderOpen,
  },
  {
    label: 'Contact',
    href: '#contact',
    icon: Mail,
  },
]

function Navbar() {
  return (
    <header className="navbar">
      {/* Logo gauche */}
      <a
        href="#home"
        className="navbar__logo"
        aria-label="Retour à l'accueil"
      >
        Y<span>.</span>
      </a>

      {/* Navigation centrale */}
      <nav
        className="navbar__links"
        aria-label="Navigation principale"
      >
        {navigationItems.map((item, index) => {
          const Icon = item.icon

          return (
            <div key={item.href} className="navbar__item-wrapper">
              {index > 0 && (
                <span className="navbar__separator" />
              )}

              <a
                href={item.href}
                className={`navbar__link ${
                  index === 0 ? 'navbar__link--active' : ''
                }`}
              >
                <Icon size={18} strokeWidth={1.7} />
                <span>{item.label}</span>
              </a>
            </div>
          )
        })}
      </nav>

      {/* Bouton thème droite */}
      <button
        type="button"
        className="navbar__theme"
        aria-label="Changer le thème"
      >
        <Sun size={19} strokeWidth={1.6} />
      </button>
    </header>
  )
}

export default Navbar