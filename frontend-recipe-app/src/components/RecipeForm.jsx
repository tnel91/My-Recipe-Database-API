import { useState } from 'react'

const RecipeForm = () => {
  const initialState = {
    name: '',
    description: '',
    yield: '',
    totalTime: '',
    ingredients: [],
    instructions: '',
    photo: '',
    url: '',
    notes: ''
  }
  const [formState, setFormState] = useState(initialState)

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    // axios logic here?
    console.log(formState)
    setFormState(initialState)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Recipe Name:</label>
          <input
            id="name"
            type="text"
            onChange={handleChange}
            value={formState.name}
          ></input>
        </div>
        <div>
          <label>Description:</label>
          <input
            id="description"
            type="field"
            onChange={handleChange}
            value={formState.description}
          ></input>
        </div>
        <div>
          <label>Yield:</label>
          <input
            id="yield"
            type="text"
            onChange={handleChange}
            value={formState.yield}
          ></input>
        </div>
        <div>
          <label>Total Time:</label>
          <input
            id="totalTime"
            type="text"
            onChange={handleChange}
            value={formState.totalTime}
          ></input>
        </div>
        <div>
          <label>Ingredients:</label>
          <input
            id="ingredients"
            type="field"
            onChange={handleChange}
            value={formState.ingredients}
          ></input>
        </div>
        <div>
          <label>Instructions:</label>
          <input
            id="instructions"
            type="field"
            onChange={handleChange}
            value={formState.instructions}
          ></input>
        </div>
        <div>
          <label>Photo</label>
          <input
            id="photo"
            type="text"
            onChange={handleChange}
            value={formState.photo}
          ></input>
        </div>
        <div>
          <label>URL:</label>
          <input
            id="url"
            type="text"
            onChange={handleChange}
            value={formState.url}
          ></input>
        </div>
        <div>
          <label>Notes</label>
          <input
            id="notes"
            type="text"
            onChange={handleChange}
            value={formState.notes}
          ></input>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default RecipeForm
