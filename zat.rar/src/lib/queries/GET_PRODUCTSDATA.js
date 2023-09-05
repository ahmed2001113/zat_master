import gql from "graphql-tag";

export const ProductsDataQuery = gql`
query{
    products(first: 1000) {
      nodes {
           ... on SimpleProduct {
          price(format: RAW)
        }
        productCategories {
          nodes {
            slug
            name
          }
        }
      }
      
    }
  }`