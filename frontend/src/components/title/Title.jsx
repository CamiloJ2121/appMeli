import React from 'react';
import PropTypes from 'prop-types';
import './title.css';

function Title({ title, style }) {
    return <h1 className={style}>{ title }</h1>;
}

export default Title;