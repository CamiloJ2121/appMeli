import { ACTION_PRODUCT_FOR_ID } from '../actionTypes';

export const fetchProductForId = id => async (dispatch, _) => {
    try {
        const PATH = `/api/items/${id}`;
        const response = await fetch(PATH, {
            'mode': 'cors',
            'headers': {
                'Access-Control-Allow-Origin': '*',
            }
        });
        const body = await response.json();
        dispatch({ type: ACTION_PRODUCT_FOR_ID, payload: body});
    } catch(error) {
        console.error('error', error.message);
    }   
}
