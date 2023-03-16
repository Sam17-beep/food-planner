import axios from 'axios'
import Article from '../types/article'

const endpoint =
  'https://backflipp.wishabi.com/flipp/items/search?locale=fr-ca&'

export const getArticlesFromStore = async function (
  storeName: string,
  codePostal: string
): Promise<Article[]> {
  const res = await axios.get(
    `${endpoint}&postal_code=${codePostal}&q=${storeName}`
  )
  return await res.data.items
}

export const getArticle = async function (
  articleName: string,
  codePostal: string
): Promise<Article[]> {
  const res = await axios.get(
    `${endpoint}&postal_code=${codePostal}&q=${articleName}`
  )
  return await res.data.items
}

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
