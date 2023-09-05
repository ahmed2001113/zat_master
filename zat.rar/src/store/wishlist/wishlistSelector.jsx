import { createSelector } from "@reduxjs/toolkit";

export const wishlistState = (state)=>state.wishlist;


export const wishlistSelector = createSelector([wishlistState],(wishlist)=>wishlist)