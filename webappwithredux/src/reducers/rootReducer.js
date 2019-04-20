// when your application gets bigger, you might have more than just one reducer.
// You might want to create separate reducers for each individual part of data.
// Then at the end combine those reducers into one single reducer which we then pass
// into the store.

const initState = {
    posts: [
        {
            "id": 1,
            "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        },
        {
            "id": 2,
            "title": "qui est esse",
            "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
        },
        {
            "id": 3,
            "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
            "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
        },
    ]
}

const rootReducer = (state = initState, action) => {
    if (action.type === "DELETE_POST") {
        const newPosts = state.posts.filter(post => post.id !== action.id);
        return {
            ...state,
            posts: newPosts
        }
    }
    // return the state, not wrapped by { }
    return state;
}

export default rootReducer;