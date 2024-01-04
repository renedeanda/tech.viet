import '../css/styles.css';
import '../semantic/dist/semantic.min.css';
import { AppProps } from 'next/app';
import { Nunito } from 'next/font/google'

const nunito = Nunito({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={nunito.className}>
      <Component {...pageProps} />
    </main>
  )
}