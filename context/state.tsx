import { createContext, useContext } from 'react'
import Article from '../types/article'

export type GlobalArticle = {
  articles: Article[]
  setArticles: (articles: Article[]) => void
}
export const ArticlesContext = createContext<GlobalArticle>({
  articles: [],
  setArticles: () => {},
})

export function useArticles() {
  return useContext(ArticlesContext)
}

export type GlobalCart = {
  cart: Article[]
  setCart: (cart: Article[]) => void
}
export const CartContext = createContext<GlobalCart>({
  cart: [],
  setCart: () => {},
})
export function useCart() {
  return useContext(CartContext)
}
