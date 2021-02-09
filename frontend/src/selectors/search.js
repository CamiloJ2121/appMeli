import { createSelector } from 'reselect';
import { SEARCH } from '../constants';

const search = (state) => {
 return state.getIn([SEARCH]);
};

export const getSearch = createSelector(
     search,
    (search) => {
      return search
    }
  );

export default getSearch;
