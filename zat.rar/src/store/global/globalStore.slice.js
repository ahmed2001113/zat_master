const { createSlice } = require("@reduxjs/toolkit");


const GlobalSlice = createSlice({
    name:'global',
    initialState:{
        IsMatch:false
    },
    reducers:{

        setIsMatch:(state,action)=>{
            state.IsMatch=action.payload
        }

    }
});
 

export const GlobalActions = GlobalSlice.actions;
export const GlobalReducer = GlobalSlice.reducer
