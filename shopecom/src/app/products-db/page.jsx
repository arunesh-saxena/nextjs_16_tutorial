import React from 'react';
import { getProducts } from '@/prisma-db';

const ProductsDBPage = async () => {
    const products = await getProducts();
    return (
        <div>
            <h1>Product Detail Page</h1>
            {products.map((product) => (
                <div key={product.id}>
                    <h2>{product.title}</h2>
                    <p>{product.description}</p>
                    <p>${product.price}</p>
                </div>
            ))} 
        </div>
    );
};

export default ProductsDBPage;