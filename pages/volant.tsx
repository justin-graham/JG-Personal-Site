import Head from 'next/head'
import GlobalHeader from '@/components/GlobalHeader'

export default function Volant() {
  return (
    <>
      <Head>
        <title>VolantUAS — Justin Graham</title>
        <meta name="description" content="VolantUAS slide deck" />
      </Head>
      <GlobalHeader />
      <main
        style={{
          paddingTop: 96,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          minHeight: '100vh',
        }}
      >
        <iframe
          src="/volant-deck.pdf"
          style={{
            width: '100%',
            maxWidth: 960,
            height: 'calc(100vh - 120px)',
            border: 'none',
          }}
          title="VolantUAS Slide Deck"
        />
      </main>
    </>
  )
}
