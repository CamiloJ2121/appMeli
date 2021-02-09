import { createSelector } from 'reselect';
import { PRODUCT } from '../constants';

const product = (state) => {
    return state.getIn([PRODUCT]);
}

export const getProduct = createSelector(
    product,
    (product) => {
        return product.toJS();
    }
  );

export default getProduct;