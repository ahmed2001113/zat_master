import { createSelector } from "@reduxjs/toolkit";

export const PreviewS = (state)=>state.preview;


export const previewData = createSelector([PreviewS],({open,product})=>{

return {
    open,product
}

})