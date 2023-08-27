import { createSelector } from "@reduxjs/toolkit";

export const StepsSelector = (state)=>state.checkout;

export const UserInferomationCheckoutSelector = createSelector([StepsSelector],(({userInferomations})=>{
    return userInferomations
}))

export const order = createSelector([StepsSelector],(({order})=>{
    return order
}))
 export const CheckOutSelector = createSelector([StepsSelector],(state)=>state)
export const currentStepSelector = createSelector([StepsSelector],(({current,steps})=>{
    return {current,steps}
}))


