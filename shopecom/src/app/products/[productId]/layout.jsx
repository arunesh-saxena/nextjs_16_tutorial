import React from "react";

const ProductLayout = ({ children }) => {
  return (
    <div>
      <header>
        <h1>Product Details header</h1>
      </header>
      <main>{children}</main>
      <footer>
        <p>© 2023 Shopecom Footer</p>
      </footer>
    </div>
  );
};

export default ProductLayout;
