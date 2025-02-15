import Link from "next/link";
import React from "react";

const ProductLayout = ({ children }) => {
  return (
    <div>
      <header>
        <h1><Link href='/products'>Product</Link> Details header</h1>
      </header>
      <main>{children}</main>
      <footer>
        <p>© 2023 Shopecom Footer</p>
      </footer>
    </div>
  );
};

export default ProductLayout;
