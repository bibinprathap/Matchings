"use strict";
export const DELETE_FROM_CART = 'DELETE_FROM_CART';
export const UPDATE_ITEM_UNITS = 'UPDATE_ITEM_UNITS';
export const CHANGE_ITEM_UNITS = 'CHANGE_ITEM_UNITS';


export function deleteFromCart({ id }) {
    return {
        type: DELETE_FROM_CART,
        payload: { id }
    }
}
export function updateItemUnits({ id, units }) {
    return {
        type: UPDATE_ITEM_UNITS,
        payload: { id, units }
    }
}

export function changeItemUnits({ id, units }) {
    return {
        type: CHANGE_ITEM_UNITS,
        payload: { id, units }
    }
}