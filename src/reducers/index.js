import {combineReducers} from 'redux';
import productsReducer from "./productsReducer";
import cartReducer from "./cartReducer";
import showCartReducer from "./showCartReducer";

export default combineReducers({
    products: productsReducer,
    cart: cartReducer,
    showcart:showCartReducer
});