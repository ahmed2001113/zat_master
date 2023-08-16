import { createSlice } from "@reduxjs/toolkit";
const initial  ={
    open:false,
    wishlistItems:[],
    message:''

}

export const WishListSlice = createSlice({
name:'wishlist',
initialState:initial,
reducers:{
    setWishListItems:(state,action)=>{
state.wishlistItems=action.payload
    },
    setWishListItem:(state,action)=>{
        const product=action.payload;
        const existingItem = state.wishlistItems.find(item=>item.id===product.id);
        if(existingItem){
            state.message='this item is already in wishlist'
        }else{
            state.message='Added success'

            state.wishlistItems.push(product)

        }

    }
}
});

export const wishlistActions = WishListSlice.actions;
export const wishlistReducer  = WishListSlice.reducer