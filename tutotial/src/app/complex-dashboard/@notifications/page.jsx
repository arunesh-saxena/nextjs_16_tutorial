import Card from '@/app/_components/card';
import Link from 'next/link';
import React from 'react';

const NotificationsPage = () => {
    return (
        <Card title={'Notifications'} description={'This is the notifications page.'}>
            <p>Notofication Content</p>
            <Link href={'/complex-dashboard/archived'}>Archived Notifications</Link> 
        </Card>
    );
};

export default NotificationsPage;