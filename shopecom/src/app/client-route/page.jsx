'use client';
import { userTheme } from "../_components/theme-provider";
// import {serverSideFunction} from '@/app/utils/server-utils';
import { clientSideFunction } from '../utils/client-utils';

const ClientRoutePage = () => {
    //    const result = serverSideFunction();
    const result = clientSideFunction();
    const theme = userTheme();

    return (
        <div>
            <h1>Client Route Page</h1>
            <p style={{ color: theme.colors.primary }}>Welcome to the client route page!</p>
            <br />
            {result}
        </div>
    );
};

export default ClientRoutePage;