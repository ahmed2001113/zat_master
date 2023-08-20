import { getPage } from "@/src/utls/functions/get-page-seo";
import CartDrawer from "../cartDrawer/cartDrawer";
import PreviewComponent from "../previewComponent";
import Mainfooter from "./mainFooter";
import MainHeader from "./mainHeader";
import { useEffect } from "react";
import Seo from "../seo";
import Head from "next/head";
import WishListDrawer from "../wishlistcomponents/wishlistdrawer";
import { ApolloProvider } from "@apollo/client";
import client from "@/src/utls/apolloConfigrations/apolloClient";

 
function RootLayout({children, headerFooter,seo,uri}) {
 	const { header, footer } = headerFooter?.data || {};
 
  return (

    <>
    				<Seo seo={ seo || {} } uri={ uri || '' }/>
<Head>
  Home
</Head>
    <MainHeader header={header}/>
    <ApolloProvider client={client}>

    <main className="  mx-auto  ">
					{children}
				</main>
</ApolloProvider>
<PreviewComponent/>
      <CartDrawer/>
<Mainfooter footer={footer}/>
<WishListDrawer/>
    </>


    )
}

export default RootLayout