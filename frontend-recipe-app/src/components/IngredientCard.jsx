import { useState } from 'react'

const IngredientCard = (props) => {
  const [cardState, setCardState] = useState(
    <div>
      <div className="img-wrapper">
        <img src={props.image} alt="Recipe Image" />
      </div>
      <h3>{props.name}</h3>
      <p>{props.quantity}</p>
      <p>{props.unit}</p>
      <p>{props.perishable}</p>
    </div>
  )

  const initialState = {
    name: props.name,
    quantity: props.quantity,
    unit: props.unit,
    perishable: props.perishable,
    image: props.image
  }

  const [formState, setFormState] = useState(initialState)

  const handleSubmit = () => {
    console.log('submitted')
  }

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }

  const editCard = () => {
    setCardState(
      <div>
        <h3>Editing Ingredient</h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            value={formState.name}
            onChange={handleChange}
          ></input>
          <label htmlFor="quantity">Quantity:</label>
          <input
            id="quantity"
            value={formState.quantity}
            onChange={handleChange}
          ></input>
          <label htmlFor="unit">Unit:</label>
          <input
            id="unit"
            value={formState.unit}
            onChange={handleChange}
          ></input>
          <label htmlFor="perishable">Perishable:</label>
          <input
            id="perishable"
            value={formState.perishable}
            type="checkbox"
          ></input>
          <label htmlFor="image">Image:</label>
          <input
            id="image"
            value={formState.image}
            type="url"
            onChange={handleChange}
          ></input>
          <button type="submit">Edit</button>
        </form>
      </div>
    )
  }

  return (
    <div className="recipe-card" onClick={() => editCard(props.id)}>
      {cardState}
    </div>
  )
}

export default IngredientCard
