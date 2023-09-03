import { useEffect, useMemo, useState } from "react";
import CheckboxBottons, { useStyles } from "../components/customsComponents/checkbox/materilChec";
 import styles from './store.module.css'
import Drawer from "../components/customsComponents/drawers/CustmDrawer";
import CheckboxButtons from "../components/customsComponents/checkbox/materilChec";
import SliderPrice from "../components/customsComponents/sliders/priceRange";
import { isNullableType } from "graphql";
import { Checkbox, Chip, FormControlLabel, ListItem } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { FiltersAction } from "../store/filters/filter.slice";
import { FilterSelector } from "../store/filters/filtersSelectores";
 import filterObjectValues from "../utls/functions/FilterObjectsWithTypes";
import { SelectCategoriesLinks } from "../store/categories/category.selector";
import { GlobalSelector } from "../store/global/globalStore.Selector";
const initial=[
  { id: 1, checked: false, label: 'in stock' ,value:'IN_STOCK'},
  { id: 2, checked: false, label: 'Out of stock' ,value:'OUT_OF_STOCK'},
]
 
export default function FilterDrawer({
  show,
  setShow,
  products,
  setProducts,
  loading
   
}){
   const dispatch = useDispatch();
   const {IsMatch} =useSelector(GlobalSelector) 

   const [Stock, SetStock] = useState(initial);
const {prices:price,Filtered,Filters}=useSelector(FilterSelector) ;
  
const {minPrice,maxPrice}=price

const [onSale, setOnSale] = useState(true);
   
const [prices,setPrice]=useState([minPrice,maxPrice]);

const handleDelete = (chipToDelete) => () => {
  ;
  dispatch(FiltersAction.DeleteKey(chipToDelete))
   };


const handleChangeOnSale = (e)=>{
  setOnSale(e.target.checked);
SetStock
}
 const handleChangePrice = (event, value) => {
   setPrice(value);
};


      const handleChangeChecked = (id) => {
        const StockStateList = Stock;
        const changeCheckedCuisines = StockStateList.map((item) =>
          item.id === id ? { ...item, checked: !item.checked } : item
        );
        SetStock(changeCheckedCuisines);
       };
useEffect(()=>{
if(!Filtered){
  SetStock(initial)
}
},[Filtered])
// Define a function to apply filters
const applyFilters = () => {
  // let updatedList = [...products]; 

  
  dispatch(FiltersAction.addFilter({
    
      minPrice:prices[0],
      maxPrice:prices[1],
      stockStatues:Stock.filter(item=>item.checked).map(({value})=>value),
      onSale


  }));
 
 
 
};

 

    return(
      <Drawer    show={show} title={'Filter'} 
      setShow={setShow} placement={IsMatch?'bottom':'start'} 
   
      className={`${styles.Drawer}` } >
            <div className="tags">
 

   
 {
      filterObjectValues(Filters,(filters)=>{
        let icon;


       return Object.keys(filters).map((key) => {
   
  
 
          return (
               <Chip
               key={key}
              className={`${styles.chipItem} col-md-6`}
                icon={icon}
                label={`${key} ${filters[key]}`}
                onDelete={ handleDelete(key)}
              />
           );
        })
          })
  }
 </div>
          
    <div className="body mb-auto">
   <h5>
        Avalibility
      </h5>
      <div className="stock">

      <div className='input-group'>
        {
          Stock.map(item=>{

            return  <CheckboxButtons
            key={item.id}
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
      <FormControlLabel
      classes={
        {
          root:{
            '&$checked': {
              color: '#000',
            },
            width: '100%',
            display: 'flex',
            flexDirection: 'row-reverse',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginLeft: 0,
            color:"#000"
          },
          label:{
            fontSize: '.8rem',
            fontFamily: `'Raleway', sans-serif`,
          }
        }
      }
               label={'On Sale'}
control={
  
  <Checkbox
  checked={onSale}
  onChange={handleChangeOnSale}
  inputProps={{ 'aria-label': 'controlled' }}
  
/>
}
     >


    
        </FormControlLabel>

      {
        minPrice===maxPrice?null:
<div>
<h5>
        Price
      </h5>
        <SliderPrice  value={prices} min={minPrice===maxPrice?0:minPrice}
        max={maxPrice} changePrice={handleChangePrice}/>
</div>
      }
 

   </div>
      <div className="bottom mt-auto">
        {
          Filtered&&
<button className="  submit mb-3" 
disabled={loading}

onClick={()=>dispatch(FiltersAction.resetFilters())}> 
{loading?<>loading</>:<>Reset Filters</>}

</button>
        }
<button className="submit" onClick={()=>applyFilters()}
disabled={loading}
> 
{loading?<>loading</>:<>Apply Filters</>}
</button>
      </div>
      
          </Drawer>
 
    )
}