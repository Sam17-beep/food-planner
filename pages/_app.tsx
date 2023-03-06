import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-900">
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
