import { UploadUserDataStart } from "./user/user.actions";

export const custemMiddleWare = (state)=>(next)=>(action)=>{
    const {type,payload} = action;
    if(!type){
        
        return next(action)
    }
  
    console.log('type:' ,type);
    console.log('payload:' ,payload);
    console.log('currentState:',state.getState());
next(action)    
console.log('NextState:',state.getState());


if(action.type.slice(0,4) ==='cart' &&action.type!=='cart/setCartItems'){
    const {user:{currentUser},cart:{items} } = state.getState()
if(currentUser){

     
    state.dispatch(UploadUserDataStart({'cart':items},currentUser))
}
}

if(action.type==='wishlist/setWishListItem'){
    const {user:{currentUser},wishlist:{wishlistItems} } = state.getState();
    console.log(currentUser)
if(currentUser){
 state.dispatch(UploadUserDataStart({'wishlist':wishlistItems},currentUser))
}
console.log(action.type)


}
console.log(action.type)
if(action.type==='checkout/next'){
    const {user:{currentUser},checkout:{userInferomations} } = state.getState();
  
    if(currentUser){
        state.dispatch(UploadUserDataStart({'personalInferomation':userInferomations},currentUser))


        console.log(currentUser)
    }
}
console.log(type)
if(type==='checkout/SetUserOrder'||type==='cart/EmptyCartItems'){
    console.log(type)
    const {user:{currentUser},checkout:{orders} } = state.getState();
    console.log(orders,currentUser)
    if(currentUser){
    state.dispatch(UploadUserDataStart({'orders':orders},currentUser))
}

}
}
