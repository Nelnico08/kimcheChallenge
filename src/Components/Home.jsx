import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { useState } from 'react';
import { useEffect } from 'react';
import Continets from './Continents';
import Languages from './Languages';
import SearchBar from './SearchBar';
import { countriesQuery } from '../countries/queryCountries';

export default function Home() {
  const [input, setInput] = useState('')
  const [countrySearch,setcountrySearch] = useState([])
  const[countries,setCountries] = useState([])
  const[group,setGroup] = useState('continent')
  const {data, loading} = useQuery(countriesQuery)

  useEffect(() => {
    if(data && data.countries){
      setCountries(data.countries)
    }
  },[countries, data, countrySearch, input])

  if(loading === true){
    return <p>Loading ...</p>
  }
  if(data && data.countries){

    const handleChange = (e) => {
      const str = e.target.value;
      let strSplit = str.toLowerCase().split(' ');
      const exceptions = ["and","the","of"]
      const result = strSplit.map(word =>{
        const formattedWord = exceptions.indexOf(word) === -1 ?
          word.charAt(0).toUpperCase() + word.slice(1) : word;
        return formattedWord
      });
      const formatedStr = result.join(' ')
      setInput(formatedStr)
      if(e.target.value === ''){
        setcountrySearch([])
      }else{
        setcountrySearch(countries.filter(country => country.name.includes(e.target.value)))
      }
    }

    const handleClick = (event) => {
      setGroup(event)
    }

    if(group === 'continent'){
      const continents = countrySearch.length ? [...new Set(countrySearch?.map(country => (country.continent.name)))] : ""
      const groupContinent = countrySearch.length ? 
        continents.map(cont => (countrySearch.filter(country => country.continent.name.includes(cont)))) :
        []
  
      return(
        <div>
          <SearchBar 
            input={input}
            handleChange={handleChange}
            handleClick={handleClick}
            group={group}
          />
          {
            groupContinent.length ? groupContinent.map((elem,index) =>(
              <div key={index}>
                <h1>{elem[0].continent.name}</h1>
                <Continets 
                  allCountries={elem}
                />
              </div>
            )) : <div></div>
          }
        </div>
      )
    }else{
      const languages = [];
      countrySearch.forEach(country => country.languages.forEach(language => {
        if(!languages.includes(language.name)){
          languages.push(language.name)
        }
      }));
      const groupLanguages = languages.map(language => (countrySearch.filter(country => country.languages.find(lang => lang.name === language))))
      return (
        <div>
          <SearchBar 
            input={input}
            handleChange={handleChange}
            handleClick={handleClick}
            group={group}
          />
          <div>
            {
              groupLanguages.length ? groupLanguages.map((elem,index) =>(
                <div key={index}>
                  <h1>{languages[index]}</h1>
                  <Languages 
                    allCountries={elem}
                  />
                </div>
              )) : <div></div>
            } 
          </div>
        </div>
      )
    }
  }
}
