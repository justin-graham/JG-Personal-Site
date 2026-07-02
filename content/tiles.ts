import type { LinkTile, ProjectTile, SpotifyTile, TileItem } from '@/lib/types'

const spotifyPlaylists: SpotifyTile[] = [
  {
    id: 'p1',
    kind: 'spotify',
    url: 'https://open.spotify.com/playlist/18rvgMchDrBkukT9HiGWbk',
    embedSrc:
      'https://open.spotify.com/embed/playlist/18rvgMchDrBkukT9HiGWbk?utm_source=generator',
    title: 'Playlist 1',
  },
  {
    id: 'p2',
    kind: 'spotify',
    url: 'https://open.spotify.com/playlist/3hkpDQVsAygpiocOKbdsda',
    embedSrc:
      'https://open.spotify.com/embed/playlist/3hkpDQVsAygpiocOKbdsda?utm_source=generator',
    title: 'Playlist 2',
  },
  {
    id: 'p3',
    kind: 'spotify',
    url: 'https://open.spotify.com/playlist/0j0F3sgTHFclXCnNn0cUnL',
    embedSrc:
      'https://open.spotify.com/embed/playlist/0j0F3sgTHFclXCnNn0cUnL?utm_source=generator',
    title: 'Playlist 3',
  },
  {
    id: 'p4',
    kind: 'spotify',
    url: 'https://open.spotify.com/playlist/37i9dQZEVXd3cXhqMoxPez',
    embedSrc:
      'https://open.spotify.com/embed/playlist/37i9dQZEVXd3cXhqMoxPez?utm_source=generator',
    title: 'Playlist 4',
  },
]

const projectTiles: ProjectTile[] = [
  {
    id: 'prompt-and-circumstance',
    kind: 'project',
    url: 'https://justin-graham.github.io/prompt-and-circumstance/',
    title: 'The Invisible Workforce',
    kicker: 'Prompt and Circumstance',
    description:
      'A research artifact on AI labor market measurement and the workers missing from chat-first data.',
    imageSrc: '/prompt-circumstance-hero-poster.jpg',
    imageAlt: 'Illustrated robots working across physical tasks',
    cta: 'Open project',
  },
]

const linkTiles: LinkTile[] = [
  {
    id: 'gleech',
    kind: 'link',
    url: 'https://www.gleech.org/',
    title: 'Gleech',
    source: 'gleech.org',
  },
  {
    id: 'airfoil',
    kind: 'link',
    url: 'https://ciechanow.ski/airfoil/',
    title: 'Airfoil',
    source: 'Bartosz Ciechanowski',
  },
  {
    id: 'illustrated-transformer',
    kind: 'link',
    url: 'https://jalammar.github.io/illustrated-transformer/',
    title: 'The Illustrated Transformer',
    source: 'Jay Alammar',
  },
  {
    id: 'scaling-book',
    kind: 'link',
    url: 'https://jax-ml.github.io/scaling-book/conclusion/',
    title: 'The Scaling Book',
    source: 'JAX ML',
  },
  {
    id: 'robotic-hand-wristband',
    kind: 'link',
    url: 'https://news.mit.edu/2026/wristband-enables-wearers-control-robotic-hand-with-own-movements-0325',
    title: 'Wristband Control for Robotic Hands',
    source: 'MIT News',
  },
  {
    id: 'decision-making',
    kind: 'link',
    url: 'https://www.newyorker.com/magazine/2019/01/21/the-art-of-decision-making',
    title: 'The Art of Decision-Making',
    source: 'The New Yorker',
  },
  {
    id: 'sky-blue',
    kind: 'link',
    url: 'https://explainers.blog/posts/why-is-the-sky-blue/',
    title: 'Why Is the Sky Blue?',
    source: 'Explainers',
  },
  {
    id: 'nine-things',
    kind: 'link',
    url: 'http://edwardpackard.com/wp-content/uploads/2025/09/Nine-Things-I-Learned-in-Ninety-Years.pdf',
    title: 'Nine Things I Learned in Ninety Years',
    source: 'Edward Packard',
  },
  {
    id: 'fast',
    kind: 'link',
    url: 'https://patrickcollison.com/fast',
    title: 'Fast',
    source: 'Patrick Collison',
  },
  {
    id: 'champion-rival',
    kind: 'link',
    url: 'https://tombrady.com/posts/every-champion-needs-a-rival',
    title: 'Every Champion Needs a Rival',
    source: 'Tom Brady',
  },
  {
    id: 'gervais-principle',
    kind: 'link',
    url: 'https://www.ribbonfarm.com/2009/10/07/the-gervais-principle-or-the-office-according-to-the-office/',
    title: 'The Gervais Principle',
    source: 'Ribbonfarm',
  },
  {
    id: 'sauna',
    kind: 'link',
    url: 'https://localmile.org/trumpkins-notes-on-building-a-sauna/',
    title: 'Notes on Building a Sauna',
    source: 'Local Mile',
  },
  {
    id: 'which-year',
    kind: 'link',
    url: 'https://whichyr.com/',
    title: 'Which Year',
    source: 'Photo Year Guessing Game',
  },
  {
    id: 'cheese-tapping',
    kind: 'link',
    url: 'https://www.cheeseprofessor.com/blog/cheese-wheel-tapping',
    title: 'Why Tap a Wheel of Cheese?',
    source: 'The Cheese Professor',
  },
  {
    id: 'cities-and-ambition',
    kind: 'link',
    url: 'https://www.paulgraham.com/cities.html',
    title: 'Cities and Ambition',
    source: 'Paul Graham',
  },
  {
    id: 'circle-animals',
    kind: 'link',
    url: 'https://www.dorithegiant.com/2016/05/13-animals-made-from-13-circles.html',
    title: '13 Animals Made From 13 Circles',
    source: 'Dori the Giant',
  },
  {
    id: 'beautiful-physics-paragraph',
    kind: 'link',
    url: 'https://www.reddit.com/r/explainlikeimfive/comments/ga39ic/eli5_can_someone_help_translate_whats_been_called/',
    title: 'The Most Beautiful Paragraph in Physics',
    source: 'Reddit ELI5',
  },
  {
    id: 'oxman',
    kind: 'link',
    url: 'https://oxman.com/',
    title: 'OXMAN',
    source: 'oxman.com',
  },
  {
    id: 'brain-food',
    kind: 'link',
    url: 'https://www.forkingpaths.co/p/brain-food-590/comments',
    title: 'Comments - Brain Food',
    source: 'Brian Klaas',
  },
]

const tileOrder = [
  'p1',
  'airfoil',
  'illustrated-transformer',
  'prompt-and-circumstance',
  'gleech',
  'scaling-book',
  'p2',
  'robotic-hand-wristband',
  'decision-making',
  'sky-blue',
  'nine-things',
  'fast',
  'p3',
  'champion-rival',
  'gervais-principle',
  'sauna',
  'which-year',
  'cheese-tapping',
  'cities-and-ambition',
  'p4',
  'circle-animals',
  'beautiful-physics-paragraph',
  'oxman',
  'brain-food',
] as const

const byId = new Map<string, TileItem>(
  [...spotifyPlaylists, ...projectTiles, ...linkTiles].map((tile) => [tile.id, tile])
)

const tiles: TileItem[] = tileOrder.map((id) => {
  const tile = byId.get(id)
  if (!tile) {
    throw new Error(`Missing tile configuration for id: ${id}`)
  }
  return tile
})

export default tiles
