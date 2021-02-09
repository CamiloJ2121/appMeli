import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import getProduct from '../../selectors/product';
import  { fetchProductForId } from  '../../actions/fetchProduct';

const mapStateToProps = createStructuredSelector({
    product: getProduct,
});

const mapDispatchToProps = {
    fetchProductForId,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
);