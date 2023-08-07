import   client from"../utls/apolloConfigrations/apolloClient";
import { Categories_query_all } from "../utls/queries";
export async function FetchCategories(){

    const AllCategories= await client.query({query:Categories_query_all});
     return AllCategories?.data?.productCategories?.nodes



}  

