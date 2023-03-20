import React from 'react'
import ArticleCard from './ArticleCard'
import Article from '../types/article'

interface Props {
  articles: Article[]
  addToCart: (article: Article) => void
  cart: Article[]
}

const ResultList = ({ articles, addToCart, cart }: Props) => {
  return (
    <>
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
    </>
  )
}

export default ResultList
