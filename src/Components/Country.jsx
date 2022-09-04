import React from 'react'
import { CountryContainer, CountryName, Paragraph } from '../styles/Country.style'
import { H3 } from '../styles/SearchBar.Style'

export default function Country({ name, capital, continent, languages, emoji, currency }) {
  return (
    <CountryContainer>
        <CountryName>
          <H3>{name}</H3>
          <Paragraph type="emoji">{emoji}</Paragraph>
        </CountryName>
        <Paragraph type="description">Capital: {capital}</Paragraph>
        <div>
          {
            languages === undefined ?
              <Paragraph type="description">Continent: {continent.name}</Paragraph> :
              <Paragraph type="description">Languages: {languages?.map(language => language.name).join(' - ')}</Paragraph>
          }
        </div>
        <Paragraph type="description">Currency: {currency?.split(',').join(' ')}</Paragraph>
    </CountryContainer>
  )
}
