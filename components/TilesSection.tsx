import type { TileItem } from '@/lib/types'
import styles from './TilesSection.module.css'

interface TilesSectionProps {
  tiles: TileItem[]
}

const iconMap: Record<string, string> = {
  pencil: '\u270F\uFE0F',
  music: '\uD83C\uDFB5',
  code: '\uD83D\uDCBB',
  book: '\uD83D\uDCDA',
  camera: '\uD83D\uDCF7',
  twitter: '\uD83D\uDCAC',
  rocket: '\uD83D\uDE80',
}

export default function TilesSection({ tiles }: TilesSectionProps) {
  return (
    <section id="tiles" className={styles.section}>
      <div className={styles.grid}>
        {tiles.map((tile) => (
          <a
            key={tile.title}
            href={tile.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.tile} ${tile.span === 2 ? styles.span2 : ''}`}
            style={{ backgroundColor: tile.color, color: tile.textColor }}
          >
            <div>
              {tile.icon && (
                <div className={styles.tileIcon}>
                  {iconMap[tile.icon] || tile.icon}
                </div>
              )}
              <div className={styles.tileTitle}>{tile.title}</div>
              <div className={styles.tileDescription}>{tile.description}</div>
            </div>
            <div className={styles.tileExternal}>&nearr;</div>
          </a>
        ))}
      </div>
    </section>
  )
}
