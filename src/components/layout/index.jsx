 import CartDrawer from "../cartDrawer/cartDrawer";
import PreviewComponent from "../previewComponent";
import Mainfooter from "./mainFooter";
import MainHeader from "./mainHeader";
import { useEffect } from "react";
import Seo from "../seo";
import Head from "next/head";
import WishListDrawer from "../wishlistcomponents/wishlistdrawer";
import Message from "../message/message";
import { useDispatch, useSelector } from "react-redux";
import { GlobalSelector } from "@/src/store/global/globalStore.Selector";
import { GlobalActions } from "@/src/store/global/globalStore.slice";
 
 
function RootLayout({children, headerFooter,seo,uri}) {
    const dispatch  = useDispatch()
 	const { header, footer } = headerFooter?.data || {};
 

    useEffect(()=>{
        function myFunction(x) {
            if (x.matches) { // If media query matches

                dispatch(GlobalActions.setIsMatch(true))
         } else {
            dispatch(GlobalActions.setIsMatch(false))

            }
          }
          
          const  x = window.matchMedia("(max-width: 700px)")
          myFunction(x) // Call listener function at run time
          x.addListener(myFunction);
       
    },[])
  return (

    <>
    				<Seo seo={ seo || {} } uri={ uri || '' }/>
<Head>
 
</Head>
    <MainHeader header={header}/>

    <main className="  mx-auto  " > 
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