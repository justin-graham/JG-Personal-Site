import { useState } from 'react'
import Link from 'next/link'
import type { MenuItem } from '@/lib/types'
import menuData from '@/content/menu.json'
import styles from './MacMenu.module.css'

interface MacMenuProps {
  onClose: () => void
}

function MenuItemLink({
  item,
  onClose,
}: {
  item: MenuItem
  onClose: () => void
}) {
  if (item.external) {
    return (
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.menuItemLink}
        onClick={onClose}
      >
        {item.label}
      </a>
    )
  }
  return (
    <Link href={item.href || '/'} className={styles.menuItemLink} onClick={onClose}>
      {item.label}
    </Link>
  )
}

function MenuList({
  items,
  level = 0,
  onClose,
}: {
  items: MenuItem[]
  level?: number
  onClose: () => void
}) {
  const [activeSubmenu, setActiveSubmenu] = useState<number | null>(null)

  return (
    <div
      className={`${styles.menu} ${level === 0 ? styles.menuTopLevel : styles.submenu}`}
    >
      {items.map((item, i) => {
        if (item.divider) {
          return <hr key={`div-${i}`} className={styles.divider} />
        }

        const hasChildren = item.children && item.children.length > 0

        return (
          <div
            key={`${item.label}-${i}`}
            className={styles.menuItem}
            onMouseEnter={() => hasChildren && setActiveSubmenu(i)}
            onMouseLeave={() => setActiveSubmenu(null)}
          >
            {hasChildren ? (
              <>
                <span>{item.label}</span>
                <span className={styles.chevron}>&#9656;</span>
                {activeSubmenu === i && (
                  <MenuList
                    items={item.children!}
                    level={level + 1}
                    onClose={onClose}
                  />
                )}
              </>
            ) : (
              <MenuItemLink item={item} onClose={onClose} />
            )}
          </div>
        )
      })}
    </div>
  )
}

export default function MacMenu({ onClose }: MacMenuProps) {
  return (
    <>
      <div className={styles.overlay} onClick={onClose} />
      <MenuList items={menuData.items as MenuItem[]} onClose={onClose} />
    </>
  )
}
