"use strict";
import {SHOW_CARTTRUE,SHOW_CARTFALSE} from '../actions/showCartActions';

export default function showCartReducer(state=false, action={}) {
    switch(action.type) {
        case SHOW_CARTTRUE:
            state = true
            return state;
        case SHOW_CARTFALSE:
            state = false
            return state;
    }
    return state;
}