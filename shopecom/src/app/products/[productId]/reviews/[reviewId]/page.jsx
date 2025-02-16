import { notFound, redirect } from "next/navigation";
import React from "react";

const getRandomNum = (count) => {
  const randomInt = Math.floor(Math.random() * count);
  return randomInt;
};

const ReviewPage = async ({ params }) => {
  const { productId, reviewId } = await params;
  const randomNum = getRandomNum(2);
  if (randomNum === 1) {
    throw new Error("Random error");
  }
  if (reviewId > 100) {
    // notFound();
    redirect("/products");
  }

  return (
    <div>
      <h1>Review for Product {productId}</h1>
      <p>Review ID: {reviewId}</p>
    </div>
  );
};

export default ReviewPage;
