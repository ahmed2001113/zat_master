import { createSlice } from '@reduxjs/toolkit';
import{categoriesTypes} from './category.action.types'
 const initializingState  = {
    categories:[],
    error:null,
   
    isLoading:false
}


 export const  categoriesSlice=createSlice({
    name:'category',
    initialState:initializingState,
    reducers:{
FETCH_CATEGORIES_start(state,action){
    state.isLoading=true

},
FetchCategoriesSuccess(state,action){
 state.categories=action.payload;
state.isLoading=false

},
FETCH_CATEGORIES_FAILD(state,action){
state.error=action.payload;
state.isLoading=false

}

    }


});


export const categoriesReducer  =categoriesSlice.reducer;
export const categoryActions = categoriesSlice.actions
 