import gql from "graphql-tag";

export const productCategoriesBySlug = gql`
query Product_Category($first: Int,
  $after: String, $before: String, $last: Int,
  $minPrice: Float, $maxPrice: Float,
  $stockStatues: [StockStatusEnum], 
  $onSale: Boolean, $category: [String],
  $orderby: [ProductsOrderbyInput], 
  $slug: [String]) {
  productCategories
    (where:{slug:$slug ,parent: 0,hideEmpty: true}){
      
    nodes {
      
      name
      description
      image {
        id
        sourceUrl
        altText
        srcSet
      }
      products(
      first: $first
    after: $after
    before: $before
    last: $last
    
    where: {minPrice: $minPrice, maxPrice: 
      $maxPrice, onSale: $onSale, stockStatus: 
      $stockStatues, categoryIn: $category,
        orderby:$orderby
        }
      ) {
            pageInfo {
      hasNextPage
      endCursor
      hasPreviousPage
      startCursor
    }
       nodes{
            title
            name
            slug
            productId
            shortDescription,
            ... on SimpleProduct {
              price(format: RAW)
              regularPrice(format: RAW)
              stockStatus
              status
              stockQuantity
              onSale
              manageStock
            }
            id
            averageRating
            slug
            description
            galleryImages {
              nodes {
                sourceUrl
                altText
                srcSet
              }
            }
            image {
              uri
              title
              srcSet
              sourceUrl
            }
          }
        
      }
    }
  }
}`
 