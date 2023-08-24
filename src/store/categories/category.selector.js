import { createSelector } from "reselect";
 import groupObjects from "@/src/utls/functions/GroupSubCategoriesByparentName";



  export const categoriesSelectorReducer = (state)=>state.Categories
  ;



// export const SelectCategoriesLinks = createSelector([categoriesSelectorReducer],
//     ({categories})=>groupObjects(categories.filter(item=>item?.parent?.node?.name)) );
export const SelectCategoriesLinks = createSelector([categoriesSelectorReducer],
    ({categories})=> categories);

export const SpecifiedCategories = createSelector([categoriesSelectorReducer],
    ({categories})=>{

        const SpecifiedCategories = ["Shirts","Unisex Hoodes"];
        categories.filter(cat=>SpecifiedCategories.includes(cat?.name)).map(item=>({

            id:item.id,
            name:item.name,
            image:item.image,
            parent:item?.parent?.node?.name||'no_parent_exist',
            products:item?.products?.edges
            
              })) ||[]

})


