import styles from './HeroSection.module.css'

export default function HeroSection() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.typeContainer}>
        <span className={styles.line1}>Justin Graham&apos;s</span>
        <span className={styles.line2}>Master Plan</span>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/character.png"
          className={styles.character}
          alt=""
          aria-hidden="true"
        />
      </div>
      <div className={styles.divider} />
    </section>
  )
}
