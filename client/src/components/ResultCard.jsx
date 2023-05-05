const ResultCard = (props) => {
  console.log(props)

  return (
    <div className="result-card">
      <p>NPI: {props.number}</p>
      <p>Name: {props.basic.first_name} {props.basic.last_name}</p>
      <p>
        Address: {props.addresses[0].address_1},{' '}
        {props.addresses[0].city}, {props.addresses[0].state}{' '}
        {props.addresses[0].postal_code}
      </p>
      <p>Phone: {props.addresses[0].telephone_number}</p>
      <p>Primary Taxonomy: {props.taxonomies[0].desc}</p>
    </div>
  )
}

export default ResultCard