import React from 'react';
import PropTypes from 'prop-types';
import ic_shipping2 from '../../assets/ic_shipping2.png'
import Thumbnail from '../thumbnails';
import './card.css'

function Card({ product }) {
    const { picture, price, free_shipping, title, city } = product;
    return (
        <div className="mainCard">
            <div className="containerImageCard">
                <Thumbnail path={picture} message="thumbnail" height={180} width={180}/>
            </div>
            <div className="containerDetailCard">
                <h1 className="price">{`$${price.decimals}`}
                { free_shipping ? <Thumbnail path={ic_shipping2} message="hipping" height={18} width={18}/> : null }
                </h1>
                <h2 className="description">{title}</h2>
            </div>
            <div className="containerAddress">
                <h3 className="address">{city}</h3>
            </div>
        </div>
    );
}

Card.propTypes = {
    product: PropTypes.object,
};

export default Card;