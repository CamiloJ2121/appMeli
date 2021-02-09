import { ACTION_SEARCH, ACTION_PRODUCTS_LIST } from '../actionTypes';
const PATH = '/api/items?q=';

const fetchSearch = text => async (dispatch, _) => {
    dispatch({ type: ACTION_SEARCH, payload: text });
    try {
        const response = await fetch(`${PATH}${text}`,
        {
            'mode': 'cors',
            'headers': {
                'Access-Control-Allow-Origin': '*',
            }
        });
        const body = await response.json();
        dispatch({ type: ACTION_PRODUCTS_LIST, payload: body});
    } catch(error) {
        console.error('error', error.message);
    }   
}

export default fetchSearch;