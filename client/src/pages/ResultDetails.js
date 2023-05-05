import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

const ResultDetails = () => {
  let { number } = useParams()
  let navigate = useNavigate()

  const [npiData, setNpiData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchNpiData() {
      try {
        const response = await axios.get(
          `http://localhost:3001/results/${number}`
        )
        setNpiData(response.data.results[0]) // assuming the API returns an array of results
        console.log(response.data.results[0])
        setLoading(false)
        setError(null)
      } catch (error) {
        setNpiData(null)
        setLoading(false)
        setError('An error occurred while fetching NPI data.')
      }
    }
    fetchNpiData()
  }, [number])

  if (loading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>{error}</p>
  }

  if (!npiData) {
    return <p>No NPI data found.</p>
  }

  return (
    <div>
      <h1>Provider Information for {npiData.number}</h1>
      <h2>
        Dr. {npiData.basic.first_name} {npiData.basic.last_name}{' '}
        {npiData.basic.authorized_official_first_name}{' '}
        {npiData.basic.authorized_official_last_name}
      </h2>
      <p>
        Address: {npiData.addresses[0].address_1}, {npiData.addresses[0].city},{' '}
        {npiData.addresses[0].state}
      </p>
      <p>Taxonomy: {npiData.taxonomies[0].desc}</p>
      <div>
        <button onClick={() => navigate('/')} type="button">
          Back
        </button>
      </div>
    </div>
  )
}

export default ResultDetails
