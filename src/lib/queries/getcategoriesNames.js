import gql from "graphql-tag";

export const CategoryName = gql`
 query GetRootProductCategoriesAndProducts {
    productCategories( last:10, where: {parent: 0,hideEmpty: true}) {
           nodes{
               id
        slug
        name
          
   
      }
      
    
    }
  }`