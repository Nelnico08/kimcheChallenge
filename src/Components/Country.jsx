import React from 'react'

export default function Country({ name, capital, continent, languages, emoji }) {
  return (
    <div>
        <div>
          <div>{emoji}</div>
          <h3>{name}</h3>
        </div>
        <p>Capital: {capital}</p>
        <div>
          {
            languages === undefined ?
              <p>Continent: {continent.name}</p> :
              <p>Languages: {languages?.map(language => language.name).join(' - ')}</p>
          }
        </div>
    </div>
  )
}
