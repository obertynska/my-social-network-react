import React from "react";
import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    let {dialogs, messages, newMessage} = state.dialogsData;

    return {
        dialogs,
        messages,
        newMessage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        saveCurrentMessage: (textMessage) => {
            let action = updateNewMessageBodyActionCreator(textMessage)
            dispatch(action)
        },
        sendMessage: () => {
            let action = sendMessageActionCreator()
            dispatch(action)
        }
    }

}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;