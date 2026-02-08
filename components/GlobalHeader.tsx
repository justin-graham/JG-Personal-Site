import { useState, useEffect } from 'react'
import MacMenu from './MacMenu'
import styles from './GlobalHeader.module.css'

export default function GlobalHeader() {
  const [visible, setVisible] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const hero = document.getElementById('hero')
    if (!hero) {
      setVisible(true)
      return
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(!entry.isIntersecting)
        if (entry.isIntersecting) setMenuOpen(false)
      },
      { threshold: 0.1 }
    )
    observer.observe(hero)
    return () => observer.disconnect()
  }, [])

  return (
    <header
      className={`${styles.header} ${visible ? styles.visible : ''}`}
    >
      <button
        className={`${styles.hamburger} ${menuOpen ? styles.hamburgerOpen : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Menu"
        aria-expanded={menuOpen}
      >
        <span className={styles.hamburgerLine} />
        <span className={styles.hamburgerLine} />
        <span className={styles.hamburgerLine} />
      </button>
      {menuOpen && <MacMenu onClose={() => setMenuOpen(false)} />}
      <span className={styles.name}>Justin Graham</span>
    </header>
  )
}
