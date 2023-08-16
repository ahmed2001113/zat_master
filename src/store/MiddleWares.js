import { UploadUserDataStart } from "./user/user.actions";

export const custemMiddleWare = (state)=>(next)=>(action)=>{
    const {type,payload} = action;
    if(!type){
        console.log(action)
        return next(action)
    }
    console.log('type:' ,type);
    console.log('payload:' ,payload);
    console.log('currentState:',state.getState());
   
next(action)    
    console.log('nextState:',state.getState());

if(action.type.slice(0,4) ==='cart'){
    const {user:{currentUser},cart:{items} } = state.getState()
if(currentUser){

     
    state.dispatch(UploadUserDataStart({'cart':items},currentUser))
}
}
console.log(action.type)
if(action.type==='wishlist/setWishListItem'){
    const {user:{currentUser},wishlist:{wishlistItems} } = state.getState()
if(currentUser){
 state.dispatch(UploadUserDataStart({'wishlist':wishlistItems},currentUser))
}

}
}
