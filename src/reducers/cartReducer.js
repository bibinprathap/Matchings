"use strict";
import {ADD_TO_CART, DELETE_FROM_CART, UPDATE_ITEM_UNITS} from '../actions/cartActions';

export default function cartReducer(state=[], action={}) {
    switch(action.type) {
        case ADD_TO_CART:
        let totunit= findtotalunit(state);
        if(totunit>98)
        {
            alert('Quantity Exceeds the limit of 99 items')
            return state.concat([]);  
        }
            let existingIndex = findProductIndex(state, action.payload.id);
            if (existingIndex !== -1) {
                state[existingIndex].units += 1;
                return state.concat([]);
            }
            return state.concat(action.payload);

        case UPDATE_ITEM_UNITS:
        let totunits= findtotalunit(state);
        if(totunits>98)
        {
            alert('Quantity Exceeds the limit of 99 items')
            return state.concat([]);  
        }   
        let existingItemIndex = findProductIndex(state, action.payload.id);
            if (state[existingItemIndex].units === 0 && action.payload.units === -1) {
                break;
            }
            state[existingItemIndex].units += action.payload.units;
            return state.concat([]);

        case DELETE_FROM_CART:
            let indexToDel = findProductIndex(state, action.payload.id);
            return [...state.slice(0, indexToDel), ...state.slice(indexToDel+1)];
    }


    function findProductIndex(products, id) {
        return products.findIndex((p) => p.id === id)
    }

    function findtotalunit(state) {
        let tot =0;
         state.map((p,i)=> { tot = tot + p.units} );
         return tot;
        }

    return state;
}