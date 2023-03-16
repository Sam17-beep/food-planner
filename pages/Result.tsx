import React from 'react'
import { useArticles } from '../context/state'
import SearchBar from '../components/SearchBar'
import ArticleCard from '../components/ArticleCard'
import Article from '../types/article'

const Result = () => {
  const { articles } = useArticles()
  const [cart, setCart] = React.useState<Article[]>([])

  const addToCart = (article: Article) => {
    if (cart.some((item) => item.id === article.id)) {
      setCart(cart.filter((item) => item.id !== article.id))
      console.log('removed')
    } else {
      setCart([...cart, article])
      console.log('added')
    }
  }

  return (
    <div className="h-screen flex">
      <div id="firstColumn" className="border-r-2 p-5 ">
        <div id="searchBar" className="w-[550px]">
          <SearchBar />
        </div>
        <div id="cart" className="mt-5">
          <h2 className="text-2xl text-white">Panier</h2>
          <div className="mt-5">
            {cart.length > 0 ? (
              cart.map((article) => (
                <ArticleCard
                  article={article}
                  key={article.id}
                  addToCart={addToCart}
                  showImage={false}
                />
              ))
            ) : (
              <div className="text-lg text-center h-full text-white">
                Rien dans le panier
              </div>
            )}
          </div>
        </div>
      </div>
      <div
        id="secondColumn"
        className=" w-full p-5 overflow-y-scroll overflow-x-hidden"
      >
        {articles.length > 0 ? (
          articles.map((article) => (
            <ArticleCard
              article={article}
              key={article.id}
              addToCart={addToCart}
              inCart={cart.some((item) => item.id === article.id)}
              showImage={true}
            />
          ))
        ) : (
          <div className="text-2xl text-center h-full text-white">
            Aucun article trouvé
          </div>
        )}
      </div>
    </div>
  )
}

export default Result
