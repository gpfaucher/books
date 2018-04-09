import { combineReducers } from 'redux';
import { books } from './books';
import { cart } from './cart';

export const reducer =  combineReducers({
    books,
    cart,
});
