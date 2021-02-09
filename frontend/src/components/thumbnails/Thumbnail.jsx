import React from 'react';
import PropTypes from 'prop-types';
import './thumbnail.css';

function Thumbnail({ path, message, height, width }) {
    return <img src={path} alt={message} height={height} width={width} className="image" />
}

Thumbnail.propTypes = {
    path: PropTypes.string,
    message: PropTypes.string,
    height: PropTypes.number,
    stwidthyle: PropTypes.number,
};

export default Thumbnail;