import { useState, useCallback } from 'react'
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

  return (
    <div className={styles.sliderSection}>
      <p className={styles.variantLabel}>{variants[displayIndex].label}</p>
      <p
        className={`${styles.variantText} ${
          fading ? styles.fadeOut : styles.fadeIn
        }`}
      >
        {variants[displayIndex].text}
      </p>
      <div className={styles.sliderContainer}>
        <span className={styles.label}>Fun</span>
        <input
          type="range"
          min={0}
          max={variants.length - 1}
          value={index}
          onChange={(e) => handleChange(Number(e.target.value))}
          className={styles.slider}
          aria-label="Bio personality slider"
        />
        <span className={styles.label}>Professional</span>
      </div>
    </div>
  )
}
