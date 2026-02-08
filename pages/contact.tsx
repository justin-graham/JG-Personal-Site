import Head from 'next/head'
import GlobalHeader from '@/components/GlobalHeader'
import ChatUI from '@/components/ChatUI'

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact — Justin Graham</title>
        <meta
          name="description"
          content="Send Justin Graham a message."
        />
      </Head>
      <GlobalHeader />
      <main>
        <ChatUI />
      </main>
    </>
  )
}
