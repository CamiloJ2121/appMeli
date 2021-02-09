import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import Search from '../../components/search';
import connect from './connect';
import './header.css';

function Header({ fetchSearch }) {
    const handleSearch = useCallback(value => {
        fetchSearch(value);
        },
        [fetchSearch],
      );

    return (
        <div className="mainHeader">
            <Search handleSearch={handleSearch}/>
        </div>
    )
}

Header.propTypes = {
    fetchSearch: PropTypes.func,
};

export default connect(Header);