import { useState } from 'react'
import PantryForm from './PantryForm'

const IngredientCard = (props) => {
  const ing = props.ingredient

  const [cardState, setCardState] = useState(
    <div className="recipe-card" onClick={() => editCard()}>
      <div className="img-wrapper">
        <img src={ing.image} alt="Recipe Image" />
      </div>
      <h3>{ing.name}</h3>
      <p>{ing.quantity}</p>
      <p>{ing.unit}</p>
      <p>{ing.perishable}</p>
    </div>
  )

  const editCard = () => {
    setCardState(<PantryForm ing={ing} />)
  }

  return <div>{cardState}</div>
}

export default IngredientCard
