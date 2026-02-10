import Link from 'next/link'
import type { LinkItem } from '@/lib/types'
import styles from './LinkList.module.css'

interface LinkListProps {
  items: LinkItem[]
}

export default function LinkList({ items }: LinkListProps) {
  return (
    <section id="links" className={styles.section}>
      <ul className={styles.list}>
        {items.map((link) => (
          <li key={link.slug} className={link.isHeader ? styles.header : styles.item}>
            {link.isHeader ? (
              <span className={styles.headerText}>{link.title}</span>
            ) : link.href?.startsWith('/') ? (
              <Link href={link.href}>
                {link.title}
                <span className={styles.arrow}>&rarr;</span>
              </Link>
            ) : link.href ? (
              <a href={link.href} target="_blank" rel="noopener noreferrer">
                {link.title}
                <span className={styles.arrow}>&rarr;</span>
              </a>
            ) : (
              <Link href={`/${link.slug}`}>
                {link.title}
                <span className={styles.arrow}>&rarr;</span>
              </Link>
            )}
          </li>
        ))}
      </ul>
    </section>
  )
}
