import type { TileItem } from '@/lib/types'
import Image from 'next/image'
import styles from './TilesSection.module.css'

interface TilesSectionProps {
  tiles: TileItem[]
}

export default function TilesSection({ tiles }: TilesSectionProps) {
  return (
    <section id="tiles" className={styles.section}>
      <div className={styles.grid}>
        {tiles.map((tile) => {
          if (tile.kind === 'spotify') {
            return (
              <article key={tile.id} className={`${styles.tile} ${styles.spotifyTile}`}>
                <a
                  href={tile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.spotifyLink}
                  aria-label={`Open ${tile.title} on Spotify`}
                >
                  Open on Spotify <span aria-hidden="true">↗</span>
                </a>
                <iframe
                  data-testid="embed-iframe"
                  className={styles.spotifyFrame}
                  src={tile.embedSrc}
                  width="100%"
                  height="352"
                  frameBorder="0"
                  allowFullScreen
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  title={`${tile.title} playlist`}
                />
              </article>
            )
          }

          if (tile.kind === 'project') {
            return (
              <a
                key={tile.id}
                href={tile.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.tile} ${styles.projectTile}`}
                aria-label={`Open project: ${tile.title}`}
              >
                <Image
                  src={tile.imageSrc}
                  alt={tile.imageAlt}
                  fill
                  sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
                  className={styles.projectImage}
                />
                <div className={styles.projectOverlay}>
                  <span className={styles.projectKicker}>{tile.kicker}</span>
                  <h2 className={styles.projectTitle}>{tile.title}</h2>
                  <p className={styles.projectDescription}>{tile.description}</p>
                  <span className={styles.projectAction}>
                    {tile.cta} <span aria-hidden="true">↗</span>
                  </span>
                </div>
              </a>
            )
          }

          return (
            <a
              key={tile.id}
              href={tile.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.tile} ${styles.substackTile}`}
              aria-label={`Open Substack post: ${tile.alt}`}
            >
              <div className={styles.imageWrap}>
                <Image
                  src={tile.imageSrc}
                  alt={tile.alt}
                  fill
                  sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
                  className={styles.substackImage}
                />
              </div>
            </a>
          )
        })}
      </div>
    </section>
  )
}
