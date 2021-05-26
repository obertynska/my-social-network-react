import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from "../../redux/dialogsReducer";


const Dialogs = ({data: {dialogs, messages, newMessage}, dispatch}) => {

    let newMessageTextarea = React.createRef()

    let saveCurrentMessage = () => {
        let textMessage = newMessageTextarea.current.value;
        let action = updateNewMessageBodyActionCreator(textMessage)
        dispatch(action)
    }

    let sendMessage = () => {
        let action = sendMessageActionCreator()
        dispatch(action)
    }


    return (
        <div className={s.dialogs_wrapper}>

            <div className={s.dialogs_list}>
                {dialogs.map(dialog => <DialogItem key={dialog.id} name={dialog.name} id={dialog.id}
                                                   message={dialog.message}
                                                   date={dialog.date}
                                                   isActive={dialog.isActive}/>)}
            </div>

            <div className={s.dialogs_messages__wrapper}>

                <div className={s.dialogs_messages}>
                    {messages.map(message => <Message key={message.id} name={message.name} message={message.message}
                                                      date={message.date} id={message.id}/>)}

                </div>

                <div className={s.newMessage__wrapper}>

                    <img src="/ira.png" alt="avatar" className={s.userAvatar}/>

                    <form className={s.newMessage} onSubmit={e => e.preventDefault()}>
                        <textarea name="new_message" id="new_message" placeholder="Write a message..." ref={newMessageTextarea} onChange={saveCurrentMessage} value={newMessage}></textarea>
                        <button onClick={sendMessage}>Send</button>
                    </form>
                </div>
            </div>


        </div>

    )
}

export default Dialogs;