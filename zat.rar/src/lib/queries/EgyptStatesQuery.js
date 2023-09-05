import gql from "graphql-tag";

export const EgyptStateQuery = gql`

query {
    allowedCountryStates(country: EG){
      code
      name
      
    }
  }`