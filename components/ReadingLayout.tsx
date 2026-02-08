import Link from 'next/link'
import type { ReadingPage } from '@/lib/types'
import styles from './ReadingLayout.module.css'

interface ReadingLayoutProps {
  page: ReadingPage
}

export default function ReadingLayout({ page }: ReadingLayoutProps) {
  return (
    <article className={styles.container}>
      <Link href="/#links" className={styles.back}>
        &larr; Back
      </Link>
      <h1 className={styles.title}>{page.title}</h1>
      {page.subtitle && <p className={styles.subtitle}>{page.subtitle}</p>}
      <div
        className={styles.body}
        dangerouslySetInnerHTML={{ __html: page.html }}
      />
    </article>
  )
}
