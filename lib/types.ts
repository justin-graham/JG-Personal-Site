export interface BioVariant {
  label: string
  text: string
}

export interface LinkItem {
  title: string
  slug: string
}

export interface TileItem {
  title: string
  description: string
  url: string
  color: string
  textColor: string
  span?: number
  icon?: string
}

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
