
import React from 'react';

const UsersServerPage = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();


    return (
        <div>
            <h1>Users Server Page</h1>
            <p>Welcome to the Users Server Page.</p>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        <div>Username: {user.name}</div>
                        <div>Email: {user.email}</div>
                        <div>Phone: {user.phone}</div>
                    </li>

                ))}
            </ul>
        </div>
    );
};

export default UsersServerPage;