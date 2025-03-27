import React  from 'react';

const UserPage = async ({ params }) => {
    const { id } = params;

    const postsData = getUsersPost(id);
    const albumsData = getUsersAlbums(id);

    const [posts, albums] = await Promise.all([postsData, albumsData]);
    console.log({posts, albums});
    return (
        <div>
            <h1>User Page</h1>
            <p>User ID: {id}</p>
        </div>
    );
};

export async function getUsersPost(userId) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${userId}`);

    return res.json();
}
export async function getUsersAlbums(userId) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/albums/${userId}`);

    return res.json();
}

export default UserPage;