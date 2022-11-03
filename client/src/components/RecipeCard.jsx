const RecipeCard = (props) => {
  const showDescription = () => {
    document.getElementById(props.id).style.display = ''
  }

  const hideDescription = () => {
    document.getElementById(props.id).style.display = 'none'
  }

  return (
    <div
      className="recipe card"
      onClick={() => props.onClick(props.id)}
      onMouseEnter={showDescription}
      onMouseLeave={hideDescription}
    >
      <div className="img-wrapper">
        <img src={props.image} alt="Recipe Image" />
      </div>
      <div className="card-h3-wrapper">
        <h3>{props.name.toUpperCase()}</h3>
      </div>
      <div className="recipe-card-info">
        <p>{props.totalTime}</p>
        <p>{props.yield}</p>
      </div>
      <div className="description" id={props.id} style={{ display: 'none' }}>
        <h3>Description:</h3>
        <p>{props.description}</p>
      </div>
    </div>
  )
}

export default RecipeCard
