import React from "react";
import {sendMessage, updateNewMessageBody} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import withAuthRedirect from "../../HOC/withAuthRedirect";
import {compose} from "redux"


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

let DialogsContainer = compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)

export default DialogsContainer;