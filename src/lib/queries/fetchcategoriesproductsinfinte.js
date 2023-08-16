import gql from "graphql-tag";

export const ProductsInfinteScroll= gql`
query getProducts($first: Int!, $after: String) {
  products(first: $first, after: $after) {
    pageInfo {
      hasNextPage
      endCursor
    }
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
        galleryImages {
          nodes {
            sourceUrl
            altText
            srcSet
          }
        }
      }
    }
  }
}
`