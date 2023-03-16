import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ArticlesContext } from '../context/state'
import { useState } from 'react'
import Article from '../types/article'

function MyApp({ Component, pageProps }: AppProps) {
  const [articles, setArticles] = useState<Article[]>([])
  return (
    <ArticlesContext.Provider value={{ articles, setArticles }}>
      <div className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-900 w-screen h-screen ">
        <Component {...pageProps} />
      </div>
    </ArticlesContext.Provider>
  )
}

export default MyApp
