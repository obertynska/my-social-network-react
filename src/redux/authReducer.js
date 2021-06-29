import {authAPI} from "../API/api";
import {Redirect} from "react-router-dom";

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA',
    TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING',
    SET_AUTH_USER_ID = 'SET_AUTH_USER_ID'

let initialState = {
    userid: null,
    login: null,
    email: null,
    isAuthorised: false,
    isFetching: false
}

const authReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_AUTH_USER_DATA:
            return {
                ...state,
                ...action.userAuthData,
                isAuthorised: true,
            }
        case SET_AUTH_USER_ID:
            return {
                ...state,
                userid: action.userId,
                isAuthorised: true,
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        default:
            return state
    }
}

export const setAuthUserData = (userid, login, email) => {
    return {
        type: SET_AUTH_USER_DATA,
        userAuthData: {
            userid,
            login,
            email
        }
    }
}

export const toggleIsFetching = (isFetching) => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching
    }
}

const setAuthUserId = (userId) => ({
    type: SET_AUTH_USER_ID,
    userId
})

export const userAuthentication = () => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true))
        authAPI.auth()
            .then(data => {
                if (data.resultCode === 0) {
                    let {id, login, email} = data.data;
                    dispatch(setAuthUserData(id, login, email))
                }
                dispatch(toggleIsFetching(false))


            })
    }
}

export const login = (formData) =>  (dispatch) => {
    dispatch(toggleIsFetching(true))
    authAPI.login(formData)
        .then(data => {
            if (data.resultCode === 0) {
                setAuthUserId(data.userId)
                dispatch(toggleIsFetching(false))
            }

        })
}

export default authReducer