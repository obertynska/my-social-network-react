import s from './Form.module.css'
import React from 'react'
import {addPostActionCreator, updateNewPostCurrentMessageActionCreator} from "../../../../redux/profileReducer";


const Form = ({dispatch, newPostCurrentMessage}) => {

    let newPostTextArea = React.createRef();

    let getNewPostCurrentMessage = () => {
        let postMessage = newPostTextArea.current.value;
        let action = updateNewPostCurrentMessageActionCreator(postMessage)
        dispatch(action)
    }

    let addNewPost = () => {
        let action = addPostActionCreator()
        dispatch(action)
    }

    return (
        <form className={s.new_post}>
            <textarea name="new_post" id="new_post" value={newPostCurrentMessage} placeholder='Hi, how are you ?'
                      ref={newPostTextArea}
                      onChange={getNewPostCurrentMessage}></textarea>
            <button className={s.floating_button} onClick={addNewPost} type='button'>publish!</button>
        </form>
    )
}

export default Form