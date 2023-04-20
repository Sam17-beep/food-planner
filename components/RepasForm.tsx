import React, { useState } from 'react'

const RepasForm = () => {
  const [articlesForRepas, setArticlesForRepas] = useState([])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('submit')
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="flex">
          <div className="basis-1/2">
            <h2>Liste d'articles</h2>
          </div>
          <div className="basis-1/2">
            <h2>Informations</h2>
          </div>
        </div>
      </form>
    </div>
  )
}

export default RepasForm
