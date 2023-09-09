import gql from "graphql-tag";

export const ProductsDataQuery = gql`
query productPrice($category:[String]){
  products(first: 1000,where:{categoryIn: $category}) {
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