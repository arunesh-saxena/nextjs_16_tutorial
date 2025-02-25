import { comments } from './data.js';

export async function GET(request) {
    return Response.json(comments);
}

