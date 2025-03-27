'use client';
import React from 'react';
import LoginPage from './@login/page';

const ComplexDashboardLayout = ({ children, revenue, notifications, users, login }) => {
    const [isLoggedIn, setIsLoggedIn] = React.useState(false);
    const loginHandler = () => {
        console.log('loginHandler');
        setIsLoggedIn(true);
    };

    // const isLoggedIn = false;
    return isLoggedIn ? (
        <div>
            <main>
                {children}
            </main>

            <div style={{ display: 'flex' }}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div>{users}</div>
                    <div>{revenue}</div>
                </div>
                <div style={{ display: 'flex', flex: 1 }}>
                    {notifications}
                </div>
            </div>
        </div>
    ) : (
        <div>
            {login}
            {/* <LoginPage loginHandler={loginHandler} /> */}
        </div>
    );
};

export default ComplexDashboardLayout;