import { createSlice } from "@reduxjs/toolkit";

const INITIALSTATE = {
    items:[],
    open:false,
 
}
 
 
export const RemoveItemFromCart = (product,items)=>{

   return items.filter(item=>item.id!==product.id);
 
}
export   const AddItemToCArt = (items,productItem)=>{
    //return item 
 const existingItem= items.find(product=>product.id===productItem.id)
if(existingItem){
 return items.map(cartItem=>cartItem.id===productItem.id
    ?{...cartItem,
        quantity:cartItem.quantity+1
    } 
    :cartItem
    )
}

return [...items ,{...productItem,quantity:1}]
}
 

export const cartSlice = createSlice({
name:'cart',
initialState:INITIALSTATE,
reducers:{
    setCartOpen(state,action){
        state.open=action.payload
    }
    ,
    addItemToCart(state,action){
        state.items=AddItemToCArt(state.items,action.payload)
    },
    RemoveItem(state,action){
        state.items=RemoveItemFromCart(action.payload,state.items)
    },
    setCartItems(state,action){
state.items=action.payload
    },
    EmptyCartItems(state,action) { // new reducer function
        state.items = []
      }
}

});
export const CartReducer= cartSlice.reducer;
export const CartActions = cartSlice.actions

// export const CartReducer = (state=INITIALSTATE,action={})=>{
//     const {type,payload} = action;
//     switch(type){
//         case CartActions['SET_CART_ITEM']:
//                     return{
//                 ...state,
//                 ...payload
//             }
//         case CartActions['SET_CART_OPEN']:
//             return{
//                 ...state,
//                  open:payload
//             }
//         default: return state

//     }
// }
