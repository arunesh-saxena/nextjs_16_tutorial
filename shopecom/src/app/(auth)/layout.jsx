import React from 'react';

const AuthLayout = ({ children }) => {
    return (
        <div className="auth-layout">
            <header>
                <h1>Authentication header</h1>
            </header>
            <main>{children}</main>
            <footer>
                <p>&copy; 2023 Shopecom footer</p>
            </footer>
        </div>
    );
};

export default AuthLayout;