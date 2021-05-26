import React from "react";

let ADD_POST = 'ADD_POST',
    SAVE_NEW_POST_CURRENT_MESSAGE = 'SAVE_NEW_POST_CURRENT_MESSAGE',
    SEND_MESSAGE = 'SEND_MESSAGE',
    SAVE_NEW_CURRENT_MESSAGE = ' SAVE_NEW_CURRENT_MESSAGE'


let store = {
    _state: {
        profileData: {
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
            newPostCurrentMessage: ''
        },
        dialogsData: {
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
        },
        navBarData: {
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
    },
    _callSubscriber() {
        console.log('state was changed')
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 4,
                message: this._state.profileData.newPostCurrentMessage,
                date: '14 May, 12:57',
                userName: 'Iryna O',
                likes: 150
            }
            this._state.profileData.posts.push(newPost)
            this._state.profileData.newPostCurrentMessage = ''
            this._callSubscriber(this._state)
        } else if (action.type === SAVE_NEW_POST_CURRENT_MESSAGE) {
            this._state.profileData.newPostCurrentMessage = action.message
            this._callSubscriber(this._state)
        } else if (action.type === SEND_MESSAGE) {
            let newMessage = {
                id: 4,
                name: 'ira',
                message: this._state.dialogsData.newMessage,
                date: '18:22'
            }
            this._state.dialogsData.messages.push(newMessage)
            this._state.dialogsData.newMessage = ''
            this._callSubscriber(this._state)
        } else if (action.type === SAVE_NEW_CURRENT_MESSAGE) {
            this._state.dialogsData.newMessage = action.message
            this._callSubscriber(this._state)
        }

    }
}

export let addPostActionCreator = () => ({type: ADD_POST})
export let getNewPostCurrentMessageActionCreator = (postMessage) => ({
    type: SAVE_NEW_POST_CURRENT_MESSAGE,
    message: postMessage
})
export let sendNewMessageActionCreator = (textMessage) => ({type: SAVE_NEW_CURRENT_MESSAGE, message: textMessage})
export let sendMessageActionCreator = () => ({type: SEND_MESSAGE})


window.store = store;
export default store;