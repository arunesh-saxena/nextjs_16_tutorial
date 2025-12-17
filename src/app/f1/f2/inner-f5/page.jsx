import React from 'react';
import Link from 'next/link';

const InnerF5Page = () => {
    return (
        <div>
            <h1>Welcome to Inner F5 Page</h1>
            <p>This is a page inside the f1/f2/inner-f5 directory.</p>

            <Link href="/f5">F5</Link>
        </div>
    );
};

export default InnerF5Page;