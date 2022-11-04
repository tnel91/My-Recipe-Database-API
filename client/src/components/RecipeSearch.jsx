const RecipeSearch = (props) => {
  return (
    <form id="searchForm" onSubmit={props.handleSubmit}>
      <div>
        <label htmlFor="searchType">Search by:</label>
        <select
          className="pointer"
          id="searchType"
          onChange={props.handleChange}
        >
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
  )
}

export default RecipeSearch
