import React from "react";
import Header from './modules/header';
import PropTypes from 'prop-types';
import './main.css';

function Layout({ children }) {
  return (
    <div className="container">
        <Header />
        {children }
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;