import {serverSideFunction} from '@/app/utils/server-utils';
// import { clientSideFunction } from '../utils/client-utils';


const ServerRoutePage = () => {
    const result = serverSideFunction();
    // const result2 = clientSideFunction();
    return (
        <div>
            <h1>Server Route Page</h1>
            <p>This is a server-side rendered page in Next.js.</p>
            <br/>
            {result}
            {/* {result2} */}
        </div>
    );
};

export default ServerRoutePage;