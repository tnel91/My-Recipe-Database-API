const RecipeCard = (props) => {
  return (
    <div className="recipe card" onClick={() => props.onClick(props.id)}>
      <div className="img-wrapper">
        <img src={props.image} alt="Recipe Image" />
      </div>
      <h3>{props.name.toUpperCase()}</h3>
      <div className="recipe-card-info">
        <p>{props.totalTime}</p>
        <p>{props.yield}</p>
      </div>
    </div>
  )
}

export default RecipeCard
