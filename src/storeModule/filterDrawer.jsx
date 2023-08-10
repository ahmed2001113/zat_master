import { useEffect, useMemo, useState } from "react";
import CheckboxBottons from "../components/customsComponents/checkbox/materilChec";
 import styles from './store.module.css'
import Drawer from "../components/customsComponents/drawers/CustmDrawer";
import CheckboxButtons from "../components/customsComponents/checkbox/materilChec";
import SliderPrice from "../components/customsComponents/sliders/priceRange";
export default function FilterDrawer({
  show,
  setShow,
  products,
  setProducts
}){
  console.log(show)
 const [Stock, SetStock] = useState([
  { id: 1, checked: true, label: 'in stock' ,value:'IN_STOCK'},
  { id: 2, checked: false, label: 'Out of stock' ,value:'OUT_OF_STOCK'},
 
]);
const minPrice  = Math.min(...products.map(item=>item.regularPrice))
const maxPrice  = Math.max(...products.map(item=>item.regularPrice))
const [prices,setPrice]=useState([minPrice,maxPrice])
console.log(prices)
const handleChangePrice = (event, value) => {
  console.log(value)
  setPrice(value);
};

      const handleChangeChecked = (id) => {
        const StockStateList = Stock;
        const changeCheckedCuisines = StockStateList.map((item) =>
          item.id === id ? { ...item, checked: !item.checked } : item
        );
        SetStock(changeCheckedCuisines);
        console.log(changeCheckedCuisines)
      };

// Define a function to apply filters
const applyFilters = () => {
  let updatedList = [...products]; 
   const checkedItems = Stock.filter(item => item.checked).map(item => item.value);
 updatedList = checkedItems.length
      ? products.filter(item => checkedItems.includes(item.stockStatus))
      : products;
    
      const MinPrice = prices[0];
      const MaxPrice = prices[1];
      updatedList = updatedList.filter(
        (item) => item.regularPrice >= MinPrice && item.regularPrice <= MaxPrice
      );
  setProducts(updatedList);  
};

 

    return(
      <Drawer  show={show} title={'Filter'} setShow={setShow} placement={'start '} className={`${styles.Drawer}` } >
   <div className="body mb-auto">
   <h5>
        Avalibility
      </h5>
      <div className="stock">

      <div className='input-group'>
        {
          Stock.map(item=>{

            return  <CheckboxButtons
            changeChecked={handleChangeChecked}
           stock={item}
        />
          })
        }
        
   
      </div>
      </div>
      <h5>
        Sale
      </h5>
      <h5>
        Price
      </h5>
      <SliderPrice  value={prices} min={minPrice} max={maxPrice} changePrice={handleChangePrice}/>
      

   </div>
      <div className="bottom mt-auto">
<button className="black" onClick={()=>applyFilters()}> Apply Filters</button>
      </div>
      
          </Drawer>
 
    )
}