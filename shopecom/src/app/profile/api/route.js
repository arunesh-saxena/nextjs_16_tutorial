import { headers } from "next/headers";

export async function GET() {

    const headersList = await headers();
    console.log('Headers:', headersList.get('Authorization'));
    return new Response('<h1>Profile Data</h1', {
        headers: {  'Content-Type': 'text/html' }
    });
}