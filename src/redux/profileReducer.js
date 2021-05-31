const ADD_POST = 'ADD_POST',
    UPDATE_NEW_POST_CURRENT_MESSAGE = 'UPDATE_NEW_POST_CURRENT_MESSAGE',
    REMOVE_POST = 'REMOVE_POST'

let initialState = {
    posts: [
        {
            id: 1,
            message: 'hello! it is my first post',
            date: '15 May, 12:55',
            userName: 'Iryna O',
            likes: 55
        },
        {
            id: 2,
            message: 'second post',
            date: '16 May, 12:56',
            userName: 'Iryna O',
            likes: 5
        },
        {
            id: 3,
            message: '3d post',
            date: '17 May, 12:57',
            userName: 'Iryna O',
            likes: 10
        }
    ],
    newPostCurrentMessage: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 4,
                message: state.newPostCurrentMessage,
                date: '14 May, 12:57',
                userName: 'Iryna O',
                likes: 150
            }

            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostCurrentMessage: ''
            }

        case UPDATE_NEW_POST_CURRENT_MESSAGE:
            return {
                ...state,
                newPostCurrentMessage: action.message
            }

        case REMOVE_POST:
            return {
                ...state,
                posts: state["posts"].filter(post => post.id !== action.removedId)
            }
        default :
            return state;
    }
}


export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostCurrentMessageActionCreator = (postMessage) => ({
    type: UPDATE_NEW_POST_CURRENT_MESSAGE,
    message: postMessage
})
export const removePostActionCreator = (removedId) => ({
    type: REMOVE_POST,
    removedId: removedId
})

export default profileReducer