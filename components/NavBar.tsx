import React from 'react'
import { useRouter } from 'next/router'

const NavBar = () => {
  const [typeDeRecherche, setTypeDeRecherche] = React.useState('article')
  const router = useRouter()

  const clickHandler = () => {
    if (typeDeRecherche === 'article') {
      setTypeDeRecherche('repas')
      // router.push('/repas')
    } else {
      setTypeDeRecherche('article')
      // router.push('/Result')
    }
  }

  return (
    <div className="flex items-center  text-white p-5 justify-between border-b select-none">
      <div className="text-xl">Food planner</div>

      <div className="" onClick={clickHandler}>
        Recherche par{' '}
        <span className="font-extrabold">{`${typeDeRecherche}`}</span>
      </div>
    </div>
  )
}

export default NavBar
