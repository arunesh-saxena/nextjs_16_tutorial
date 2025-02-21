'use client';
import React from 'react';
import Card from '@/app/_components/card';

const LoginPage = ({ loginHandler, ...props }) => {
    console.log(props)
    const onSubmit = (e) => {
        e.preventDefault();
        loginHandler?.();
        console.log('Form submitted');
    }
    return (
        <Card title={'Login'} description={'This is the login page.'}>
            <form onSubmit={onSubmit}>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="username" required />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" required />
                </div>
                <button type="submit">Login</button>
            </form>
        </Card>
    );
};

export default LoginPage;