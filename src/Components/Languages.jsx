import React from 'react'
import { CountriesContainer } from '../styles/Countries.style'
import Country from './Country'

export default function Languages({ allCountries }) {
  return (
    <CountriesContainer>
        {
          allCountries && allCountries?.map(country => (
            <Country
              key={country.code}
              name={country.name}
              capital={country.capital}
              continent={country.continent}
              emoji={country.emoji}
              currency={country.currency}
            />
          ))
        }
    </CountriesContainer>
  )
}
