const SEND_MESSAGE = 'SEND_MESSAGE',
    UPDATE_NEW_CURRENT_MESSAGE = ' UPDATE_NEW_CURRENT_MESSAGE'

const dialogsReducer = (state, action) => {
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