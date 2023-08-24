const { default: gql } = require("graphql-tag");

export const SearchPriceuery = gql    `
query productPrice($search:String!){
    products(first: 1000,where:{search:$search}) {
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