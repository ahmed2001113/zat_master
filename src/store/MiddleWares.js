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
const {user:{currentUser},cart:{items} } = state.getState()

if(action.type.slice(0,4) ==='cart'){
    // console.log(currentUser,items,state,action)

    // state.dispatch(UploadUserDataStart({'cart':items},currentUser))
}
}
