import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Anton, Inter, Lora } from 'next/font/google'

const anton = Anton({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-anton',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-lora',
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${anton.variable} ${inter.variable} ${lora.variable}`}>
      <Component {...pageProps} />
    </div>
  )
}
