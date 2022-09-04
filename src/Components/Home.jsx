import React from 'react'
import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'
import { useState } from 'react';
import { useEffect } from 'react';
import Continets from './Continents';
import Languages from './Languages';

const countriesQuery = gql`
  query {
    countries {
      code
      name
      capital
      currency
      continent{ 
        name 
      }
      languages{ 
        name 
      }
      emoji
    }
  }`

export default function Home() {
  const [input, setInput] = useState('')
  const [search,setSearch] = useState([])
  const[countries,setCountries] = useState([])
  const[group,setGroup] = useState('continent')
  const {data, loading} = useQuery(countriesQuery)

  useEffect(() => {
    if(data && data.countries){
      setCountries(data.countries)
    }
  },[countries, data, search, input])

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
        setSearch([])
      }else{
        setSearch(countries.filter(country => country.name.includes(e.target.value)))
      }
    }

    if(group === 'continent'){
      const continents = search.length ? [...new Set(search?.map(country => (country.continent.name)))] : ""
      const groupContinent = search.length ? 
        continents.map(cont => (search.filter(country => country.continent.name.includes(cont)))) :
        []
  
      return(
        <div>
          <input type='text' value={input} onChange={(e) => handleChange(e)}/>
          <div>
            <h3>Group by: </h3>
            <button onClick={() => setGroup('continent')}>Continent</button>
            <button onClick={() => setGroup('language')}>Language</button>
          </div>
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
      search.forEach(country => country.languages.forEach(language => {
        if(!languages.includes(language.name)){
          languages.push(language.name)
        }
      }));
      const groupLanguages = languages.map(language => (search.filter(country => country.languages.find(lang => lang.name === language))))
      return (
        <div>
          <input type='text' value={input} onChange={(e) => handleChange(e)}/>
          <div>
            <h3>Group by: </h3>
            <button onClick={() => setGroup('continent')}>Continent</button>
            <button onClick={() => setGroup('language')}>Language</button>
          </div>
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
