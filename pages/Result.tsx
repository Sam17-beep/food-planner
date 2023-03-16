import React from 'react'
import { useArticles } from '../context/state'
import SearchBar from '../components/SearchBar'
import ArticleCard from '../components/ArticleCard'

const Result = () => {
  const { articles } = useArticles()

  return (
    <div className="h-screen flex">
      <div id="firstColumn" className="border-r-2 p-5 ">
        <div id="searchBar" className="w-[550px]">
          <SearchBar />
        </div>
      </div>
      <div
        id="secondColumn"
        className=" w-full p-5 overflow-y-scroll overflow-x-hidden"
      >
        {articles.length > 0 ? (
          articles.map((article) => (
            <ArticleCard article={article} key={article.id} />
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
