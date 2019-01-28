"use strict";
import { DELETE_FROM_CART, UPDATE_ITEM_UNITS, CHANGE_ITEM_UNITS } from '../actions/cartActions';
const InitialState = [{ id: 1, title: 'Cotton T-Shirt,Medium', description: 'Cotton T-Shirt,Medium', price: 1.99, cost: 1.99, units: 1 },
{ id: 2, title: 'Baseball Cap,One Size', description: 'Baseball Cap,One Size', price: 2.99, cost: 5.98, units: 2 },
{ id: 3, title: 'Swim Shorts Medium', description: 'Swim Shorts Medium', price: 3.99, cost: 3.99, units: 1 }];
export default function cartReducer(state = InitialState, action = {}) {
    switch (action.type) {

        case UPDATE_ITEM_UNITS:
            let totunits = findtotalunit(state, action.payload.id);
            if (totunits > 9) {
                alert('Quantity Exceeds the limit of 10 items')
                return state.concat([]);
            }
            let existingItemIndex = findProductIndex(state, action.payload.id);
            if (state[existingItemIndex].units === 0 && action.payload.units === -1) {
                break;
            }
            state[existingItemIndex].units += action.payload.units;
            return state.concat([]);
        case CHANGE_ITEM_UNITS:
            if (action.payload.units > 9) {
                alert('Quantity Exceeds the limit of 10 items')
                return state.concat([]);
            }
            let changeexistingItemIndex = findProductIndex(state, action.payload.id);
            if (state[changeexistingItemIndex].units === 0 && action.payload.units === -1) {
                break;
            }
            state[changeexistingItemIndex].units = action.payload.units;
            return state.concat([]);
        case DELETE_FROM_CART:
            let indexToDel = findProductIndex(state, action.payload.id);
            return [...state.slice(0, indexToDel), ...state.slice(indexToDel + 1)];
    }


    function findProductIndex(products, id) {
        return products.findIndex((p) => p.id === id)
    }

    function findtotalunit(state) {
        let tot = 0;
        state.filter(t => action.payload.id == t.id).map((p, i) => { tot = tot + p.units });
        return tot;
    }

    return state;
}