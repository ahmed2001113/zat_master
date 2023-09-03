import { createSelector } from "@reduxjs/toolkit"

export const Globalstate = (state)=>state.global


export const GlobalSelector = createSelector([Globalstate],(global)=>global)