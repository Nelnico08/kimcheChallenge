import React from 'react'
import { CountriesContainer } from '../styles/Countries.style'
import Country from './Country'

export default function Continets({  allCountries }) {


  return (
  <CountriesContainer>
      {
        allCountries && allCountries?.map(country => (
          <Country
            key={country.code}
            name={country.name}
            capital={country.capital}
            languages={country.languages}
            currency={country.currency}
            emoji={country.emoji}
          />
        ))
      }
  </CountriesContainer>
  )
}
