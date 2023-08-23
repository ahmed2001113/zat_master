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
import client from '@/src/utls/apolloConfigrations/apolloClient';
import { useRouter } from 'next/router';
import LoadingImage from '@/src/components/customsComponents/image';
import { useEffect, useState } from 'react';
 config.autoAddCss = false;
 export default function App({ Component, pageProps }) {
const router = useRouter()

   const [loading,setLoading]=useState();

 
  
useEffect(()=>{

   router.events.on("routeChangeStart",(url)=>{
      console.log("routerChangeStart");
      setLoading(true)
   })
   router.events.on("routeChangeComplete",(url)=>{
      console.log("routerChangeComplete");
      setLoading(false)
   })

},[])

   store.dispatch(FetchCategoriesStart())
 store.dispatch(checkUserSession())
  return <>
  

{
   loading?<LoadingImage/>:null
}
  <Provider store={store}>
  <ApolloProvider client={client}>

     <PersistGate  persistor={persistor}>

  <Component {...pageProps} />

  </PersistGate>
     </ApolloProvider>
  </Provider>

  </>
}
