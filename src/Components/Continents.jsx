import React from 'react'
import Country from './Country'

export default function Continets({  allCountries }) {


  return (
  <div>
      {
        allCountries && allCountries?.map(country => (
          <Country
            key={country.code}
            name={country.name}
            capital={country.capital}
            languages={country.languages}
            emoji={country.emoji}
          />
        ))
      }
  </div>
  )
}
