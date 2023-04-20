import React from 'react'
import ArticleCard from './ArticleCard'
import Article from '../types/article'

interface Props {
  cart: Article[]
  addToCart: (article: Article, whatToDo?: string) => void
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

  const findOccurence = (article: Article) => {
    let count = 0
    cart.forEach((item) => {
      if (item.id === article.id) count++
    })
    return count
  }

  const removeDuplicates = (arr: Article[]) => {
    return arr.filter((item, index) => {
      return arr.indexOf(item) === index
    })
  }

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
        {removeDuplicates(cart).length > 0 ? (
          removeDuplicates(cart).map((article) => (
            <div className="flex">
              <div className="text-white">{findOccurence(article)}</div>
              <div className="grow">
                <ArticleCard
                  article={article}
                  key={article.id}
                  addToCart={addToCart}
                  showImage={false}
                />
              </div>
              <div className="flex flex-col py-1 gap-1">
                <button
                  className="w-10 bg-green-600 grow rounded"
                  onClick={() => addToCart(article, 'add')}
                >
                  +
                </button>
                <button
                  className="w-10 bg-red-600 grow rounded"
                  onClick={() => addToCart(article, 'remove')}
                >
                  -
                </button>
              </div>
            </div>
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
