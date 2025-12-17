import React from 'react';

const Reviews = async () => {
    await new Promise(resolve => setTimeout(resolve, 4000));

    return (
        <div>
            <h2>Customer Reviews</h2>
            <ul>
                <li>Review 1: Great product!</li>
                <li>Review 2: Fast shipping and excellent quality.</li>
                <li>Review 3: Will buy again.</li>
            </ul>
        </div>
    );
};

export default Reviews;