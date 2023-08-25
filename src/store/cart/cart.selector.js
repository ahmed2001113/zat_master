import { createSelector } from "reselect";
const CartOpenReducer = (state)=>state.cart.open;
const cartItemsReducer = (state)=>state.cart;
const currentstate = (state)=>state
export const cartItems = createSelector([cartItemsReducer],(cart)=> {

 return   cart.items

}
 )
 export const carts =createSelector([currentstate],(state)=>( {...state.cart}))
export const CartOpen = createSelector([CartOpenReducer],(isOpen)=> 
 isOpen)
export const totalPaid = createSelector([cartItemsReducer],(cart)=> 
cart.items.length!==0? cart.items.reduce((price,item)=>{
      return price+item.price*item.quantity
},0):0
)
export const totalCart  = createSelector([cartItemsReducer],(cart)=>  
cart.items.length!==0?cart.items.reduce((total,product)=>{
    return total+product.quantity
},0):0
)