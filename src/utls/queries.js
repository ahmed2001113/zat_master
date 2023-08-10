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
 