import React from 'react';

const BlogPage = async () => {
    await new Promise((resolve) => setTimeout(()=>{
        resolve('Intentional delay');
    }, 2000));
    return (
        <div>
            <h1>Blog Page</h1>
            <p>Welcome to the blog page!</p>
        </div>
    );
};

export default BlogPage;