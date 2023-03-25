import React from 'react'
import Article from '../types/article'

interface Props {
  article: Article
  addToCart: (article: Article) => void
  inCart?: boolean
  showImage: boolean
}

const ArticleCard = ({ article, addToCart, inCart, showImage }: Props) => {
  const handleClick = () => {
    addToCart(article)
  }

  if (article.name.includes('|')) {
    article.name = article.name.split('|')[0]
  }

  const valide_from_day = new Date(article.valid_from).getDate()
  const valide_from_month = new Date(article.valid_from).getMonth()
  const valide_to_day = new Date(article.valid_to).getDate()
  const valide_to_month = new Date(article.valid_to).getMonth()

  return (
    <div
      className={`p-5 border-b text-white hover:bg-white/20 lowercase ${
        inCart ? 'bg-white/30' : ''
      } `}
      onClick={handleClick}
    >
      <h2 className="flex justify-between mb-2">
        <p className=" text-2xl first-letter:uppercase ">{article.name}</p>
        <p className=" text-gray-400 text-xs">{article.merchant_name}</p>
      </h2>
      <div className="flex">
        <div className=" basis-2/3">
          <p className="">{article.sale_story}</p>
          {article.current_price ? (
            <p className="">
              {article.pre_price_text}
              {article.current_price}${article.post_price_text}
            </p>
          ) : (
            ''
          )}
          <p className="first-letter:uppercase text-xs">
            valide du {valide_from_day}/{valide_from_month} jusqu'au{' '}
            {valide_to_day}/{valide_to_month}
          </p>
        </div>
        <div>
          {showImage ? (
            <img
              src={article.clean_image_url}
              alt="article image"
              className=""
            />
          ) : (
            ''
          )}
        </div>
      </div>
    </div>
  )
}

export default ArticleCard
