import { useState, useEffect } from 'react'
import IngredientForm from './IngredientForm'

const IngredientCard = (props) => {
  const ing = props.ingredient
  const [ingredient, setIngredient] = useState(ing)

  const initialState = (
    <div className="recipe-card" onClick={() => editCard()}>
      <div className="img-wrapper">
        <img src={ingredient.image} alt="Recipe Image" />
      </div>
      <h3>{ingredient.name}</h3>
      <p>{ingredient.quantity}</p>
      <p>{ingredient.unit}</p>
      <p>{ingredient.perishable}</p>
    </div>
  )

  const [cardState, setCardState] = useState(initialState)

  const revertCard = (response) => {
    setIngredient(response)
    console.log(ingredient)
    setTimeout(() => {
      console.log(ingredient)
      setCardState(initialState)
    }, 2000)
  }

  const editCard = () => {
    setCardState(<IngredientForm ing={ingredient} revertCard={revertCard} />)
  }

  return <div>{cardState}</div>
}

export default IngredientCard
