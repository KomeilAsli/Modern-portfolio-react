import { useEffect, useState } from 'react'

const navItems = [
  { label: 'Work', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Process', href: '#process' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLightMode, setIsLightMode] = useState(false)

  useEffect(() => {
    document.body.classList.toggle('light-mode', isLightMode)
  }, [isLightMode])

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className="header">
      <a className="logo" href="#top" aria-label="Go to homepage" onClick={closeMenu}>
        <span className="logo-mark">KA</span>
        <span>Komeil Asli</span>
      </a>

      <button
        className="menu-toggle"
        type="button"
        aria-label="Toggle navigation menu"
        aria-expanded={isMenuOpen}
        onClick={() => setIsMenuOpen((current) => !current)}
      >
        <span />
        <span />
        <span />
      </button>

      <nav className={`nav ${isMenuOpen ? 'is-open' : ''}`} aria-label="Main navigation">
        {navItems.map((item) => (
          <a key={item.href} href={item.href} onClick={closeMenu}>
            {item.label}
          </a>
        ))}
      </nav>

      <button className="theme-toggle" type="button" onClick={() => setIsLightMode((current) => !current)}>
        {isLightMode ? 'Dark' : 'Light'}
      </button>
    </header>
  )
}

export default Header
