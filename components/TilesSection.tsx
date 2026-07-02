import type { TileItem } from '@/lib/types'
import Image from 'next/image'
import styles from './TilesSection.module.css'

interface TilesSectionProps {
  tiles: TileItem[]
}

function getLinkPreviewSrc(url: string) {
  return `https://api.microlink.io/?url=${encodeURIComponent(
    url
  )}&screenshot=true&meta=false&embed=screenshot.url`
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

          if (tile.kind === 'link') {
            const previewSrc = tile.previewSrc || getLinkPreviewSrc(tile.url)

            return (
              <a
                key={tile.id}
                href={tile.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.tile} ${styles.linkTile}`}
                aria-label={`Open link: ${tile.title}`}
              >
                <img
                  src={previewSrc}
                  alt=""
                  className={styles.linkPreviewImage}
                  loading="lazy"
                  onError={(event) => {
                    event.currentTarget.style.display = 'none'
                  }}
                />
                <div className={styles.linkContent}>
                  <span className={styles.linkSource}>{tile.source}</span>
                  <div className={styles.linkText}>
                    <h2 className={styles.linkTitle}>{tile.title}</h2>
                  </div>
                </div>
              </a>
            )
          }

          return null
        })}
      </div>
    </section>
  )
}
