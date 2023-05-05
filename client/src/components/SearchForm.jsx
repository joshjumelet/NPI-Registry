const SearchForm = ({ searchParams, handleClearSearch, handleSearchInputChange, handleSearchSubmit}) => {

  return (
    <div className="search">
      <form onSubmit={handleSearchSubmit}>
        <input
          type="text"
          name="first_name"
          placeholder="First Name"
          onChange={handleSearchInputChange}
          value={searchParams.first_name}
        />
        <input
          type="text"
          name="last_name"
          placeholder="Last Name"
          onChange={handleSearchInputChange}
          value={searchParams.last_name}
        />
        <input
          type="text"
          name="enumeration_type"
          placeholder="Enumeration Type"
          onChange={handleSearchInputChange}
          value={searchParams.enumeration_type}
        />
        <input
          type="text"
          name="number"
          placeholder="NPI Number"
          onChange={handleSearchInputChange}
          value={searchParams.number}
        />
        <input
          type="text"
          name="taxonomy_description"
          placeholder="Taxonomy Description"
          onChange={handleSearchInputChange}
          value={searchParams.taxonomy_description}
        />
        <input
          type="text"
          name="city"
          placeholder="City"
          onChange={handleSearchInputChange}
          value={searchParams.city}
        />
        <input
          type="text"
          name="state"
          placeholder="State"
          onChange={handleSearchInputChange}
          value={searchParams.state}
        />
        <input
          type="text"
          name="postal_code"
          placeholder="Postal Code"
          onChange={handleSearchInputChange}
          value={searchParams.postal_code}
        />
        <button type="submit">Search</button>
        <button type="button" onClick={handleClearSearch}>Clear</button>
      </form>
    </div>
  )
}

export default SearchForm
