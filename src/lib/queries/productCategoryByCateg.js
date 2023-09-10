import gql from "graphql-tag";

export const ProductCategoryByCategory = gql`
query Product_Category($first: Int, $after: String, $before: String, $last: Int, $minPrice: Float, $maxPrice: Float, $stockStatues: [StockStatusEnum], $onSale: Boolean, $category: [String], $orderby: [ProductsOrderbyInput]) {
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
      productCategories{
       nodes{
         name
         id
         count
     
         
       }
     }
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
   }`