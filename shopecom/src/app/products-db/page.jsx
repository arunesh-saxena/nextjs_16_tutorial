import React from 'react';
import { getProducts } from '@/prisma-db';

const ProductsDBPage = async () => {
    const products = await getProducts();
    return (
        <div>
            <h1>Product Detail Page</h1>
            <ul className="space-y-4 p-4">
                {products.map((product) => (
                    <li
                        key={product.id}
                        className="p-4 bg-white shadow-md rounded-lg text-gray-700"
                    >
                        <h2 className="text-xl font-semibold">{product.title}</h2>
                        <p>{product.description}</p>
                        <p className="text-lg font-medium">${product.price}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductsDBPage;