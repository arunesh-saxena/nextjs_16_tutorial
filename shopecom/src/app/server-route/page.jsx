import {serverSideFunction} from '@/app/utils/server-utils';

const ServerRoutePage = () => {
    const result = serverSideFunction();
    return (
        <div>
            <h1>Server Route Page</h1>
            <p>This is a server-side rendered page in Next.js.</p>
            <br/>
            {result}
        </div>
    );
};

export default ServerRoutePage;