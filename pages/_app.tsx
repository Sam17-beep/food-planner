import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ArticlesContext, CartContext } from '../context/state'
import { useState } from 'react'
import Article from '../types/article'

function MyApp({ Component, pageProps }: AppProps) {
  const [articles, setArticles] = useState<Article[]>([])
  const [cart, setCart] = useState<Article[]>([])
  return (
    <CartContext.Provider value={{ cart, setCart }}>
      <ArticlesContext.Provider value={{ articles, setArticles }}>
        <div className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-900 w-screen h-screen fixed ">
          <Component {...pageProps} />
        </div>
      </ArticlesContext.Provider>
    </CartContext.Provider>
  )
}

export default MyApp
