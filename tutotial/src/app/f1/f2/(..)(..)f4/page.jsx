import React from 'react';
import Link from 'next/link';

const Page = () => {
    return (
        <div>
            <h1>Welcome to (..)(..) intercepted f4</h1>
            <p>This is a Next.js page component.</p>
            <Link href="/f1/f2/inner-f5">inner-F5</Link>
        </div>
    );
};

export default Page;