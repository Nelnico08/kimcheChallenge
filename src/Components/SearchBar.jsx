import React from 'react'

export default function SearchBar({ input, handleChange, handleClick }) {
  return (
    <div>
      <input 
        type='text' 
        value={input} 
        onChange={(e) => handleChange(e)} 
        placeholder='Search a country...'
      />
      <div>
        <h3>Group by: </h3>
        <button onClick={() => handleClick('continent')}>Continent</button>
        <button onClick={() => handleClick('language')}>Language</button>
      </div>
    </div>
  )
}
