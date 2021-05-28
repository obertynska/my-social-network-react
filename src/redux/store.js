import React from "react";
import profileReducer from "./profileReducer";
import navbarReducer from "./navbarReducer";
import dialogsReducer from "./dialogsReducer";

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
        this._state.dialogsData = dialogsReducer(this._state.dialogsData, action)
        this._state.profileData = profileReducer(this._state.profileData, action)
        this._state.navBarData = navbarReducer(this._state.navBarData, action)

        this._callSubscriber(this._state)
    }
}




export default store;