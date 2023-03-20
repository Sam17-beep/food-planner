import React from 'react'
import ArticleCard from './ArticleCard'
import Article from '../types/article'

interface Props {
  cart: Article[]
  addToCart: (article: Article) => void
}

const Cart = ({ cart, addToCart }: Props) => {
  return (
    <>
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
    </>
  )
}

export default Cart
