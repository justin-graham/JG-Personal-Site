import Head from 'next/head'
import type { GetStaticPaths, GetStaticProps } from 'next'
import { getReadingContent, getReadingSlugs } from '@/lib/content'
import type { ReadingPage } from '@/lib/types'
import GlobalHeader from '@/components/GlobalHeader'
import ReadingLayout from '@/components/ReadingLayout'

interface ReadingPageProps {
  page: ReadingPage
}

export default function Reading({ page }: ReadingPageProps) {
  return (
    <>
      <Head>
        <title>{page.title} — Justin Graham</title>
        <meta
          name="description"
          content={page.subtitle || `${page.title} by Justin Graham`}
        />
      </Head>
      <GlobalHeader />
      <main style={{ paddingTop: 96 }}>
        <ReadingLayout page={page} />
      </main>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = getReadingSlugs()
  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<ReadingPageProps> = async ({
  params,
}) => {
  const page = await getReadingContent(params!.slug as string)
  return { props: { page } }
}
