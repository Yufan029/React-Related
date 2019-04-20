// this is action creator used in the Post.js file to retrieve the action.

export const deletePost = (id) => {
    return {
        type: 'DELETE_POST',
        id
    }
}