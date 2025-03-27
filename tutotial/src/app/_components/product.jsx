import React from 'react';

const Product = async ( props ) => {
    await new Promise(resolve => setTimeout(resolve, 2000));
    return (
        <div>
            <h2>{props.name}</h2>
            <p>{props.description}</p>
            <p>Price: ${props.price}</p>
        </div>
    );
};

export default Product;