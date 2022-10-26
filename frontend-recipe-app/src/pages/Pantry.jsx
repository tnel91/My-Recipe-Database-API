import axios from 'axios'
import { useState, useEffect } from 'react'

import IngredientCard from '../components/IngredientCard'
import PantrySearch from '../components/PantrySearch'
import PantryForm from '../components/PantryForm'

const Pantry = () => {
  const [ingredients, setIngredients] = useState([])

  return (
    <div>
      <PantrySearch />
      <h1>Pantry</h1>
      <PantryForm />
      <IngredientCard />
    </div>
  )
}

export default Pantry
