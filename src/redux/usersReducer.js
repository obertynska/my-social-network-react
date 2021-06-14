const
    TOGGLE_IS_FOLLOWED = 'TOGGLE_IS_FOLLOWED',
    PAGINATION_USERS = 'PAGINATION_USERS',
    SET_USERS = 'SET_USERS',
    SET_TOTAL_USERS_AMOUNT = 'SET_TOTAL_USERS_AMOUNT',
    TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING',
    SET_ID_SHOWED_PROFILE = 'SET_ID_SHOWED_PROFILE',
    TOGGLE_DISABLE_FOLLOWING_BTN = 'DISABLED_FOLLOWING_BTN'


let initialState = {
    usersList: [],
    usersPerPage: 5,
    totalUsersAmount: 0,
    currentPage: 1,
    pages: 6,
    isFetching: false,
    usersAreBeingToggledFollowingStatus: [],
    showedProfileId: 2
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
        case SET_ID_SHOWED_PROFILE:
            return {
                ...state,
                showedProfileId: action.userId
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

export const toggleIsFollowed = (userId) => {
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

export const setTotalUsersAmount = (totalUsersAmount) => {
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

export const showUserProfile = (userId) => {
    return {
        type: SET_ID_SHOWED_PROFILE,
        userId
    }
}

export default usersReducer