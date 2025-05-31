import styles from './Navbar.module.css'
import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : styles.default}`}>
      <div className={styles.navLeft}>
        <span>THIAGO_MDO</span>
      </div>

      <div className={styles.menuIcon} onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </div>

      <div className={`${styles.navRight} ${menuOpen ? styles.active : ''}`}>
        <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
        <a href="#trabalhos" onClick={() => setMenuOpen(false)}>Trabalhos</a>
        <a href="#about" onClick={() => setMenuOpen(false)}>Sobre Mim</a>
        <a href="#services" onClick={() => setMenuOpen(false)}>Serviços</a>
        <a href="#contato" onClick={() => setMenuOpen(false)}>Contato</a>
      </div>
    </nav>
  )
}

export default Navbar
