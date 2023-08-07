import { CartActions } from "@/src/store/cart/cart.reducer";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import { cartItems } from "@/src/store/cart/cart.selector";
import styles  from './cart.module.css'

const  CartItem  = ({item})=>{
if(!item){
  return 
}
 const dispatch = useDispatch()
 const {id,quantity} = item;
    const minVal = 1;
    const maxVal=20;
    const items = useSelector(cartItems)
    
    const [value, setValue] = useState(item.quantity);
    
    const RemoveItem = (item)=>{
      // dispatch(setItemsAfterRemoved(CartItem,items))
      dispatch(CartActions.RemoveItem(item))


        
} 
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
      return i;
    }
  });

  dispatch(CartActions.setCartItems(itemsArray));
}, [value]);
    return(


        <>
                <div className={`row ${styles.cartitem}`}>
          <div className='col-md-3'>
           <Image src={item?.images[0]?.sourceUrl} priority width={100} height={100}/>
            </div>
            <div className="col-md-8">
              <h6>{item.name}</h6>
              <div className="qtySelector text-center">
      <i className="fa fa-minus decreaseQty" onClick={decreaseValue.bind(this)}></i>
      <input  min={minVal} max={maxVal} type="text" className="qtyValue"     value={value}   readOnly />
      <i className="fa fa-plus increaseQty" onClick={increaseValue.bind(this)}></i>
    </div>
 
              <div className="buttons">
              <p>
                 QT <span>{item?.quantity}</span>
              </p> 
              <button onClick={RemoveItem.bind(null,item)}>remove</button>
              </div>
            </div>

        </div>
        </>
    )
}
export default  CartItem