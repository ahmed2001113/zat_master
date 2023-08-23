import { gql } from "apollo-boost";

export const GETCATEGORIES_WITH_NO_PARENT =gql`
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
 
    }
    
  
  }
}`