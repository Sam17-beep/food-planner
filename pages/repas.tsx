import React, { useState } from 'react'
import RepasList from '../components/RepasList'
import RepasForm from '../components/RepasForm'

const repas = () => {
  const [buttonClicked, setButtonClicked] = useState(false)
  return (
    <div>
      {buttonClicked && <RepasForm />}
      <div className="flex">
        <button
          className=" grow m-3 p-2 bg-transparent border border-white text-white rounded"
          onClick={() => setButtonClicked(!buttonClicked)}
        >
          {buttonClicked ? 'Annuler' : 'Ajouter un repas'}
        </button>
      </div>
      <RepasList />
    </div>
  )
}

export default repas
