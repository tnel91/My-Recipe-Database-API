const RecipeSearch = (props) => {
  return (
    <div>
      <h2>Recipe Search</h2>
      <form id="searchForm" onSubmit={props.handleSubmit}>
        <div>
          <label htmlFor="searchType">Search by:</label>
          <select id="searchType" onChange={props.handleChange}>
            <option value="Name">Name</option>
            <option value="Ingredients">Ingredients</option>
          </select>
        </div>
        <div>
          <label htmlFor="query"> Search for: </label>
          <input
            id="query"
            type="text"
            onChange={props.handleChange}
            value={props.query}
            placeholder="Search Recipes"
            required
          />
        </div>
        <div>
          <button type="submit">Find Recipes</button>
        </div>
      </form>
    </div>
  )
}

export default RecipeSearch
