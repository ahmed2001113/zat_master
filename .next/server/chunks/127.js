"use strict";
exports.id = 127;
exports.ids = [127];
exports.modules = {

/***/ 4127:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Fk: () => (/* binding */ GET_CATEGORIES),
/* harmony export */   NT: () => (/* binding */ PRODUCTS_QUERY)
/* harmony export */ });
/* unused harmony exports PRODUCT_BY_ID, All_PRODUCTS_QUERY, Categories_query, Categories_query_all */
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(825);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);


const PRODUCTS_QUERY = (graphql_tag__WEBPACK_IMPORTED_MODULE_0___default())`query{
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
}`;
const PRODUCT_BY_ID = (graphql_tag__WEBPACK_IMPORTED_MODULE_0___default())`query Product($id: ID!) {
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
}`;
const All_PRODUCTS_QUERY = (graphql_tag__WEBPACK_IMPORTED_MODULE_0___default())`query{
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
}`;
const Categories_query = (graphql_tag__WEBPACK_IMPORTED_MODULE_0___default())`query{

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
   

}`;
const GET_CATEGORIES = graphql_tag__WEBPACK_IMPORTED_MODULE_0__.gql`
 
  {
    productCategories(last: 10, where: {hideEmpty: true}) {
      nodes {
        slug
        children {
          nodes {
            slug
          }
        }
      }
    }
  }
    
`;
const Categories_query_all = (graphql_tag__WEBPACK_IMPORTED_MODULE_0___default())`query{


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
 

}`;


/***/ })

};
;