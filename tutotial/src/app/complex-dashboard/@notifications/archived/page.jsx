import Card from '@/app/_components/card';
import Link from 'next/link';
import React from 'react';

const ArchivedNotifications = () => {
    return (
        <Card title={'Archived Notifications'} description={'This is the archived notifications page.'}>       
            <p>Archived Content.</p>
            <Link href={'/complex-dashboard'}>Default</Link> 

        </Card>
    );
};

export default ArchivedNotifications;