import 'server-only';

export const serverSideFunction = () =>{
    console.log('This function is running on the server.');
    return 'server result';
}