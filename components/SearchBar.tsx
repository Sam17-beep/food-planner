import React, { Fragment, useState } from 'react'

const SearchBar: React.FC = () => {
  const [search, setSearch] = useState('')
  const [shopSelected, setShopSelected] = useState<string[]>([
    'metro',
    'iga',
    'superC',
    'provigo',
    'maxi',
    'walmart',
  ])

  const handleShopSelected = (value: string) => {
    if (shopSelected.includes(value)) {
      setShopSelected(shopSelected.filter((shop) => shop !== value))
    } else {
      setShopSelected([...shopSelected, value])
    }
  }

  const options = [
    { value: 'metro', label: 'Metro' },
    { value: 'iga', label: 'IGA' },
    { value: 'superC', label: 'Super C' },
    { value: 'provigo', label: 'Provigo' },
    { value: 'maxi', label: 'Maxi' },
    { value: 'walmart', label: 'Walmart' },
  ]

  return (
    <div>
      <form className="flex flex-col gap-4">
        <input
          type="text"
          className="w-full h-12 rounded-[10px] bg-white/20 text-white px-4"
          placeholder="Chercher un aliment!"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="flex justify-between">
          {options.map((option) => {
            return (
              <div className="flex" key={option.value}>
                <p>{option.label}</p>
                <input
                  type="checkbox"
                  value={option.value}
                  className="bg-white/20 text-white"
                  checked={shopSelected.includes(option.value)}
                  onChange={() => {
                    handleShopSelected(option.value)
                  }}
                />
              </div>
            )
          })}
          <input
            type="submit"
            value="Rechercher"
            className={
              'bg-white/20 text-white h-12 rounded-[10px] px-2' +
              (search === '' ? ' text-white/20' : '')
            }
            disabled={search === ''}
          />
        </div>
      </form>
    </div>
  )
}

export default SearchBar
