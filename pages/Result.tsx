import React from 'react'
import { useArticles } from '../context/state'
import SearchBar from '../components/SearchBar'
import ArticleCard from '../components/ArticleCard'
import Article from '../types/article'
import ResultList from '../components/ResultList'
import Cart from '../components/Cart'

const Result = () => {
  const { articles } = useArticles()
  const [cart, setCart] = React.useState<Article[]>([])

  const addToCart = (article: Article) => {
    if (cart.some((item) => item.id === article.id)) {
      setCart(cart.filter((item) => item.id !== article.id))
    } else {
      setCart([...cart, article])
    }
  }

  return (
    <div className="h-screen flex">
      <div id="firstColumn" className="border-r-2 p-5 ">
        <div id="searchBar" className="w-[550px]">
          <SearchBar />
        </div>
        <div id="cart" className="mt-5">
          <Cart cart={cart} addToCart={addToCart} />
        </div>
      </div>
      <div
        id="secondColumn"
        className=" w-full p-5 overflow-y-scroll overflow-x-hidden"
      >
        <ResultList articles={articles} addToCart={addToCart} cart={cart} />
      </div>
    </div>
  )
}

export default Result
