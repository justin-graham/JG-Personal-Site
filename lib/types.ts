export interface BioVariant {
  text: string
}

export interface LinkItem {
  title: string
  slug: string
  href?: string
  isHeader?: boolean
  spaceBefore?: boolean
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

export interface ProjectTile extends BaseTile {
  kind: 'project'
  title: string
  kicker: string
  description: string
  imageSrc: string
  imageAlt: string
  cta: string
}

export interface LinkTile extends BaseTile {
  kind: 'link'
  title: string
  source: string
  previewSrc?: string
}

export type TileItem = SpotifyTile | ProjectTile | LinkTile

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
