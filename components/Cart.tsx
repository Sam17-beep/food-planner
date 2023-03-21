import React from 'react'
import ArticleCard from './ArticleCard'
import Article from '../types/article'

interface Props {
  cart: Article[]
  addToCart: (article: Article) => void
}

const Cart = ({ cart, addToCart }: Props) => {
  const sumCart = cart.reduce((sum, obj) => {
    return sum + obj.current_price
  }, 0)
  let sumEco = 0
  cart.forEach((article) => {
    if (article.original_price !== null)
      sumEco += article.original_price - article.current_price
  })

  return (
    <>
      <h2 className="text-2xl text-white">Panier</h2>
      <div id="info" className="text-white flex justify-between">
        <p className="">
          {cart.length} article{cart.length > 1 ? 's' : ''} pour une valeur de{' '}
          {sumCart.toFixed(2)}$
        </p>
        <p className=" text-xs"> economie de {sumEco.toFixed(2)}$**</p>
      </div>
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
    </>
  )
}

export default Cart
