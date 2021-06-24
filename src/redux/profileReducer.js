import {profileAPI} from "../API/api";

const ADD_POST = 'ADD_POST',
    UPDATE_NEW_POST_CURRENT_MESSAGE = 'UPDATE_NEW_POST_CURRENT_MESSAGE',
    REMOVE_POST = 'REMOVE_POST',
    SET_USER_PROFILE_INFO = 'SET_USER_PROFILE_INFO',
    TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING',
    SET_USER_STATUS = 'SET_USER_STATUS'

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
    newPostCurrentMessage: '',
    isFetching: false,
    userProfileInfo: null,
    userStatus: ''
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
        default :
            return state;
    }
}


export const addPost = () => ({type: ADD_POST})
export const updateNewPostCurrentMessage = (postMessage) => ({
    type: UPDATE_NEW_POST_CURRENT_MESSAGE,
    message: postMessage
})
export const removePost = (removedId) => ({
    type: REMOVE_POST,
    removedId: removedId
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