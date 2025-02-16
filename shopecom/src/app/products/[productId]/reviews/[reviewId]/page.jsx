import { notFound, redirect } from 'next/navigation';
import React from 'react';

const ReviewPage = async({params}) => {
    const { productId, reviewId } = await params;
    if(reviewId > 100) {
        // notFound();
        redirect('/products');
    }

    return (
        <div>
            <h1>Review for Product {productId}</h1>
            <p>Review ID: {reviewId}</p>
        </div>
    );
};

export default ReviewPage;