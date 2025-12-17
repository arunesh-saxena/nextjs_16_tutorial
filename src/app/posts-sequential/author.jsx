import React from 'react';

const Author = async ({ userId }) => {
    await new Promise(resolve => setTimeout(resolve, 3000));

    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const users = await response.json();
    console.log(users.name);
    return (
        <div className="author">
            <h2 className="author-name">Athor name: {users.name}</h2>
        </div>
    );
};

export default Author;