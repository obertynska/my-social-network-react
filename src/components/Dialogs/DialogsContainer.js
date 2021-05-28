import React from "react";
import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";


const DialogsContainer = ({store}) => {

    let state = store.getState().dialogsData;

    let {dialogs, messages, newMessage} = state;

    let saveCurrentMessage = (textMessage) => {
        let action = updateNewMessageBodyActionCreator(textMessage)
        store.dispatch(action)
    }

    let sendMessage = () => {
        let action = sendMessageActionCreator()
        store.dispatch(action)
    }


    return (
        <Dialogs saveCurrentMessage={saveCurrentMessage} sendMessage={sendMessage} dialogs={dialogs} messages={messages} newMessage={newMessage}/>
    )
}

export default DialogsContainer;