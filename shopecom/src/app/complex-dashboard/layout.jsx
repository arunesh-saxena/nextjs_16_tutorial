import React from 'react';

const ComplexDashboardLayout = ({ children, revenue, notifications, users }) => {
    return (
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
    );
};

export default ComplexDashboardLayout;