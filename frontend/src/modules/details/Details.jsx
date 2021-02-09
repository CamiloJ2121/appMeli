import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Title from '../../components/title';
import Thumbnail from '../../components/thumbnails';
import Layout from '../../Layout';
import connect from './connect';
import {
    useParams
  } from "react-router-dom"
import './details.css';


function Details({ product, fetchProductForId }) {
    const { item } = product;
    const { id } = useParams();
    useEffect(() => {
        if(id && !Object.keys(product).length) {
            fetchProductForId(id)
        }
    },[]);

    return (
        <Layout>
            { item ? (<div className="main">
                <Title title={item.title} style='styleTitle'/>
                <div className="detail">
                    <div className="detailHeader">
                        <Thumbnail path={item.picture} message="thumbnail" height={680} width={680}/>
                        <div className="detailsInfo">
                            <span className="subTitle">{item.condition ? 'Nuevo'  : ''}</span>
                            <span>{item.condition && item.price.amount ? " - " : null}</span>
                            <span className="subTitle">{item ? item.price.amount : 0 } Vendidos </span>
                            <h2 className="title">{item.title}</h2>
                            <h1 className="price">{`$${item.price.decimals}`}</h1>
                            <button className="btn">Comprar</button>
                        </div>
                    </div>
                    <div className="detailFooter">
                        <h1>Descripción del producto</h1>
                        <h3>{item.description}</h3>
                    </div>
                </div>
            </div>) : null }
        </Layout>
    );
}

Details.propTypes = {
    product: PropTypes.object,
    fetchProductForId: PropTypes.func,
};

export default connect(Details);