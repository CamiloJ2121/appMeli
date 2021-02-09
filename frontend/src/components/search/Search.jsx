import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link, useHistory } from "react-router-dom";
import Logo from '../../assets/Logo.png';
import ic_Search2x from '../../assets/ic_Search2x.png';
import './search.css';

const PLACEHOLDER = 'Nunca dejes de buscar';

function Search({ handleSearch }) {

    const [ valueInput, setValueInput] = useState('');

    const handleChange = (e) => {
        setValueInput(e.target.value);
    }

    const search = () => {
        if(valueInput) {
            handleSearch(valueInput);
        } 
    }

    return (
            <div className="mainSearch">
                <img src={Logo} alt="logo" height={41} width={53}/>
                <input className="search" type='text' value={valueInput} placeholder={PLACEHOLDER} onChange={handleChange}/>
                <Link className="searchBtn" onClick={search} to={`/items?search=${valueInput}`}>
                    <img className="imageSearch" src={ic_Search2x} alt="iconSearch" height={41} width={36} />
                </Link>
            </div>
    );
}

Search.prototype = {
    handleSearch: PropTypes.func,
}

export default Search;