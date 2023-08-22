import { createSlice } from "@reduxjs/toolkit";

const Initial = {
    isShop:false,
    Filtered:false,
    Filters:{ } ,
    prices:{
        minPrice:0,
        maxPrice:0
    },
    sort:{}

}

export const FiltersSlice =createSlice({
name:'filter',
initialState:Initial,
reducers:{

    addPrices:(state,action)=>{
        const [min , max]=action.payload;
        state.prices.maxPrice=max,
        state.prices.minPrice=min
    },
    addFilter :(state,action)=>{
    state.Filtered=true
    state.Filters = Object.assign( state.Filters ,action.payload)
    },

    SORTING:(state,action)=>{
        console.log('object')
state.sort=Object.assign({},action.payload)
    },
    resetFilters:(state,action)=>{
        state.Filtered=false

        state.Filters={}
    },
    DeleteKey :(state,action)=>{
       delete state.Filters[action.payload]
        if(!Object.keys(state.Filters).length){
            state.Filtered=false
        }
    }

}
});
export const FiltersAction = FiltersSlice.actions;
export const FilterReducer = FiltersSlice.reducer