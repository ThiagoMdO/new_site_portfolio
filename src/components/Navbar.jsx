import styles from './Navbar.module.css';
import { useEffect, useState } from 'react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 50); // ajusta o valor conforme quiser
            
        };

        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, [scrolled]);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : styles.default}`}>
      <div className={styles.navLeft}>
        <span>THIAGO_MDO</span>
      </div>
      <div className={styles.navRight}>
        <a href="#home">Home</a>
        <a href="#trabalhos">Trabalhos</a>
        <a href="#about">Sobre Mim</a>
        <a href="#services">Serviços</a>
        <a href="#contato">Contato</a>
      </div>
    </nav>
  )
}

export default Navbar;