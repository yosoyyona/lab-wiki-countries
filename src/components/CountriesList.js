import React from 'react'
import { Link } from 'react-router-dom'

const CountriesList = ({countries}) => {
  return (
    
    <div className="col-5" style={{maxHeight: "90vh", overflow: "scroll"}}>
      <div className="list-group">
        {
          countries &&
          countries.map((country) => {
            return (
              <Link className="list-group-item list-group-item-action text-start"
                to={`/${country.alpha3Code}`} key={country.alpha2Code}>
                <img className="mx-2" width="20" src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt={country.alpha2Code} />
                {country.name.common}
              </Link>
            )
          })
        }
      </div>
    </div>

  )
}

export default CountriesList