import React from 'react'
import { Button, GroupSection, H3, Input, SearchBarContainer } from '../styles/SearchBar.Style'

export default function SearchBar({ input, handleChange, handleClick, group }) {
  return (
    <SearchBarContainer>
      <Input 
        type='text' 
        value={input} 
        onChange={(e) => handleChange(e)} 
        placeholder='Search a country...'
      />
      <GroupSection>
        <H3>Group by</H3>
        <Button onClick={() => handleClick('continent')} active={group === 'continent' ? 'true' : 'false'}>Continent</Button>
        <Button onClick={() => handleClick('language')} active={group === 'language' ? 'true' : 'false'}>Language</Button>
      </GroupSection>
    </SearchBarContainer>
  )
}
