import React from 'react';
import { getProducts } from '@/prisma-db';
import ProductDetail from './product-details';

const ProductsDBPage = async () => {
    const products = await getProducts();
    return (
        <div>
            <h1>Product Detail Page<
                        /h1>
            <ProductDetail products={products} />
        </div>
    );
};

export default ProductsDBPage;