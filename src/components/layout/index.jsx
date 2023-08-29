 import CartDrawer from "../cartDrawer/cartDrawer";
import PreviewComponent from "../previewComponent";
import Mainfooter from "./mainFooter";
import MainHeader from "./mainHeader";
import { useEffect } from "react";
import Seo from "../seo";
import Head from "next/head";
import WishListDrawer from "../wishlistcomponents/wishlistdrawer";
import Message from "../message/message";
 
 
function RootLayout({children, headerFooter,seo,uri}) {
   
 	const { header, footer } = headerFooter?.data || {};
 
  return (

    <>
    				<Seo seo={ seo || {} } uri={ uri || '' }/>
<Head>
  Home
</Head>
    <MainHeader header={header}/>

    <main className="  mx-auto  ">
					{children}
				</main>

 <PreviewComponent/>
      <CartDrawer/>
<Mainfooter footer={footer}/>
<WishListDrawer/>
    </>


    )
}

export default RootLayout