import React from 'react';

const DocsPage = async ({params}) => {
    const { slug } = await params;

    return (
        <div>
            <h1>Documentation Page</h1>
            <p>Slug: {slug ? slug.join('/') : 'Loading...'}</p>
            {slug?.length == 1 ? ('docs content'): ' docs/ subpage content'}
        </div>
    );
};

export default DocsPage;