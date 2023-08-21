import { createSelector } from "@reduxjs/toolkit";

export const filterState =(state)=> state.filter;

export const FilterSelector = createSelector([filterState],(state)=>state)