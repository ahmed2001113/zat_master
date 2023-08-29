import gql from "graphql-tag";

export const ProductPage = gql`
query Product($id: ID!) {
  product(id: $id, idType: ID) {
    commentCount
    commentStatus
    name
    slug
    id
    databaseId
    productCurrency
    shortDescription
    reviewCount
    productId
    description
    image {
      id
      sourceUrl(size: LARGE)
      altText
      srcSet(size: LARGE)
    }
    reviews(where: {status: "APPROVE", commentType: "Review"}) {
      averageRating
      edges {
        rating
        node {
          content
          id
          date
          author {
            node {
              name
              email
            }
          }
          id
          replies {
            edges {
              node {
                date
                status
                content
                author {
                  node {
                    id
                    avatar {
                      size
                      rating
                    }
                    name
                    email
                  }
                }
              }
            }
          }
        }
      }
    }
    galleryImages {
      nodes {
        id
        sourceUrl(size: LARGE)
        altText
        srcSet(size: LARGE)
      }
    }
    ... on SimpleProduct {
      price(format: RAW)
      averageRating
      stockStatus
      status
      stockQuantity
      onSale
      manageStock
      regularPrice(format: RAW)
      seo {
        metaKeywords
        fullHead
        title
        metaDesc
        schema {
          pageType
          articleType
          raw
        }
        breadcrumbs {
          url
          text
        }
      }
      productCategories {
        
        nodes {
          name
          products(first: 6 where:{type:SIMPLE }) {
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
      }
    }
    reviewsAllowed
    totalSales
  }
}
`