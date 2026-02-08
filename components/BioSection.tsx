import type { BioVariant } from '@/lib/types'
import BioSlider from './BioSlider'
import styles from './BioSection.module.css'

interface BioSectionProps {
  variants: BioVariant[]
}

export default function BioSection({ variants }: BioSectionProps) {
  return (
    <section id="bio" className={styles.section}>
      <BioSlider variants={variants} />
    </section>
  )
}
