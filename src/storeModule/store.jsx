import React,{useState} from 'react'
 import filter from '../../public/svgs/filter.svg'
 import styles from './store.module.css'
import SortDropDown from '../components/customsComponents/dropdowns/sort';
import { Sortoptions } from '../components/customsComponents/dropdowns/options';
import ProdutItemMain from '../components/products/productMain';
  import { useEffect } from 'react';
import FilterDrawer from './filterDrawer';
import Image from 'next/image';
    import { useDispatch, useSelector } from 'react-redux';
import { FilterSelector } from '../store/filters/filtersSelectores';
import { FiltersAction } from '../store/filters/filter.slice';
   import Skelton2 from '../components/skelton/skeltonswipecenterd';
import { wishlistSelector } from '../store/wishlist/wishlistSelector';
 export default function Store({products=[],category='',loading,setLoading,...others}) {
   const dispatch = useDispatch()
  const {Filters ,Filtered,sort:SORT } = useSelector(FilterSelector)
  const [scroll, setScroll] = useState(false);
  const {wishlistItems} = useSelector(wishlistSelector)
  const isWishlist=(id)=>{
    return wishlistItems.some(item=>item.id===id)
   };
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
  
  const [sort,SetSort]= useState('sort By')
   const onChange = (e)=>{
   }
 
 const onChangeSort =(e)=>{
  const {value} = e.target;
  SetSort(value) 
 };
 const showFilter  = ()=>{
   setShow(true);
  }
 
 useEffect(()=>{
 
  switch(sort){
    case  'priceAsc':
      //  const priceAsc = productData.sort((a,b)=>a.price-b.price);

     
      return   dispatch(FiltersAction.addFilter({orderby:[{
        field:"PRICE",
        order:'ASC'
        }]
      
      })) 
       
  
        case  'priceDESC':
            
      return   dispatch(FiltersAction.addFilter({orderby:[{
        field:"PRICE",
        order:'DESC'
        }]
      
      })) 
  
        ;
        case  'name':
          return   dispatch(FiltersAction.addFilter({orderby:[{
            field:"NAME",
            order:'DESC'
            }]
          
          })) 
          case 'most':
            return   dispatch(FiltersAction.addFilter({orderby:[{
              field:"RATING",
              order:'DESC'
              }]
            }));


            case'new_arrival':
          
            return   dispatch(FiltersAction.addFilter({orderby:[{
              field:"MODIFIED",
              order:'DESC'
              }]
            }));


     default :   setproducts([...products])
   }

 },[sort])

 useEffect(()=>{
  setproducts(products)
},[products])

  return (
   
   <div {...others}>
      <h4 className={`${styles.title} ${styles.mob}`}>
      {category}
    </h4>
   <div className={`${styles.Top_Bar}`} >
  <div className={`${styles.flex}`}>

  <h4 className={`${styles.title}`}>
      {category}
    </h4>

    <div className={`${scroll&&styles.Top_Bar_scroll} ${styles.filterOptions}`}>
       {/* <DropDownMenu onChange={onChange} backgroundOrNot={false}  t
      ext={'filter'} icon={filter}/> */}
      <SortDropDown  
      className={`${styles.sorting} sor`}
      onChange={onChangeSort}
        label={Sortoptions.label}
        defaultValue='sort'
        valueOpt={sort}
        name={Sortoptions.name} options={Sortoptions.innerOptions}/>
            <button className={`${styles.button}`} onClick={()=> showFilter()}>fliter 
            <Image 
            alt={'filter'}
            src={filter} width={25} height={25} /> </button>

    </div>

  </div>

   </div>


   <div style={{paddingLeft:'5px'}} className="products_container container m-auto row">
   <FilterDrawer 
products={products}
setProducts={setproducts}
show={show} setShow={setShow}
loading={loading}
/>
{productData?.length ?
<>


{
  productData.map(
    product=>{
  return  loading?<Skelton2 key={product.id}/>:

   <ProdutItemMain  isLove={isWishlist(product.id)}
    className={`col-6 col-sm-6 col-md-6 col-lg-6 col-xl-4 pb-3
     pb-md-6 pb-xl-8 ${styles.product}`} key={product.id} 
      product={product}/>
  }
  
   
  
  
  
  )
}
</>
:<>
<div className={`${styles.no_products}`}>
  <h1>
 {` We're sorry, no products were found that match your filter selection.`}
  </h1>

  <button className='black' onClick={()=>dispatch(FiltersAction.resetFilters())}>
    clear Filters
  </button>
</div>

</>
}

   </div>
 
   </div>
  )
}
