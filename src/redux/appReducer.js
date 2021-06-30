import {userAuthentication} from "./authReducer"

const SET_IS_INITIALIZED_SUCCESSFULLY = 'SET_IS_INITIALIZED_SUCCESSFULLY'

let initialState = {
    isInitialized: false
}

const appReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_IS_INITIALIZED_SUCCESSFULLY:
            return {
                ...state,
                isInitialized: true
            }
        default:
            return state
    }
}


const setIsinitialized = () => {
    return {
        type: SET_IS_INITIALIZED_SUCCESSFULLY
    }
}

export const appInitialize = () => dispatch => {
    let isAuth = dispatch(userAuthentication())

    let promises = [isAuth];
    Promise.all(promises).then(() => {
        dispatch(setIsinitialized())
    })

}


export default appReducer