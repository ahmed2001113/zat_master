import {combineReducers} from '@reduxjs/toolkit';
import{UserReduser} from './user/user.reducer';
import{categoriesReducer} from'./categories/category.reducer';
import{CartReducer} from './cart/cart.reducer'
import { PreviewReducer } from './preview/preview.slice';
import { CheckOutReducer } from './checkoutSteps/checkoutSteps';
import {  wishlistReducer } from './wishlist/wishlistslice';
import { FilterReducer } from './filters/filter.slice';
 export const combineReducer = combineReducers({
    user:UserReduser,
    Categories:categoriesReducer,
    cart:CartReducer ,
    preview:PreviewReducer,
    checkout:CheckOutReducer,
    wishlist:wishlistReducer,
    filter:FilterReducer
 });

