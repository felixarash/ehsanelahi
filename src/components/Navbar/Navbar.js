'use client'
import { useState } from 'react'
import Link from 'next/link'
import styles from './Navbar.module.css'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/" className={styles.logoLink}>Ehsan Elahi</Link>
      </div>
      
      <button className={styles.menuButton} onClick={toggleMenu}>
        <span className={styles.menuIcon}></span>
      </button>

      <div className={`${styles.navLinks} ${isOpen ? styles.active : ''}`}>
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#certifications">Certifications</a>
        <a href="#contact">Contact</a>
        <a href="/cv.pdf" className={styles.cvButton} download>Download CV</a>
      </div>
    </nav>
  )
}
