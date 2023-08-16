import gql from "graphql-tag";

export const CheckOutProduct = gql`

query Product($id: ID!) {
    product(id: $id, idType: ID) {
      name
      slug
      averageRating
  
      image {
        altText
        caption
        id
        srcSet(size: MEDIUM)
        sourceUrl(size: MEDIUM)
      }
      content(format: RAW)
    }
  }
`