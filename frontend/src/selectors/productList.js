import { createSelector } from 'reselect';
import { PRODUCT_LIST } from '../constants';

const productList = (state) => {
    return state.getIn([PRODUCT_LIST]);
}

export const getProductList = createSelector(
    productList,
    (productList) => {
        return productList.toJS();
    }
  );

export default getProductList;
