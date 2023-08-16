import qql from 'graphql-tag'
import { gql } from 'graphql-tag';

export const PRODUCTS_QUERY =qql`query{
  products(last: 20) {
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
export const PRODUCT_BY_ID =qql`query Product($id: ID!) {
  product(id: $id, idType: ID) {
  productCategories{
    nodes{
      products{
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
      seo{
        metaKeywords
         fullHead 
         title 
         metaDesc 
          schema { # The schema data of this product in JSON format
                     pageType # The page type of this product (e.g. WebPage, Product, etc.)
                     articleType # The article type of this product (e.g. None, Article, etc.)
                     raw # The raw schema data in JSON-LD format
                   }
                breadcrumbs { # The breadcrumbs data of this product in JSON format
                     url # The URL of the breadcrumb
                     text # The text of the breadcrumb
                   }
       }
          
    
      ... on SimpleProduct {
        averageRating
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
    }
    
  }
  }
}`

export const GETCATEGORIES_WITH_NO_PARENT =qql`
query GetRootProductCategoriesAndProducts {
  productCategories( last:6, where: {parent: 0,hideEmpty: true}) {
         nodes{
             id
      slug
      name
	      image{
          sourceUrl
          altText
          title
          description
          srcSet
}
      products{
nodes {
      id
      slug
      name
      description
      shortDescription
      id
      image {
        altText
        srcSet
        sourceUrl
        title
        uri
        id
      }
     
    
      ... on SimpleProduct {
        averageRating
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
    }
    
  
  }
}`
export const All_PRODUCTS_QUERY =qql`query{
  products (last:100){
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


export const Categories_query= qql`query{

    productCategories (last:9) {
      nodes {
        name
        id
         parent {
          node {
            name
          }
        }
        image {
          altText
          srcSet
          sourceUrl
        }
        products {
          edges {
            node {
              title
              name
              slug
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
        }
      }
    }
   

}`
export const GET_CATEGORIES = gql`
{
    productCategories(last: 100) {
      nodes {
        slug
        
       children{
        nodes{
          slug
        }
      }
        }
      }
    }
    
`;

export const Categories_query_all= qql`query{


  productCategories {
    nodes {
      name
      id
      slug
       parent {
        node {
          slug
          image {
            id
            sourceUrl
            srcSet
            sizes
            parent {
              node {
                id
              }
            }
          }
          name
        }
      }
      image {
        altText
        srcSet
        sourceUrl
      }
      products {
        edges {
          node {
            title
            name
            slug
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
      }
    }
  }
 

}`


export const productCategoriesBySlug = gql`
query Product_Category($slug: [String] = null) {
  productCategories(where: {slug: $slug}) {
   
    nodes {
      name
      description
       image {
        id
        sourceUrl
        altText
        srcSet

      }
      products {
        edges {
          node {
            title
            name
            slug
             


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
            galleryImages{
              nodes{
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
  }
}`
 