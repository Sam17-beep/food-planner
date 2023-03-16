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
    e.preventDefault()
    const stores = []
    for (let i = 0; i < selected.length; i++) {
      if (selected[i]) {
        stores.push(options[i].value)
      }
    }

    api.getArticleFromStores(stores, search, 'g1w4v9').then((res) => {
      setArticles(res.sort((a, b) => a.current_price - b.current_price))
      router.push('/Result')
    })
  }

  return (
    <div id="searchBar">
      <form className="flex flex-col gap-4" onSubmit={submitHandler}>
        <div className="flex justify-between gap-2">
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

      <div className="flex justify-between">
        {options.map((option, index) => {
          return (
            <button
              className={`p-2 m-3 border-red-500 border rounded first:ml-0 last:mr-0 text-white ${
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
    </div>
  )
}

export default SearchBar
