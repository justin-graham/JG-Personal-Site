import { useState, useCallback, CSSProperties } from 'react'
import type { BioVariant } from '@/lib/types'
import styles from './BioSlider.module.css'

interface BioSliderProps {
  variants: BioVariant[]
}

export default function BioSlider({ variants }: BioSliderProps) {
  const [index, setIndex] = useState(4)
  const [fading, setFading] = useState(false)
  const [displayIndex, setDisplayIndex] = useState(4)

  const handleChange = useCallback(
    (newIndex: number) => {
      if (newIndex === index) return
      setFading(true)
      setTimeout(() => {
        setDisplayIndex(newIndex)
        setIndex(newIndex)
        setFading(false)
      }, 150)
    },
    [index]
  )

  // Calculate progress percentage for background gradient
  const progress = (index / (variants.length - 1)) * 100

  return (
    <div className={styles.wrapper}>
      <div className={styles.textContainer}>
        <p
          className={`${styles.variantText} ${
            fading ? styles.fadeOut : styles.fadeIn
          }`}
        >
          {variants[displayIndex].text}
        </p>
      </div>

      <div className={styles.sliderSection}>
        <div className={styles.sliderContainer}>
          <span className={styles.label}>Fun JG</span>
          <input
            type="range"
            min={0}
            max={variants.length - 1}
            value={index}
            onChange={(e) => handleChange(Number(e.target.value))}
            className={styles.slider}
            style={{ '--progress': `${progress}%` } as CSSProperties}
            aria-label="Bio personality slider"
          />
          <span className={styles.label}>Professional Justin</span>
        </div>
      </div>
    </div>
  )
}
