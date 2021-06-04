import React from "react";
import {sendMessage, updateNewMessageBody} from "../../redux/dialogsReducer";
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

const mapDispatchToProps = {
    updateNewMessageBody,
    sendMessage
}



const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;