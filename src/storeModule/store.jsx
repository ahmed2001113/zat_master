import React,{useState} from 'react'
 import filter from '../../public/svgs/filter.svg'
import DropDownMenu from '../components/customsComponents/dropdowns/filter';
import styles from './store.module.css'
import SortDropDown from '../components/customsComponents/dropdowns/sort';
import { Sortoptions } from '../components/customsComponents/dropdowns/options';
import ProdutItemMain from '../components/products/productMain';
import Drawer from '../components/customsComponents/drawers/CustmDrawer';
import CheckboxLabels from '../components/customsComponents/checkbox/checkBox';
import { useEffect } from 'react';
import FilterDrawer from './filterDrawer';
import Image from 'next/image';
import { useRouter } from 'next/router';
 import { ProductsInfinteScroll } from '../lib/queries/fetchcategoriesproductsinfinte';
import { useQuery } from '@apollo/client';
 export default function Store({products=[],category='',...others}) {
  const router = useRouter();
  const {query}=router;
  console.log(query.filter)
  console.log(products)
  const [scroll, setScroll] = useState(false);
  const [isSorted,setIsortedValue]=useState('name');
 
  function Scroll() {
    const scrolls = document.body.scrollTop > 50 || 
    document.documentElement.scrollTop > 50;
    
    setScroll(scrolls)
  }
  
  useEffect(() => {
    function handleScroll() { return Scroll() };
    document.body.addEventListener("scroll", handleScroll);
    return () => {
      document.body.removeEventListener("scroll", handleScroll);
    }
  }, []);
 const [show,setShow]= useState(false)
  const [productData,setproducts] =useState(products||[]);
  console.log(productData)
  const [sort,SetSort]= useState('')
   const onChange = (e)=>{
   }
useEffect(()=>{
  if(query.filter==='new_arrival'){
    SetSort('new_arrival')
  }
  ()=>setproducts(products)
 },[query.filter])
 const onChangeSort =(e)=>{
  const {value} = e.target;
  SetSort(value) 
 };
 const showFilter  = ()=>{
   setShow(true);
  }
  useEffect(()=>{
    setproducts(products)
  },[products])
 useEffect(()=>{
 
  switch(sort){
    case  'priceAsc':
       const priceAsc = productData.sort((a,b)=>a.price-b.price);
      return setproducts(priceAsc.slice());
       
  
        case  'priceDESC':
          const priceDESC = productData.sort((a,b)=>b.price -a.price
          );
          return setproducts(priceDESC.slice())
  
        ;
        case  'name':
          const name = productData.sort(function(a, b) {
            return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
          });
          return setproducts(name.slice()) ;
          case 'most':
            const productDataRating= productData.sort((a,b)=>{
               return b.rating - a.rating;
            })
            return setproducts(productDataRating.slice());
            case'new_arrival':
            return setproducts(products.slice())


     default :   setproducts([...products])
   }

 },[sort])
  return (
   
   <div {...others}>
   <div className={`${styles.Top_Bar}`} >
    <h4 className={`${styles.title}`}>
      {category}
    </h4>

    <div className={`${scroll&&styles.Top_Bar_scroll} ${styles.filterOptions}`}>
      <p className={`${styles.res}`}>{productData?.length} results</p>
      {/* <DropDownMenu onChange={onChange} backgroundOrNot={false}  t
      ext={'filter'} icon={filter}/> */}
      <SortDropDown  
      className={`${styles.sorting}`}
      onChange={onChangeSort}
        label={Sortoptions.label} name={Sortoptions.name} options={Sortoptions.innerOptions}/>
            <button className={`${styles.button}`} onClick={()=> showFilter()}>fliter 
            <Image src={filter} width={25} height={25} /> </button>

    </div>

   </div>
   

   <div className="products_container container m-auto row">
   <FilterDrawer 
products={products}
setProducts={setproducts}
show={show} setShow={setShow}/>
{productData?.length ?
<>


{
  productData.map(
    product=>{
  return<>
   <ProdutItemMain product={product}/>
  
   
  </>
  
    }
  )
}
</>
:<>
<div className="no_products">
  <h1>
    There's no products here 
  </h1>
</div>

</>
}

   </div>
 
   </div>
  )
}
