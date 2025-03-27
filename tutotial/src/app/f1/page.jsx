import React from 'react';
import Link from "next/link";

const F1 = () => {
    return (
        <div>
            <h1>Welcome to F1 Page</h1>
            <ol>

                <li>(.) to match segemtns on the same level</li>
                <li>(..) to match segemtns one level above</li>
                <li>(..)(..) to match segemtns two level above</li>
                <li>(...) to match segemtns from root directory</li>
            </ol>
            <Link href="/f1/f2">Go to F2</Link>
            <Link href="/f3">Go to F3</Link>
        </div>
    );
};

export default F1;