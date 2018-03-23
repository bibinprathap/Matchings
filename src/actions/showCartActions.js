"use strict";
export const SHOW_CARTTRUE = 'SHOW_CARTTRUE';
export const SHOW_CARTFALSE = 'SHOW_CARTFALSE';
 

export function showCartTrue(showca) {
    return {
        type: SHOW_CARTTRUE,
        payload: showca
    }
}

export function showCartFalse(showca) {
    return {
        type: SHOW_CARTFALSE,
        payload: showca
    }
}