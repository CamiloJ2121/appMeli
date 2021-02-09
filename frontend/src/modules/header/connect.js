import { connect } from 'react-redux';
import fetchSearch from  '../../actions/fetchSearch';

const mapDispatchToProps = {
    fetchSearch,
};

export default connect(
    null,
    mapDispatchToProps,
);