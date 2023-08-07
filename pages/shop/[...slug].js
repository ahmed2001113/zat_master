import { HEADER_FOOTER_ENDPOINT } from "@/src/EndPoints";
import RootLayout from "@/src/components/layout";
import Store from "@/src/storeModule/store";
import client from "@/src/utls/apolloConfigrations/apolloClient";
import { FormattingProductsArray } from "@/src/utls/functions/GroupSubCategoriesByparentName";
import { GET_CATEGORIES, productCategoriesBySlug } from "@/src/utls/queries";
import axios from "axios";
// import { getProductsData } from "@/src/utls/productCategories";
import gql from "graphql-tag";
import Image from "next/image";
import { useRouter } from "next/router"
import { useEffect } from "react";

const Cat = ({data,footer_header})=>{
  const {description,
    image,
    name ,products:{edges}} =data
    const formattingProducts =FormattingProductsArray(edges);
    console.log(formattingProducts)
  console.log(data)
const router = useRouter();

console.log(image)
const {slug =[] } = router.query;
console.log(data,slug)
//return array of params
useEffect(()=>{
// async function get  (){

// }
// get()
},[])
console.log(data)
    return(

        <>
  <RootLayout headerFooter={footer_header}>
    <div className="image_handler" > 

  <Image src={image?.sourceUrl||''} width={1900} sizes="100vh" srcSet={image?.srcSet} height={500}/>



    </div>
      <Store products={formattingProducts}/>
      </RootLayout>
        </>
    )
}


export default Cat


export async function getStaticProps ({params}) {
  const footer_header = await axios.get(HEADER_FOOTER_ENDPOINT);

	const { slug } = params || {};
  // this will return the last params in slug like women/dress will return dress
  const LastParam = slug.pop()
  // let slug = 'men'
let data = {}
  // productCategoriesBySlug
  try {

   const  {data:{productCategories:{nodes}  }}  = await client.query({
    query:productCategoriesBySlug ,
    variables:{slug:LastParam}
  });
 data =nodes[0]
  

  } catch (error) {
    console.log(error)
 }
    

    return{
        props:{
          data,
          footer_header:footer_header?.data,
          
        },

        // revalidate:1
         
    }


}
 
export async function getStaticPaths() {
  
    // Call the GraphQL server with the query
    const { data } = await client.query({
      query: GET_CATEGORIES
    });
   const categories = data?.productCategories?.nodes;
      let paths = [];
    for (const category of categories) {
      // Add the top-level category path
      paths.push({ params: { slug: [category.slug] } });
  
    //   Check if the category has any children
      if (category.children?.nodes.length > 0) {
        // Add the child category paths
        for (const childCategory of category.children?.nodes) {
          paths.push({ params: { slug: [category.slug, childCategory.slug] } });
        }
      }
    }
  
    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false };
  }