import React from 'react'
import { useArticles, useCart } from '../context/state'
import SearchBar from '../components/SearchBar'
import Article from '../types/article'
import ResultList from '../components/ResultList'
import Cart from '../components/Cart'

const Result = () => {
  const { articles } = useArticles()
  const { cart, setCart } = useCart()

  const addToCart = (article: Article) => {
    if (cart.some((item) => item.id === article.id)) {
      setCart(cart.filter((item) => item.id !== article.id))
    } else {
      setCart([...cart, article])
    }
  }

  return (
    <div className="h-screen xl:flex max-xl:overflow-y-scroll">
      <div
        id="firstColumn"
        className="border-r-2 p-5 basis-1/3 overflow-y-scroll flex flex-col"
      >
        <div id="searchBar" className="">
          <SearchBar />
        </div>

        <div id="cart" className="mt-5">
          <Cart cart={cart} addToCart={addToCart} />
        </div>
        <div className="text-xs text-white/50 mt-10 self-end">
          **seulement les rabais en dollars
        </div>
      </div>
      <div
        id="secondColumn"
        className=" w-full p-5 overflow-y-scroll overflow-x-hidden basis-2/3"
      >
        <ResultList articles={articles} addToCart={addToCart} cart={cart} />
      </div>
    </div>
  )
}

export default Result
