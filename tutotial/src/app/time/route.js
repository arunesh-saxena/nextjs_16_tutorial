export const dynamic = 'force-static';
export const revalidate = 5; /* only work with GET menthod the value is in seconds */

export async function GET() {
    const currentTime = new Date().toLocaleTimeString();
    //    return res.json({ time: currentTime });
    // return  Response({ currentTime });
    return Response.json({currentTime})
}