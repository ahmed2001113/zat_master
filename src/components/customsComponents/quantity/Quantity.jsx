import { CartActions } from '@/src/store/cart/cart.reducer';
import { cartItems } from '@/src/store/cart/cart.selector';
import React, { useState,useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

export default function Quantity({item}) {
    const [value, setValue] = useState(item.quantity||1);
  const {id,quantity} = item;
    const minVal = 1;
    const maxVal=20;
    const items = useSelector(cartItems)
    const dispatch = useDispatch()
  
const increaseValue = () => {

  setValue((prevValue) => prevValue + 1);
};

const decreaseValue = () => {
  if(value>minVal){

    setValue((prevValue) => prevValue - 1);
  }
};
useEffect(() => {
  const itemsArray = items.map((i) => {
    if (i.id === id) {
      return {
        ...i,
        quantity: value,
      };
    } else {
      return {...i,
        
        quantity: value,

      };
    }
  });

  dispatch(CartActions.setCartItems(itemsArray));
}, [value]);
  return (
    <div className="qtySelector text-center">
    <i className="fa fa-minus decreaseQty" onClick={decreaseValue.bind(this)}></i>
    <input  min={minVal} max={maxVal} type="text" className="qtyValue"     value={value}   readOnly />
    <i className="fa fa-plus increaseQty" onClick={increaseValue.bind(this)}></i>
  </div>
  )
}
