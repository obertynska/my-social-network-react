import {authAPI} from "../API/api";
import {Redirect} from "react-router-dom";
import {stopSubmit} from "redux-form";

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
                ...action.userAuthData
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

export const setAuthUserData = (userid, login, email, isAuthorised) => {
    return {
        type: SET_AUTH_USER_DATA,
        userAuthData: {
            userid,
            login,
            email,
            isAuthorised
        }
    }
}

export const toggleIsFetching = (isFetching) => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching
    }
}


export const userAuthentication = () => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true))
        authAPI.auth()
            .then(data => {
                if (data.resultCode === 0) {
                    let {id, login, email} = data.data;
                    dispatch(setAuthUserData(id, login, email, true))
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
               dispatch( userAuthentication() )
            }else{
                let message = data.messages.length > 0 ? data.messages[0] : "Email or pwd is wrong."
                let action = stopSubmit('login', { _error: message})
                dispatch(action)
                dispatch(toggleIsFetching(false))
            }

        })
}

export const logout = () =>  (dispatch) => {
    dispatch(toggleIsFetching(true))
    authAPI.logout()
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false))
                dispatch(toggleIsFetching(false))
            }

        })
}

export default authReducer