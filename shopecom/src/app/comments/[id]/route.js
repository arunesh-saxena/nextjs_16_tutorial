import { comments } from '../data.js';

export async function GET(request, { params }) {
    const { id } = await params;

    // Fetch the comment from your data source using the id
    const comment = await fetchCommentById(id);

    return Response.json(comment);
}

async function fetchCommentById(id) {
    

    return comments.find(comment => comment.id === parseInt(id));
}