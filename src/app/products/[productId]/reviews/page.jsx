import React from 'react';

const reviewsList = [
    {
        id: 1,
        author: 'John Doe',
        rating: 5,
        comment: 'Great product!',
    },
    {
        id: 2,
        author: 'Jane Smith',
        rating: 4,
        comment: 'Very useful, but could be improved.',
    },
    {
        id: 3,
        author: 'Sam Wilson',
        rating: 3,
        comment: 'Average quality, not bad.',
    },
];

const ReviewsPage = () => {
    return (
        <div>
            <h1>Product Reviews</h1>
            <ul>
                {reviewsList.map((review) => (
                    <li key={review.id}>
                        <h2>{review.author}</h2>
                        <p>Rating: {review.rating}</p>
                        <p>{review.comment}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ReviewsPage;