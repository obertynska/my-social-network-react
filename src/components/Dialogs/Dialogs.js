import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = ({updateNewMessageBody, sendMessage, dialogs, messages, newMessage}) => {

    let newMessageTextarea = React.createRef()

    let getCurrentMessage = () => {
        let textMessage = newMessageTextarea.current.value;
        updateNewMessageBody(textMessage)
    }

    let onSendMessage = () => {
        sendMessage()
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
                        <textarea name="new_message" id="new_message" placeholder="Write a message..."
                                  ref={newMessageTextarea} onChange={getCurrentMessage} value={newMessage}></textarea>
                        <button onClick={onSendMessage}>Send</button>
                    </form>
                </div>
            </div>


        </div>

    )
}

export default Dialogs;