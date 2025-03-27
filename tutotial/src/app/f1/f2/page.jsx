import React from 'react';
import Link from 'next/link';

const F2 = () => {
    return (
        <div>
            <h1>Welcome to F2</h1>
            <p>This is a Next.js F2 component.</p>
            <Link href="/f4">F4</Link>
        </div>
    );
};

export default F2;