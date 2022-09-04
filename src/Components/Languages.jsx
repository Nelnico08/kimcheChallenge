import React from 'react'
import Country from './Country'

export default function Languages({ allCountries }) {
  return (
    <div>
        {
          allCountries && allCountries?.map(country => (
            <Country
              key={country.code}
              name={country.name}
              capital={country.capital}
              continent={country.continent}
              emoji={country.emoji}
            />
          ))
        }
    </div>
  )
}
