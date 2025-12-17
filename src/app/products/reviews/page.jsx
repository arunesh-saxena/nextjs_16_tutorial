import { Suspense } from 'react';
import Product from '@/app/_components/product';
import Reviews from '@/app/_components/reviews';

const ReviewsPage = () => {
    return (
        <div>
            <h1>Product Reviews</h1>
            <p>Here you can find reviews for our products.</p>
            <Suspense fallback={<div>Loading Product...</div>}>
                <Product name='Product 1' description='description 1' price='price 1' />
            </Suspense>
            <Suspense fallback={<div>Loading Review...</div>}>

                <Reviews />
            </Suspense>
        </div>
    );
};

export default ReviewsPage;