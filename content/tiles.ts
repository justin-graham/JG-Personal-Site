import type { SpotifyTile, SubstackTile, TileItem } from '@/lib/types'

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

const substackPosts: SubstackTile[] = [
  {
    id: 's1',
    kind: 'substack',
    url: 'https://open.substack.com/pub/semuta/p/the-best-major-league-baseball-players?r=4singa&utm_campaign=post&utm_medium=web&showWelcomeOnShare=true',
    imageSrc: '/composed.jpeg',
    alt: 'The best major league baseball players',
  },
  {
    id: 's2',
    kind: 'substack',
    url: 'https://open.substack.com/pub/semuta/p/30-for-30?r=4singa&utm_campaign=post&utm_medium=web&showWelcomeOnShare=true',
    imageSrc: '/composed-2.jpeg',
    alt: '30 for 30',
  },
  {
    id: 's3',
    kind: 'substack',
    url: 'https://open.substack.com/pub/semuta/p/ask-sweet-people-sourdough-questions?r=4singa&utm_campaign=post&utm_medium=web&showWelcomeOnShare=true',
    imageSrc: '/composed-3.jpeg',
    alt: 'Ask sweet people sourdough questions',
  },
  {
    id: 's4',
    kind: 'substack',
    url: 'https://open.substack.com/pub/semuta/p/lessons-from-year-one-as-a-college?r=4singa&utm_campaign=post&utm_medium=web&showWelcomeOnShare=true',
    imageSrc: '/composed-4.jpeg',
    alt: 'Lessons from year one as a college',
  },
  {
    id: 's5',
    kind: 'substack',
    url: 'https://open.substack.com/pub/semuta/p/actually-i-just-want-a-faster-horse?r=4singa&utm_campaign=post&utm_medium=web&showWelcomeOnShare=true',
    imageSrc: '/composed-5.jpeg',
    alt: 'Actually I just want a faster horse',
  },
  {
    id: 's6',
    kind: 'substack',
    url: 'https://open.substack.com/pub/semuta/p/im-thankful-i-have-friends-i-can?r=4singa&utm_campaign=post&utm_medium=web&showWelcomeOnShare=true',
    imageSrc: '/composed-6.jpeg',
    alt: 'I am thankful I have friends I can',
  },
  {
    id: 's7',
    kind: 'substack',
    url: 'https://open.substack.com/pub/semuta/p/flashes-of-intuition?r=4singa&utm_campaign=post&utm_medium=web&showWelcomeOnShare=true',
    imageSrc: '/composed-7.jpeg',
    alt: 'Flashes of intuition',
  },
  {
    id: 's8',
    kind: 'substack',
    url: 'https://open.substack.com/pub/semuta/p/maxwells-demon-and-the-art-of-curating?r=4singa&utm_campaign=post&utm_medium=web&showWelcomeOnShare=true',
    imageSrc: '/composed-8.jpeg',
    alt: "Maxwell's demon and the art of curating",
  },
  {
    id: 's9',
    kind: 'substack',
    url: 'https://open.substack.com/pub/semuta/p/fundamentals-of-the-prc?r=4singa&utm_campaign=post&utm_medium=web&showWelcomeOnShare=true',
    imageSrc: '/composed-9.jpeg',
    alt: 'Fundamentals of the PRC',
  },
  {
    id: 's10',
    kind: 'substack',
    url: 'https://open.substack.com/pub/semuta/p/describe-coffee-to-me-the-flavor?r=4singa&utm_campaign=post&utm_medium=web&showWelcomeOnShare=true',
    imageSrc: '/composed-10.jpeg',
    alt: 'Describe coffee to me the flavor',
  },
  {
    id: 's11',
    kind: 'substack',
    url: 'https://open.substack.com/pub/semuta/p/most-jobs-are-useless-and-fake?r=4singa&utm_campaign=post&utm_medium=web&showWelcomeOnShare=true',
    imageSrc: '/composed-11.jpeg',
    alt: 'Most jobs are useless and fake',
  },
]

const tileOrder = [
  's1',
  's2',
  'p1',
  's3',
  's4',
  's5',
  'p2',
  's6',
  's7',
  'p3',
  's8',
  's9',
  's10',
  'p4',
  's11',
] as const

const byId = new Map<string, TileItem>([...spotifyPlaylists, ...substackPosts].map((tile) => [tile.id, tile]))

const tiles: TileItem[] = tileOrder.map((id) => {
  const tile = byId.get(id)
  if (!tile) {
    throw new Error(`Missing tile configuration for id: ${id}`)
  }
  return tile
})

export default tiles

