const express = require('express')
const cors = require('cors')
const axios = require('axios')

const PORT = process.env.PORT || 3001

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/npi-search', (req, res) => {
  const searchParams = {
    first_name: req.query.first_name,
    last_name: req.query.last_name,
    enumeration_type: req.query.enumeration_type,
    taxonomy_description: req.query.taxonomy_description,
    number: req.query.number,
    city: req.query.city,
    state: req.query.state,
    postal_code: req.query.postalCode,
    limit: 50 // limit to 50 results by default
  }

  axios
    .get('https://npiregistry.cms.hhs.gov/api/?version=2.1', {
      params: searchParams
    })
    .then((response) => {
      res.send(response.data)
    })
    .catch((error) => {
      console.log(error)
      res.status(500).send('An error occurred while searching for NPI records.')
    })
})

app.get('/results/:number', (req, res) => {
  const number = req.params.number
  const url = `https://npiregistry.cms.hhs.gov/api/?version=2.1&number=${number}`
  axios
    .get(url)
    .then((response) => {
      res.send(response.data)
    })
    .catch((error) => {
      console.log(error)
      res.status(500).send('An error occurred while searching for NPI records.')
    })
})

app.listen(PORT, () => console.log(`Server Running On Port ${PORT} . . . `))
