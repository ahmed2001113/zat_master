 import { USERTYPES } from "./user.types";
 import { createSlice } from "@reduxjs/toolkit";
const initializingState = {
 currentUser:null,
 loading:false,
 error:null
}



 export const userSlice = createSlice({
name:'user',
initialState:initializingState,
reducers:{
checkUserSession(state,action){
 },
signInSuccess(state,action){
    state.currentUser=action.payload;
     state.error=''
},
SetLoading:(state,action)=>{
    state.loading=action.payload
},
signInFaild(state,action){
    state.error=action.payload;
 
},signOutUser(state,action){
    state.currentUser=null
},UploadUserImageSuccess(state,action){ state.currentUser=action.payload },
UploadUserDataSuccess(state,action){state.currentUser=action.payload}



}
 });

 export const userAction =userSlice.actions;
 export const UserReduser= userSlice.reducer;


//  export const UserReduser = (state = initializingState,action)=>{
//  const {type,payload} = action;
//  switch(type){
//      case USERTYPES.CHECK_USER_SESSION:
//          return{
//              ...state,
//               loading:true,

//          }    
//      case USERTYPES.SIGN_IN_SUCCESS:
//          return{
//              ...state,
//              currentUser:payload,
//              loading:false,
//              error:''

//          }  
//      case USERTYPES.SIGN_IN_FAIID:
//          return{
//              ...state,
//              error:payload,
//              loading:false,

//          }  
//     case USERTYPES.SIGN_OUT:
//         return{
//         ...state,
//         currentUser:null
//     }
//     case USERTYPES.UploadUserImageSuccess:
//       return  {...state,
//             currentUser:payload
//         }

//         case USERTYPES.UploadUserDataSuccess:
//             return  {...state,
//                 currentUser:payload
//             }
//         case USERTYPES.SIGN_IN_FAIID:

//         return  {...state,
//             error:payload
//             }
//      default :return state ;

//   }

// }