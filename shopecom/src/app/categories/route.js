export const dynamic = 'force-static';

export async function GET() {
    // Example data, replace with your actual data fetching logic
    const categories = [
        { id: 1, name: 'Electronics' },
        { id: 2, name: 'Books' },
        { id: 3, name: 'Clothing' }
    ];

    return  Response.json(categories);
}