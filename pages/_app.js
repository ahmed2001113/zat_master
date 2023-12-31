import client from '@/src/utls/apolloConfigrations/apolloClient';
 import { FetchCategoriesStart } from '@/src/store/categories/category.action';
import { persistor, store } from '@/src/store/store';
import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import { Provider } from 'react-redux';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { PersistGate } from 'redux-persist/integration/react';
import { checkUserSession } from '@/src/store/user/user.actions';
 import { ApolloProvider } from '@apollo/client';
 import { useRouter } from 'next/router';
import LoadingImage from '@/src/components/customsComponents/image';
import { useEffect, useState } from 'react';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
 config.autoAddCss = false;
 import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev";
import Message from '@/src/components/message/message';
import ErrorBoundary from '@/src/components/errorrhandling/ErrorBoundary';
 if (process.env.NODE_ENV === 'development') {
 
 }
 loadDevMessages();
 loadErrorMessages();
  export default function App({ Component, pageProps }) {
const router = useRouter()

   const [loading,setLoading]=useState();

 
  
useEffect(()=>{

   router.events.on("routeChangeStart",(url)=>{
      ;
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
      setLoading(true)
   })
   router.events.on("routeChangeComplete",(url)=>{
      ;
      setLoading(false)
   })
   router.events.on("routeChangeError",(url)=>{
      ;
      setLoading(false)
   })
   document.body.scrollTop = 0;
   document.documentElement.scrollTop = 0;
   store.dispatch(FetchCategoriesStart())
 store.dispatch(checkUserSession())
},[])

   
  return <>
  

{
   loading?<LoadingImage/>:null
}

  <Provider store={store}>
<PayPalScriptProvider options={{
   "clientId":`Ae_63-g9AhOXT0ukqZYdnJV1VMvFtrWJlZHEPKD5y3MAlrdnRCpKGsgU51H4mqC6yPKg41d7isYp5gwl`
    
}}>
  <ApolloProvider client={client}>

     <PersistGate  persistor={persistor}>
<ErrorBoundary > 

  <Component {...pageProps} />
</ErrorBoundary>
  <Message/>

  </PersistGate>
     </ApolloProvider>
  </PayPalScriptProvider>

  </Provider>
  <div className={`follow_us`}>
<p className={`text_ver`}>Follow Us On </p>
<div className="icons">
<i className="fa-brands fa-instagram"></i>
</div>
<div className="icons"><i className="fa-brands fa-facebook-f"></i></div>
  </div>

  </>
}
