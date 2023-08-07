import { createSlice } from "@reduxjs/toolkit";
const InitialiZing ={
    current:0,
    steps:['Inferomation', 'Payment'],
    userInferomations:{
    firstname:'', 
    lastname:'',
    phone:'',
    email:'',
    streetaddress:''
    ,apartment:'',
    city:''
    ,government:''
    ,zip:''
    ,address2:''
    ,errors:null
     },
     order:{
        orderCreator:'',
        cartItems:[],
        TotalCart:0,
        orderInferomation:{}
     },
     orders:[]
 }


export const CheckOutSlice = createSlice({
    name:'checkout',
    initialState:InitialiZing,
    reducers:{
        next:(state,action)=>{

            state.current =state.current+1
        },
        prev:(state,action)=>{
            if(state.current>0){

                state.current =state.current-1
            }
        },
        SetUserInferomation:(state,action)=>{
            state.userInferomations=action.payload
        },
        SetUserOrder:(state,action)=>{
     const {cartItems,orderCreation,TotalCart,orderInferomation}=action.payload
        state.order.TotalCart = TotalCart;
        state.order.cartItems = cartItems;
        state.order.orderCreator=orderCreation;
        state.order.orderInferomation=orderInferomation;
        state.orders.push(action.payload)
        }
    }
})
export  const CheckOutReducer = CheckOutSlice.reducer;
export const checkoutActions = CheckOutSlice.actions