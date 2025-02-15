import React from "react";

const ProductDetails = async ({ params }) => {
  const { productId } = await params;

  return (
    <div>
      <h1>Product Details for {productId}</h1>
      <p>Details about the product will go here.</p>
    </div>
  );
};

export default ProductDetails;
