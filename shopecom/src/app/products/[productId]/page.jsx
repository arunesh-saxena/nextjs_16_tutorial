import React from "react";

const ProductDetails = async ({ params }) => {
  const { productId } = await params;

  return (
    <div>
      <h2>Product Details for {productId}</h2>
      <p>Details about the product will go here.</p>
    </div>
  );
};

export default ProductDetails;
