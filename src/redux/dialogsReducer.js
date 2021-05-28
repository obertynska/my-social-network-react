const SEND_MESSAGE = 'SEND_MESSAGE',
    UPDATE_NEW_CURRENT_MESSAGE = ' UPDATE_NEW_CURRENT_MESSAGE'

let initialState = {
    dialogs: [
        {
            id: 1,
            name: 'ira',
            message: 'nice!',
            date: '12:55',
            isActive: false
        },
        {
            id: 2,
            name: 'Aliona',
            message: 'hi, sister!',
            date: '12:54',
            isActive: true
        }
    ],
    messages: [
        {
            id: 1,
            name: 'ira',
            message: 'hello!',
            date: '12:55'
        },
        {
            id: 2,
            name: 'Alex',
            message: 'hi, how are you?',
            date: '12:54'
        },
        {
            id: 3,
            name: 'ira',
            message: 'nice!',
            date: '12:55'
        }
    ],
    newMessage: ''
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            const newMessage = {
                id: 4,
                name: 'ira',
                message: state.newMessage,
                date: '18:22'
            }
            state.messages.push(newMessage)
            state.newMessage = ''
            return state;
        case UPDATE_NEW_CURRENT_MESSAGE:
            state.newMessage = action.message
            return state;
        default:
            return state
    }


}


export const updateNewMessageBodyActionCreator = (textMessage) => ({
    type: UPDATE_NEW_CURRENT_MESSAGE,
    message: textMessage
})
export const sendMessageActionCreator = () => ({type: SEND_MESSAGE})

export default dialogsReducer