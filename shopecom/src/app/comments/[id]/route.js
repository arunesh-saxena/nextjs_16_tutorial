import { comments } from '../data.js';

export async function GET(request, { params }) {
    const { id } = await params;

    // Fetch the comment from your data source using the id
    const comment = await fetchCommentById(id);

    return Response.json(comment);
}

export async function PATCH(request, { params }) {
    const { id } = await params;

    const body = await request.json();
    const {text} = body;

    // Update the comment in your data source using the id and updatedData
    const updatedComment = await updateCommentById(id, text);

    return Response.json(updatedComment);
}

async function updateCommentById(id, updatedData) {
    const commentIndex = comments.findIndex(comment => comment.id === parseInt(id));
    if (commentIndex === -1) {
        throw new Error('Comment not found');
    }

    comments[commentIndex].text = updatedData;
    return comments[commentIndex];
}

async function fetchCommentById(id) {


    return comments.find(comment => comment.id === parseInt(id));
}