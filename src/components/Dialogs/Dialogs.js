import React, { useRef, useEffect } from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControl/FormsControl";
import {maxLength300, required} from "../../utilits/validator";
import {resetFields} from "../../utilits/resetField";


const Dialogs = ({ sendMessage, dialogs, messages}) => {

    const messageRef = useRef();

    useEffect(() => {
        if (messageRef.current) {
            messageRef.current.scrollIntoView(
                {
                    behavior: 'smooth',
                    block: 'end',
                    inline: 'nearest'
                })
        }
    })


    const submit = (formData) => sendMessage(formData.new_message)


    return (
        <div className={s.dialogs_wrapper} ref={messageRef}>

            <div className={s.dialogs_list}>
                {dialogs.map(dialog => <DialogItem key={dialog.id} name={dialog.name} id={dialog.id}
                                                   message={dialog.message}
                                                   date={dialog.date}
                                                   isActive={dialog.isActive}/>)}
            </div>

            <div className={s.dialogs_messages__wrapper} >

                <div className={s.dialogs_messages} >
                    {messages.map(message => <Message key={message.id} name={message.name} message={message.message}
                                                      date={message.date} id={message.id}/>)}

                </div>

                <div className={s.newMessage__wrapper} >

                    <img src="/ira.png" alt="avatar" className={s.userAvatar}/>
                    <NewMessageReduxForm onSubmit={submit}/>

                </div>
            </div>


        </div>

    )
}

const NewMessageForm = ({handleSubmit, pristine, submitting}) => {
    return (
        <form className={s.newMessage} onSubmit={handleSubmit}>
            <Field name="new_message" component={Textarea} type="text" validate={[required, maxLength300]} placeholder="Write a message..." />
            <button type='submit' disabled={pristine || submitting}>Send</button>
        </form>
    )
}

const onSubmit = resetFields('newMessage');

const NewMessageReduxForm = reduxForm({
    form: 'newMessage',
    touchOnBlur: false,
    onSubmitSuccess: onSubmit
})(NewMessageForm)

export default Dialogs;