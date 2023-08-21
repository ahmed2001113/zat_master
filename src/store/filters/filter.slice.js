import { createSlice } from "@reduxjs/toolkit";

const Initial = {
    isShop:false,
    Filters:{},
    prices:{
        minPrice:0,
        maxPrice:0
    }

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
    
    state.Filters = Object.assign( state.Filters ,action.payload)
    },
    resetFilters:(state,action)=>{
        state.Filters=Object.assign(state.Filters,{})
    },
    DeleteKey :(state,action)=>{
       delete state.Filters[key]

    }

}
});
export const FiltersAction = FiltersSlice.actions;
export const FilterReducer = FiltersSlice.reducer