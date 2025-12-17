import { headers, cookies } from "next/headers";

export async function GET(request) {

    const headersList = await headers();
    const cookiesStore = await cookies();    
    cookiesStore.set('resultPerPage', '20');

    const theme = request.cookies.get('theme');

    console.log('Headers:', headersList.get('Authorization'));

    console.log('Cookies:', theme, cookiesStore.get('resultPerPage'));

    return new Response('<h1>Profile Data</h1', {
        headers: {  'Content-Type': 'text/html',
            'Set-Cookie': 'theme=dark',
         }
    });
}