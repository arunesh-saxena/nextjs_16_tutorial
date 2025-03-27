import React, { Suspense } from 'react';
import Author from './author';

const PostsSequentialPage = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await response.json();
    return (
        <div>
            <h1>Posts Sequential Page</h1>
            <p>This is the posts sequential page.</p>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        <div>Title: {post.title}</div>
                        <div>Body: {post.body}</div>
                        <Suspense fallback={(
                            <div>Loading author...</div>
                        )}><Author userId={post.userId} /></Suspense>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PostsSequentialPage;