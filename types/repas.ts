import { randomUUID } from 'crypto'
import Article from './article'

export default class Repas {
  articles: { possibleArticle: Article[]; quantity: number }[]
  id: string
  name: string

  constructor(
    articles: { possibleArticle: Article[]; quantity: number }[],
    name: string
  ) {
    this.articles = articles
    this.id = randomUUID()
    this.name = name
  }
}
