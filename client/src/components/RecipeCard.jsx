const RecipeCard = (props) => {
  return (
    <div className="recipe card" onClick={() => props.onClick(props.id)}>
      <div className="img-wrapper">
        <img src={props.image} alt="Recipe Image" />
      </div>
      <h3>{props.name.toUpperCase()}</h3>
      <p>{props.totalTime}</p>
      <p>{props.yield}</p>
    </div>
  )
}

export default RecipeCard
