import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import getProductList from '../../selectors/productList';
import { fetchProductForId } from  '../../actions/fetchProduct';
import fetchSearch from  '../../actions/fetchSearch';

const mapStateToProps = createStructuredSelector({
    productList: getProductList,
});

const mapDispatchToProps = {
    fetchProductForId,
    fetchSearch,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
);
