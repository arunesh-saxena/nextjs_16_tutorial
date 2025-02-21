import React from 'react';
import Card from '@/app/_components/card';

const DefaultUserDashboard = () => {
    return (
        <Card title={'User Dashboard'}
            description={'This is the default dashboard for users.'}>
            <p>Default content.</p>
        </Card>
    );
};

export default DefaultUserDashboard;