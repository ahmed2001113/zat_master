import gql from "graphql-tag";

export const ProductPathsQuery = gql`
query{
    products(first: 1000) {
      nodes {
          id 
         
      }
      
    }
  }`