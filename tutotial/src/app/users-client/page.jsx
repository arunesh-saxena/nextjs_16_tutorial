'use client';

import React, {  useEffect, useState } from 'react';

const UsersClientPage = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchUsers() {
            try {
                setLoading(true);
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                setUsers(data);
            } catch (error) {
                if (error instanceof Error) {
                    setError(error.message);
                } else {
                    setError('An unexpected error has occurred');
                }
            } finally {
                setLoading(false);
            }
        }
        fetchUsers();
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }



    return (
        <div>
            <h1>Users Client Page</h1>
            <p>Welcome to the Users Client Page.</p>
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

export default UsersClientPage;