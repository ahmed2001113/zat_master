import gql from "graphql-tag";

export const CategoryPrice =gql`

query Products($slug: [String]) {

    productCategories(where:{slug:$slug}){
      nodes{
      name
        products{
          nodes{
            ...on SimpleProduct{
              price(format:RAW)
            }
          }
        }
      }
    }
  }`