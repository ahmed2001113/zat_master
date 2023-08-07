
import { createSlice } from "@reduxjs/toolkit";

const Initial = {
    open:false,
    product:{}
}
export const PreviewSlice = createSlice({
name:'preview',
initialState:Initial,
reducers:{
    OPENPREVIEW:(state,action)=>{
 state.open=true
state.product=action.payload
    },
    closepreview :(state,action)=>{
        state.open = false
        state.product={}
    }

}

})
export const PreviewActions = PreviewSlice.actions;
export const PreviewReducer = PreviewSlice.reducer