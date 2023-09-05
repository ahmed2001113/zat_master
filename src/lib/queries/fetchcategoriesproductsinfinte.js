import gql from "graphql-tag";

export const ProductsInfinteScroll= gql`
query getProducts($first: Int, $after: String, $before: String, 
  $last: Int, $minPrice: Float, $maxPrice: Float, $stockStatues: [StockStatusEnum], 
  $onSale: Boolean, $category: [String], $orderby: [ProductsOrderbyInput]) {
  products(
    first: $first
    after: $after
    before: $before
    last: $last
    where: {minPrice: $minPrice, maxPrice: $maxPrice, 
      onSale: $onSale, stockStatus: $stockStatues, 
      categoryIn: $category, orderby: $orderby,
      type: SIMPLE}
  ) {
    pageInfo {
      hasNextPage
      endCursor
      hasPreviousPage
      startCursor
    }
    nodes {
      id
      slug
      name
      shortDescription
      productId
      description
      averageRating
      reviewCount
      productCategories {
        nodes {
          name
        }
      }
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
        stockQuantity
        onSale
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