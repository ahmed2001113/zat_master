import { CartActions } from "@/src/store/cart/cart.reducer";
 import { useDispatch } from "react-redux";
import Image from "next/image";
 import styles  from './cart.module.css'
import Quantity from "../customsComponents/quantity/Quantity";

const  CartItem  = ({item})=>{
  const dispatch = useDispatch()
    const RemoveItem = (item)=>{
      // dispatch(setItemsAfterRemoved(CartItem,items))
      dispatch(CartActions.RemoveItem(item))


        
} 
if(!item){
  return 
}
 
    
   
    return(


        <>
                <div className={`row ${styles.cartitem}`}>
          <div className='col-md-3'>
           <Image src={item?.images?item?.images[0]?.sourceUrl:item?.image.sourceUrl} alt={item?.images?item.images[0]?.altText:item?.image.altText} priority width={100} height={100}/>
            </div>
            <div className="col-md-8">
              <h6>{item.name}</h6>
       <Quantity item={item}/>
 
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