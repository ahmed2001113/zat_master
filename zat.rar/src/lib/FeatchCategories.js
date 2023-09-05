import   client from"../utls/apolloConfigrations/apolloClient";
 import { CategoryName } from "./queries/getcategoriesNames";
export async function FetchCategories(){

    const AllCategories= await client.query({query:CategoryName});

    
     return AllCategories?.data?.productCategories?.nodes



}  

