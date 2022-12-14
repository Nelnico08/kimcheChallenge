import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { useState } from 'react';
import { useEffect } from 'react';
import Continets from './Continents';
import Languages from './Languages';
import SearchBar from './SearchBar';
import { countriesQuery } from '../countries/queryCountries';
import { GroupContinent, H1 } from '../styles/Group.style';
import loader from '../images/loadingWorld.gif'
import { Loading } from '../styles/Loading.style';

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
    return (
      <Loading>
        <img src={loader} alt='Loading...'/>
      </Loading>
    )
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
          <GroupContinent>
            {
              groupContinent.length ? groupContinent.map((elem,index) =>(
                <div key={index}>
                  <H1>{elem[0].continent.name}</H1>
                  <Continets 
                    allCountries={elem}
                  />
                </div>
              )) : <div></div>
            }
          </GroupContinent>
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
          <GroupContinent>
            {
              groupLanguages.length ? groupLanguages.map((elem,index) =>(
                <div key={index}>
                  <H1>{languages[index]}</H1>
                  <Languages 
                    allCountries={elem}
                  />
                </div>
              )) : <div></div>
            } 
          </GroupContinent>
        </div>
      )
    }
  }
}
