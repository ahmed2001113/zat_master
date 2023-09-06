import gql from "graphql-tag";

export const PRODUCTS_QUERY =gql`query{
    products(first: 6,  where: { type: SIMPLE}) {
      nodes {
        id
        slug
        name
        description
        shortDescription
        productId
        image {
          altText
          srcSet
          sourceUrl
          title
          uri
          id
        }
       
      
        ... on SimpleProduct {
          price(format: RAW)
          regularPrice(format: RAW)
          stockStatus
          status
          stockQuantity
          onSale
          manageStock
          galleryImages{
            nodes{
              sourceUrl
              altText
              srcSet
            }
          }
        }
      } 
    }
  }`