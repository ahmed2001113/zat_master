import { createSlice } from "@reduxjs/toolkit";
const initial  ={
    open:false,
    wishlistItems:[],
    message:'',
    openMessage:false
    
}

export const WishListSlice = createSlice({
name:'wishlist',
initialState:initial,
reducers:{
    setWishListItems:(state,action)=>{
state.wishlistItems=action.payload
    },
    
    setWishlistOpen:(state,action)=>{
state.open = !state.open
    }
    ,
    setMessageOf:(state,action)=>{
state.openMessage = false
    }
    ,

    setWishListItem:(state,action)=>{
        const product=action.payload;
        const existingItem = state.wishlistItems.find(item=>item.id===product.id);
        if(existingItem){
            state.wishlistItems=  state.wishlistItems.filter(item=>item.id!==product.id)
            state.message='Removed from wishlist'
            state.openMessage=true
        }else{
            state.message=`Added success ${product?.name}`
            state. openMessage=true

            state.wishlistItems.push(product)

        }

    }
}
});

export const wishlistActions = WishListSlice.actions;
export const wishlistReducer  = WishListSlice.reducer