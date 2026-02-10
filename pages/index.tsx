import Head from 'next/head'
import Link from 'next/link'
import HeroSection from '@/components/HeroSection'
import BioSection from '@/components/BioSection'
import LinkList from '@/components/LinkList'
import TilesSection from '@/components/TilesSection'
import GlobalHeader from '@/components/GlobalHeader'
import bioVariants from '@/content/bio-variants.json'
import links from '@/content/links.json'
import tiles from '@/content/tiles'

export default function Home() {
  return (
    <>
      <Head>
        <title>Justin Graham</title>
        <meta
          name="description"
          content="Justin Graham's Master Plan — builder, thinker, perpetually curious."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <GlobalHeader />
      <main>
        <HeroSection />
        <BioSection variants={bioVariants} />
        <LinkList items={links} />
        <TilesSection tiles={tiles} />
      </main>
      <footer
        style={{
          textAlign: 'center',
          padding: '48px 24px',
          fontFamily: 'var(--font-inter)',
          fontSize: '52px',
          fontWeight: 500,
          borderTop: '1px solid var(--color-border)',
        }}
      >
        <Link href="/contact" style={{ color: 'var(--color-text)', textDecoration: 'none' }}>
          Say Hello!
        </Link>
      </footer>
    </>
  )
}
