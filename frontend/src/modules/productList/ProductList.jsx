import React, { useEffect, useCallback } from 'react';
import { Link } from "react-router-dom";
import queryString from 'query-string';
import Card from '../../components/card';
import Title from '../../components/title';
import connect from './connect';
import Layout from '../../Layout';
import titelModel from '../models/title';
import productsModel from '../models/products';
import '../../main.css';
import './productList.css';

const LOCATION = window.location.search;

function ProductList({ productList, fetchProductForId, fetchSearch }) {
    const params = queryString.parse(LOCATION);
    const title = titelModel(productList) || 'Productos';

    const products = productsModel(productList);

    const handleProductDetail = useCallback(id => {
        fetchProductForId(id);
        },
        [fetchProductForId],
    );
    
    useEffect(() => {
        if(Object.keys(params).length > 0 && Object.keys(productList).length === 0) {
            fetchSearch(params.search);
        }
    },[]);

    return (
        <Layout>
            <div className="productsList">
                <Title title={title} style='styleTitle'/>
                {Object.keys(products).map(item => {
                    return (<Link key={products[item].id} onClick={() => handleProductDetail(products[item].id)} to={`item/${products[item].id}`}>
                            <Card product={products[item]} />
                        </Link>);
                })}
            </div>   
        </Layout>
    );
}

export default connect(ProductList);