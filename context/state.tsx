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
