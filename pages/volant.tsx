import Head from 'next/head'
import Image from 'next/image'
import GlobalHeader from '@/components/GlobalHeader'

export default function Volant() {
  const images = [
    { src: '/Volant1.png', alt: 'VolantUAS 1' },
    { src: '/Volant2.png', alt: 'VolantUAS 2' },
    { src: '/VolantSlides1.png', alt: 'VolantUAS Slides 1' },
    { src: '/VolantSlides2.png', alt: 'VolantUAS Slides 2' },
  ]

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
          gap: 32,
          paddingBottom: 64,
        }}
      >
        {images.map((img) => (
          <Image
            key={img.src}
            src={img.src}
            alt={img.alt}
            width={960}
            height={540}
            style={{ width: '100%', maxWidth: 960, height: 'auto' }}
          />
        ))}
      </main>
    </>
  )
}
