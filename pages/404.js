import { HEADER_FOOTER_ENDPOINT } from "@/src/EndPoints";
import SwippeCentered from "@/src/components/customsComponents/SwippeCentered";
import RootLayout from "@/src/components/layout";
import client from "@/src/utls/apolloConfigrations/apolloClient";
import ModifyObjectOrArray from "@/src/utls/functions/ObjectArrayChange";
import { PRODUCTS_QUERY } from "@/src/utls/queries";
import axios from "axios";
import Head from "next/head";

export default function Custom404({footer_header,products,seo}) {
    return(

        <>
         <RootLayout headerFooter={footer_header} seo={seo}>
   <Head>
        <title>
          {`404`}
        </title>
      </Head>
  <div className="row container notFound" style={{margin:'auto'}}>
  <div className=" container  col-md-6">
    <h1>We can't locate that page. Try using the search icon or 
        navigation above to find what you're looking for.</h1>
    </div>
<div className="col-md-6">
<p className="assistant">
    NEED ASSISTANCE?
</p>
<p>
    Our Customer Service Representatives are available to help.
</p>
<div className="EmaiCall">
<p>Email:www.zat98.com</p>
<p>Call Us :0111316444</p>

</div>
</div>
  </div>
      <SwippeCentered  className="notfound_swippe" isHome={true} words={'Check out some of these most popular items'} products={products}/>
</RootLayout>
        </>
    )
  }


  
export const   getStaticProps = async( )=>{
    const footer_header = await axios.get(HEADER_FOOTER_ENDPOINT);
    let  productResults = [];
    let load=false;
     let seo = []
   try{
     const products =  await client.query({query:PRODUCTS_QUERY});
     console.warn(products)
     productResults =ModifyObjectOrArray( products?.data?.products?.nodes)
    ||[]
   load=false
    }catch(error){
     ;
     load=false
   }
   
 
   try {
     seo = await getPage('home');
   
   } catch (error) {
     
   }
    
    return   {
     props:{
       footer_header:footer_header?.data||{},
       products:productResults||[],
        seo:seo[0]||[],
       load
      },
      revalidate:10
   
   }
   
   }
   