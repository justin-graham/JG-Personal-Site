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
          <li key={link.slug} className={styles.item}>
            <Link href={`/${link.slug}`}>
              {link.title}
              <span className={styles.arrow}>&rarr;</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
