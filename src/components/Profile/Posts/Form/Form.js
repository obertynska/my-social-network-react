import s from './Form.module.css'
import React from 'react'

const Form = ({updateNewPostCurrentMessage, addNewPost, newPostCurrentMessage}) => {

    let newPostTextArea = React.createRef();

    let getNewPostCurrentMessage = () => {
        let postMessage = newPostTextArea.current.value;
        updateNewPostCurrentMessage(postMessage)
    }

    let onAddNewPost = () => {
        addNewPost()
    }

    return (
        <form className={s.new_post}>
            <textarea name="new_post" id="new_post" value={newPostCurrentMessage} placeholder='Hi, how are you ?'
                      ref={newPostTextArea}
                      onChange={getNewPostCurrentMessage}></textarea>
            <button className={s.floating_button} onClick={onAddNewPost} type='button'>publish!</button>
        </form>
    )
}

export default Form