import {profileAPI} from "../API/api";

const ADD_POST = 'ADD_POST',
    REMOVE_POST = 'REMOVE_POST',
    SET_USER_PROFILE_INFO = 'SET_USER_PROFILE_INFO',
    TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING',
    SET_USER_STATUS = 'SET_USER_STATUS',
    ADD_lIKE = 'ADD_lIKE',
    REMOVE_lIKE = 'REMOVE_lIKE'

let initialState = {
    posts: [
        {
            id: 1,
            message: 'hello! it is my first post',
            date: '15 May, 12:55',
            userName: 'Iryna O',
            likes: 55,
            isLiked: false
        },
        {
            id: 2,
            message: 'second post',
            date: '16 May, 12:56',
            userName: 'Iryna O',
            likes: 5,
            isLiked: false
        },
        {
            id: 3,
            message: '3d post',
            date: '17 May, 12:57',
            userName: 'Iryna O',
            likes: 10,
            isLiked: false
        }
    ],

    isFetching: false,
    userProfileInfo: null,
    userStatus: ''
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 4,
                message: action.postText,
                date: action.date,
                userName: 'Iryna O',
                likes: 0,
                isLiked: false
            }

            return {
                ...state,
                posts: [...state.posts, newPost]
            }

        case REMOVE_POST:
            return {
                ...state,
                posts: state["posts"].filter(post => post.id !== action.removedId)
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case SET_USER_PROFILE_INFO:
            return {
                ...state,
                userProfileInfo: {...action.userProfileInfo}
            }
        case SET_USER_STATUS:
            return {
                ...state,
                userStatus: action.status
            }
        case ADD_lIKE:
            return {
                ...state,
                posts: state.posts.map(post => {
                    if (post.id === action.postId) {
                       return {
                                ...post,
                                likes: post.likes + 1,
                                isLiked: true
                            }
                    }
                    return post
                })
            }
        case REMOVE_lIKE:
            return {
                ...state,
                posts: state.posts.map(post => {
                    if (post.id === action.postId) {
                        return {
                            ...post,
                            likes: post.likes - 1,
                            isLiked: false
                        }
                    }
                    return post
                })
            }
        default :
            return state;
    }
}


export const addPost = (postText) => ({
    type: ADD_POST,
    postText,
    date: new Date().toUTCString()
})


export const removePost = (removedId) => ({
    type: REMOVE_POST,
    removedId
})

export const addLike = (postId) => ({
    type: ADD_lIKE,
    postId
})

export const removeLike = (postId) => ({
    type: REMOVE_lIKE,
    postId
})
export const setUserProfileInfo = (userProfileInfo) => {
    return {
        type: SET_USER_PROFILE_INFO,
        userProfileInfo
    }
}

export const toggleIsFetching = (isFetching) => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching
    }
}

export const getProfileInfo = (userId) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true))
        profileAPI.getProfileInfo(userId)
            .then(data => {
                dispatch(setUserProfileInfo(data))
                dispatch(toggleIsFetching(false))
            })

    }
}


export const setUserStatus = (status) => {
    return {
        type: SET_USER_STATUS,
        status
    }
}


export const getUserStatus = userId => dispatch => {
    dispatch(toggleIsFetching(true))
    profileAPI.getUserStatus(userId)
        .then(data => {
            dispatch(setUserStatus(data))
            dispatch(toggleIsFetching(false))
        })
}


export const updateUserStatus = newStatus => dispatch => {
    dispatch(toggleIsFetching(true))
    profileAPI.updateUserStatus(newStatus)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(setUserStatus(newStatus))
                dispatch(toggleIsFetching(false))
            }
        })
}


export default profileReducer