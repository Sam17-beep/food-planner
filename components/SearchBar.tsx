import React, { useState } from 'react'
import { useRouter } from 'next/router'
import * as api from '../api/store'
import { useArticles } from '../context/state'
interface Props {}

const SearchBar = ({}: Props) => {
  const [search, setSearch] = useState('')
  const { setArticles } = useArticles()
  const router = useRouter()
  const options = [
    { value: 'metro', label: 'Metro' },
    { value: 'iga', label: 'IGA' },
    { value: 'superC', label: 'Super C' },
    { value: 'provigo', label: 'Provigo' },
    { value: 'maxi', label: 'Maxi' },
    { value: 'walmart', label: 'Walmart' },
  ]
  const [loading, setLoading] = useState(false)

  const [selected, setSelected] = useState<boolean[]>(
    Array(options.length).fill(false)
  )

  const onStoreClick = (e: any) => {
    const index = options.findIndex(
      (option) => option.label === e.target.innerHTML
    )
    const newSelected = [...selected]
    newSelected[index] = !newSelected[index]
    setSelected(newSelected)
  }

  const submitHandler = (e: any) => {
    setLoading(true)
    e.preventDefault()
    const stores = []
    for (let i = 0; i < selected.length; i++) {
      if (selected[i]) {
        stores.push(options[i].value)
      }
    }

    const articles = search.split(',').map((item) => item.trim())
    console.log(articles)

    api.getArticlesFromStores(stores, articles, 'g1w4v9').then((res) => {
      setArticles(res)
      setLoading(false)
      router.push('/Result')
    })
  }

  return (
    <div id="searchBar">
      <form className="flex flex-col gap-4" onSubmit={submitHandler}>
        <div className="flex gap-x-2 max-xl:max-w-lg">
          <input
            type="text"
            className="w-full h-12 rounded-[10px] bg-white/20 text-white px-4"
            placeholder="Chercher un aliment!"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <input
            type="submit"
            value="Rechercher"
            className={
              'bg-white/20 text-white h-12 rounded-[10px] px-2' +
              (search === '' || !selected.includes(true)
                ? ' text-white/20'
                : '')
            }
            disabled={search === '' || !selected.includes(true)}
          />
        </div>
      </form>

      <div className="flex xl:justify-between max-xl:max-w-lg flex-wrap xl:gap-x-1 max-xl:justify-between">
        {options.map((option, index) => {
          return (
            <button
              className={`p-2 mt-3 border-red-500 border rounded first:ml-0 last:mr-0 text-white ${
                selected[index] ? 'bg-red-500' : 'bg-white/20'
              }`}
              onClick={onStoreClick}
              key={option.value}
            >
              {option.label}
            </button>
          )
        })}
      </div>
      <p className=" text-white text-center">{loading ? 'loading' : ''}</p>
    </div>
  )
}

export default SearchBar
