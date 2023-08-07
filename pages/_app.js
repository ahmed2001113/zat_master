'use client'
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
 config.autoAddCss = false;
 export default function App({ Component, pageProps }) {
   store.dispatch(FetchCategoriesStart())

  return <>
  
  <Provider store={store}>
    <PersistGate  persistor={persistor}>

  <Component {...pageProps} />
  </PersistGate>
  </Provider>

  </>
}
