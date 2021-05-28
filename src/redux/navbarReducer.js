let initialState = {
    friendsCount: 175,
    friendsList: [
        {
            id: 1,
            name: 'Alex'
        },
        {
            id: 2,
            name: 'Aliona'
        },
        {
            id: 3,
            name: 'Dasha'
        },
        {
            id: 4,
            name: 'Ania'
        },
        {
            id: 5,
            name: 'Vova'
        },
        {
            id: 6,
            name: 'Katia'
        }
    ]
}

const navbarReducer = (state = initialState, action) => {
    return state
}

export default navbarReducer