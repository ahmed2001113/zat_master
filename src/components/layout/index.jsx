import CartDrawer from "../cartDrawer/cartDrawer";
import PreviewComponent from "../previewComponent";
import Mainfooter from "./mainFooter";
import MainHeader from "./mainHeader";

 
function RootLayout({children, headerFooter}) {
	const { header, footer } = headerFooter?.data || {};
 
  return (

    <>
    <MainHeader header={header}/>
    
    <main className="  mx-auto py-4 min-h-50vh">
					{children}
				</main>

<PreviewComponent/>
      <CartDrawer/>
<Mainfooter footer={footer}/>
    </>


    )
}

export default RootLayout