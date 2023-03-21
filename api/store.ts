import axios from 'axios'
import Article from '../types/article'

const endpoint =
  'https://backflipp.wishabi.com/flipp/items/search?locale=fr-ca&'

export const getArticleFromStores = async function (
  storeNames: string[],
  articleName: string,
  codePostal: string
): Promise<Article[]> {
  const res = await axios.get(
    `${endpoint}&postal_code=${codePostal}&q=${articleName}`
  )
  const articles = await res.data.items

  return await articles.filter((article: Article) => {
    let keepIt = false
    storeNames.forEach((storeName: string) => {
      if (
        storeName
          .toLocaleLowerCase()
          .includes(article.merchant_name.toLocaleLowerCase())
      ) {
        keepIt = true
      }
    })
    return keepIt
  })
}

export const getArticlesFromStores = async function (
  storeNames: string[],
  articleNames: string[],
  codePostal: string
): Promise<Article[]> {
  let articles: Article[] = []
  for (let i = 0; i < articleNames.length; i++) {
    const articleName = articleNames[i]
    const articlesFromStores = await getArticleFromStores(
      storeNames,
      articleName,
      codePostal
    )
    articles = [...articles, ...articlesFromStores]
  }
  return articles
}
