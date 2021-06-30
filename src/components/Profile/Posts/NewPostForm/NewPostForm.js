import s from './NewPostForm.module.css'
import React from 'react'
import { Field, reduxForm, reset} from 'redux-form'
import {Textarea} from "../../../common/FormsControl/FormsControl";
import {maxLength300, required} from "../../../../utilits/validator";
import {resetFields} from "../../../../utilits/resetField";

const NewPostForm = ({newPostCurrentMessage, handleSubmit, pristine, submitting}) => {

    return (
        <form className={s.new_post} onSubmit={handleSubmit}>
            <Field name="new_post" value={newPostCurrentMessage}  component={Textarea}  validate={[required, maxLength300]}  placeholder='Hi, how are you ?' />

            <button className={s.floating_button} type='submit' disabled={pristine || submitting}>publish!</button>

        </form>
    )
}


const NewPostReduxForm =  reduxForm({
    form: 'newPost',
    touchOnBlur: false,
    onSubmitSuccess: resetFields('newPost')
})(NewPostForm)

export default NewPostReduxForm