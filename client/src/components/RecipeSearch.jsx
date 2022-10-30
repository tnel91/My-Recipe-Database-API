const RecipeSearch = (props) => {
  return (
    <div>
      <h2>Recipe Search</h2>
      <form id="Search-form" onSubmit={props.handleSubmit}>
        <label htmlFor="searchType">Search by:</label>
        <select id="searchType" onChange={props.handleChange}>
          <option value="Name">Name</option>
          <option value="Ingredients">Ingredients</option>
        </select>
        <label htmlFor="query">Search for: </label>
        <input
          id="query"
          type="text"
          onChange={props.handleChange}
          value={props.query}
          placeholder="Search Recipes"
        />
        <button type="submit">Find Recipes</button>
      </form>
    </div>
  )
}

export default RecipeSearch
