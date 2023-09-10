import { CartActions } from '@/src/store/cart/cart.reducer';
import { cartItems } from '@/src/store/cart/cart.selector';
import React, { useState,useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

export default function Quantity({item}) {
  const dispatch = useDispatch()
  const {id,quantity} = item;
  console.log(quantity)
  const [value, setValue] = useState(quantity||1);
    const minVal = 1;
    const maxVal=20;
    const items = useSelector(cartItems)
  
const increaseValue = () => {

  setValue((prevValue) => prevValue + 1);
};

const decreaseValue = () => {
  if(value>minVal){

    setValue((prevValue) => prevValue - 1);
  }
};
// useEffect(() => {
//   const itemsArray = items.map((i) => {
//     if (i.id === id) {
//       return {
//         ...i,
//         quantity: value,
//       };
//     } else {
//       return {...i,
        
//         quantity: value,

//       };
//     }
//   });
// console.log(itemsArray)
//   dispatch(CartActions.setCartItems(itemsArray));
// }, [value]);
  const onChange = (value) => {
    console.log(value)
     const itemsArray = items.map((i,idx)=>{
             if(i.id===id){
            
                return{
                    ...i,
                    quantity:value
                }
            } else{
                return i,
                quantity
            }

    
        })
        
        dispatch(CartActions.setCartItems(itemsArray))

    
            
   }

  return (
    <div className="qtySelector text-center">
    <i className="fa fa-minus decreaseQty" onClick={decreaseValue.bind(this)}></i>
    <input  min={minVal} max={maxVal} onChange={onChange} type="text" className="qtyValue"     value={value}   readOnly />
    <i className="fa fa-plus increaseQty" onClick={increaseValue.bind(this)}></i>
  </div>
  )
}
