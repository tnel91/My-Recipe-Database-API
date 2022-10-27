import axios from 'axios'
import { useState, useEffect } from 'react'

import IngredientCard from '../components/IngredientCard'
import PantrySearch from '../components/PantrySearch'
import PantryForm from '../components/PantryForm'

const Pantry = () => {
  const [ingredients, setIngredients] = useState([])

  const getIngredients = async () => {
    console.log('aaaaaaaaaa')
    const ingredients = await axios
      .get('http://localhost:3001/api/pantry')
      .then((response) => {
        return response.data
      })
      .catch((error) => {
        console.log(error)
      })
    setIngredients(ingredients)
  }

  useEffect(() => {
    getIngredients()
  }, [])

  return (
    <div>
      <PantrySearch />
      <h1>Pantry</h1>
      <PantryForm />
      <section className="ingredient-grid">
        {ingredients.map((ingredient) => (
          <div key={ingredient._id}>
            <IngredientCard
              id={ingredient._id}
              name={ingredient.name}
              quantity={ingredient.quantity}
              unit={ingredient.unit}
              perishable={ingredient.perishable}
              image={ingredient.image}
            />
          </div>
        ))}
      </section>
    </div>
  )
}

export default Pantry
