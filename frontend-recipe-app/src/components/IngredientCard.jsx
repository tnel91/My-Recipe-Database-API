const IngredientCard = (props) => {
  return (
    <div>
      <h3>Ingredient</h3>
      <div className="img-wrapper">
        <img src={props.image} alt="Recipe Image" />
      </div>
      <h3>{props.name}</h3>
      <p>{props.totalTime}</p>
      <p>{props.yield}</p>
    </div>
  )
}

export default IngredientCard
