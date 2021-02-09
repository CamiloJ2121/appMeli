import { fromJS } from 'immutable';
import { SEARCH, PRODUCT_LIST, PRODUCT } from './constants';
import { ACTION_SEARCH, ACTION_PRODUCTS_LIST, ACTION_PRODUCT_FOR_ID } from './actionTypes'
import stateModel from './model';

function reducer(state = stateModel, action) {
    switch(action.type) {
        case ACTION_SEARCH:
            return state.set(SEARCH, action.payload);
        case ACTION_PRODUCTS_LIST:
            return state.set(PRODUCT_LIST, fromJS(action.payload))
        case ACTION_PRODUCT_FOR_ID:
            return state.set(PRODUCT, fromJS(action.payload))
        default:    
            return state
    }
}

export default reducer;