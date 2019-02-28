"use strict";
export const NEXT_SLIDE_CLICK = 'NEXT SLIDE CLICK';
export const PREVIOUS_SLIDE_CLICK = 'PREVIOUS SLIDE CLICK';
export const Terms_Container_Click = 'Terms Container Click';
export const Defs_Container_Click = 'Defs Container Click';


export function nextbuttonclick() {
    return {
        type: NEXT_SLIDE_CLICK,
        payload: {}
    }
}
export function previousbuttonClick() {
    return {
        type: PREVIOUS_SLIDE_CLICK,
        payload: {}
    }
}
export function termsContainerClick(e) {
    return {
        type: Terms_Container_Click,
        payload: e
    }
}
export function defContainerClick(e) {
    return {
        type: Defs_Container_Click,
        payload: e
    }
}


