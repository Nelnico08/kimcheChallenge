import { gql } from 'apollo-boost'

export const countriesQuery = gql`
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