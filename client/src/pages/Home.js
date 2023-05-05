import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import SearchForm from '../components/SearchForm'
import ResultCard from '../components/ResultCard'

const Home = () => {
  const [searchParams, setSearchParams] = useState({
    first_name: '',
    last_name: '',
    enumeration_type: '',
    number: '',
    taxonomy_description: '',
    city: '',
    state: '',
    postal_code: '',
    limit: 50
  })
  const [searchResults, setSearchResults] = useState([])
  const [searched, toggleSearched] = useState(false)

  const handleSearchSubmit = (event) => {
    event.preventDefault()
    axios
      .get('http://localhost:3001/npi-search', {
        params: searchParams
      })
      .then((response) => {
        setSearchResults(response.data.results)
        toggleSearched(true)
      })
      .catch((error) => {
        console.log(error)
      })
  }
  console.log(searchResults)

  const handleSearchInputChange = (event) => {
    setSearchParams({
      ...searchParams,
      [event.target.name]: event.target.value
    })
  }

  const handleClearSearch = () => {
    setSearchParams({
      first_name: '',
      last_name: '',
      enumeration_type: '',
      number: '',
      taxonomy_description: '',
      city: '',
      state: '',
      postal_code: ''
    })
    window.location.reload()
  }

  return (
    <div>
      <h1>NPI Registry Search Tool</h1>
      <div className="search">
        <SearchForm
          searchParams={searchParams}
          handleSearchSubmit={handleSearchSubmit}
          handleSearchInputChange={handleSearchInputChange}
          handleClearSearch={handleClearSearch}
        />
        {searched && (
          <div>
            <h2>Search Results</h2>
            <section className="container-grid">
              {searchResults.map((result) => (
                <Link to={`/results/${result.number}`} key={result.number}>
                  <ResultCard {...result} />
                </Link>
              ))}
            </section>
          </div>
        )}
      </div>
    </div>
  )
}

export default Home
