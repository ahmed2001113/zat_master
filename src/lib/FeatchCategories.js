import   client from"../utls/apolloConfigrations/apolloClient";
import { Categories_query_all } from "../utls/queries";
import { CategoryName } from "./queries/getcategoriesNames";
export async function FetchCategories(){

    const AllCategories= await client.query({query:CategoryName});

    
     return AllCategories?.data?.productCategories?.nodes



}  

