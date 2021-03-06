import {followAPI, usersAPI} from "../API/api";

const
    TOGGLE_IS_FOLLOWED = 'TOGGLE_IS_FOLLOWED',
    PAGINATION_USERS = 'PAGINATION_USERS',
    SET_USERS = 'SET_USERS',
    SET_TOTAL_USERS_AMOUNT = 'SET_TOTAL_USERS_AMOUNT',
    TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING',
    TOGGLE_DISABLE_FOLLOWING_BTN = 'DISABLED_FOLLOWING_BTN'


let initialState = {
    usersList: [],
    usersPerPage: 5,
    totalUsersAmount: 0,
    currentPage: 1,
    pages: 6,
    isFetching: false,
    usersAreBeingToggledFollowingStatus: [],

}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {

        case TOGGLE_IS_FOLLOWED :
            return {
                ...state,
                usersList: state.usersList.map((user) => {
                    if (user.id === action.userId) {
                        return {
                            ...user,
                            followed: !user.followed
                        }
                    }
                    return user
                })
            }
        case PAGINATION_USERS :
            return {
                ...state,
                currentPage: action.pageNumber
            }
        case SET_USERS :
            return {
                ...state,
                usersList: [...action.users]
            }
        case SET_TOTAL_USERS_AMOUNT:
            return {
                ...state,
                totalUsersAmount: action.totalUsersAmount
            }
        case TOGGLE_IS_FETCHING :
            return {
                ...state,
                isFetching: action.isFetching
            }

        case TOGGLE_DISABLE_FOLLOWING_BTN:
            return {
                ...state,
                usersAreBeingToggledFollowingStatus:
                    action.isFetching
                        ? [...state.usersAreBeingToggledFollowingStatus, action.userId]
                        : state.usersAreBeingToggledFollowingStatus.filter(userId => userId !== userId)
            }

        default:
            return state
    }

}

export const toggleIsFollowedAC = (userId) => {
    return {
        type: TOGGLE_IS_FOLLOWED,
        userId
    }
}

export const setUsers = (users, totalUsersAmount) => {
    return {
        type: SET_USERS,
        users
    }
}

export const setTotalUsersAmount = (totalUsersAmount = 0) => {
    return {
        type: SET_TOTAL_USERS_AMOUNT,
        totalUsersAmount
    }
}

export const paginate = (pageNumber) => {
    return {
        type: PAGINATION_USERS,
        pageNumber
    }
}

export const toggleIsFetching = (isFetching) => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching
    }
}

export const disableFollowBtn = (isFetching, userId) => {
    return {
        type: TOGGLE_DISABLE_FOLLOWING_BTN,
        isFetching,
        userId
    }
}



export const getUsers = (currentPage, usersPerPage) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true))

        usersAPI.getUsers(currentPage, usersPerPage)
            .then(data => {
                dispatch(setUsers(data.items))
                dispatch(setTotalUsersAmount(data.totalCount))
                dispatch(toggleIsFetching(false))
            })
    }
}

export const toggleIsFollowed = (userId, isFollowed) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true))
        dispatch(disableFollowBtn(true, userId))
        followAPI.toggleIsFollowed(userId, isFollowed ? 'unfollow' : 'follow')
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(toggleIsFollowedAC(userId))
                    dispatch(toggleIsFetching(false))
                }
                dispatch(disableFollowBtn(false, userId))
            })
    }
}


export default usersReducer