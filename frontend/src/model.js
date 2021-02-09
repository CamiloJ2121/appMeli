import { Map, List } from 'immutable';
import { SEARCH, PRODUCT_LIST, PRODUCT } from './constants';

const stateModel = Map({
    [SEARCH]: '',
    [PRODUCT_LIST]: List(),
    [PRODUCT]: Map(),
});

export default stateModel;