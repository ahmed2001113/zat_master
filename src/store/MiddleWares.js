import { UploadUserDataStart } from "./user/user.actions";

export const custemMiddleWare = (state)=>(next)=>(action)=>{
    const {type,payload} = action;
    if(!type){
        
        return next(action)
    }
  
   
next(action)    
 

if(action.type.slice(0,4) ==='cart'){
    const {user:{currentUser},cart:{items} } = state.getState()
if(currentUser){

     
    state.dispatch(UploadUserDataStart({'cart':items},currentUser))
}
}

if(action.type==='wishlist/setWishListItem'){
    const {user:{currentUser},wishlist:{wishlistItems} } = state.getState()
if(currentUser){
 state.dispatch(UploadUserDataStart({'wishlist':wishlistItems},currentUser))
}

}
}
