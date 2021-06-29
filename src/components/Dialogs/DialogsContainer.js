import React from "react";
import {sendMessage} from "../../redux/dialogsReducer";
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

let DialogsContainer = compose(
    connect(mapStateToProps, {sendMessage}),
    withAuthRedirect
)(Dialogs)

export default DialogsContainer;