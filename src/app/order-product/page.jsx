'use client';

import { useRouter } from 'next/navigation';

const OrderProductPage = () => {
    const router = useRouter();
    const handleClick = () => {
        alert('Order placed successfully!');
        router.push('/');
        // router.replace('/');
    };

    return (
        <div>
            <h1>Order Product</h1>
            <p>Welcome to the order product page. Here you can place your orders.</p>
            <button onClick={handleClick}>Order Now</button>
        </div>
    );
};

export default OrderProductPage;