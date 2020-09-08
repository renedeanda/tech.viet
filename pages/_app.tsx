import '../css/styles.css';
import '../semantic/dist/semantic.min.css';
import { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}