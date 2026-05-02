export interface BioVariant {
  text: string
}

export interface LinkItem {
  title: string
  slug: string
  href?: string
  isHeader?: boolean
}

interface BaseTile {
  id: string
  url: string
}

export interface SpotifyTile extends BaseTile {
  kind: 'spotify'
  embedSrc: string
  title: string
}

export interface SubstackTile extends BaseTile {
  kind: 'substack'
  imageSrc: string
  alt: string
}

export interface ProjectTile extends BaseTile {
  kind: 'project'
  title: string
  kicker: string
  description: string
  imageSrc: string
  imageAlt: string
  cta: string
}

export type TileItem = SpotifyTile | SubstackTile | ProjectTile

export interface MenuItem {
  label?: string
  href?: string
  divider?: boolean
  external?: boolean
  children?: MenuItem[]
}

export interface ReadingPage {
  title: string
  subtitle?: string
  html: string
}
