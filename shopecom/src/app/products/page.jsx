import Link from 'next/link';
import React from 'react';

const navList =[
    { href: "/products", label: "Product" },
    { href: "/products/1", label: "Product 1" },
    { href: "/products/2", label: "Product 2" }
  ];
const ProductsPage = () => {
    return (
        <div>
            <h1>Products Page</h1>
            <p>Welcome to the products page!</p>
            {navList.map((route, ind) => (
        <li key={route.href}>
          <Link href={route.href}>{route.label}</Link> 
          | <Link href={`${route.href}/reviews/${ind+1}`}>Read review</Link>
        </li>
      ))}
      <Link href='products/3' replace>Product 3</Link>
        </div>
    );
};

export default ProductsPage;