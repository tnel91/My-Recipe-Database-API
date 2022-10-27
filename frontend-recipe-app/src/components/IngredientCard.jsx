import { useState, useEffect } from 'react'

const IngredientCard = (props) => {
  const [cardState, setCardState] = useState(
    <div className="recipe-card" onClick={() => editCard()}>
      <div className="img-wrapper">
        <img src={props.image} alt="Recipe Image" />
      </div>
      <h3>{props.name}</h3>
      <p>{props.quantity}</p>
      <p>{props.unit}</p>
      <p>{props.perishable}</p>
    </div>
  )

  // const [formState, setFormState] = useState({
  //   name: props.name,
  //   quantity: props.quantity,
  //   unit: props.unit,
  //   perishable: props.perishable,
  //   image: props.image
  // })

  const [formState, setFormState] = useState({
    name: 'help',
    quantity: 'banana',
    unit: 'aaaaaa',
    perishable: 'ad',
    image: 'aaaAAAAAA'
  })

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('submitted')
  }

  const editCard = () => {
    console.log('editing card')
    setCardState(
      <div className="recipe-card">
        <h3>Editing Ingredient</h3>
        <form id="ingredientForm" onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            onChange={handleChange}
            value={formState.name}
          ></input>
          <label htmlFor="quantity">Quantity:</label>
          <input
            id="quantity"
            onChange={handleChange}
            value={formState.quantity}
          ></input>
          <label htmlFor="unit">Unit:</label>
          <input
            id="unit"
            onChange={handleChange}
            value={formState.unit}
          ></input>
          {/* <label htmlFor="perishable">Perishable:</label>
          <input
            id="perishable"
            value={formState.perishable}
            type="checkbox"
          ></input>
          <label htmlFor="image">Image:</label>
          <input
            id="image"
            onChange={handleChange}
            value={formState.image}
            type="url"
          ></input> */}
          <button type="submit">Edit</button>
        </form>
      </div>
    )
  }

  return <div>{cardState}</div>
}

export default IngredientCard
