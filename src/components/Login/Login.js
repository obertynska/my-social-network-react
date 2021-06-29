import React from "react"
import {Field, reduxForm} from 'redux-form'
import {connect} from "react-redux";
import {login} from "../../redux/authReducer";
import s from "./Login.module.css"

const LoginForm = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit} className={s.loginForm}>
            <div>
                <Field name="email" component="input" placeholder="Email" type="email"/>
            </div>
            <div>
                <Field name="password" component="input" placeholder="Password" type="password"/>
            </div>
            <div>
                <Field name="rememberMe" component="input" type="checkbox"/>
                <label htmlFor="rememberMe">remember me?</label>
            </div>
            <button type="submit">log in</button>
        </form>

    )
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)


const Login = (props) => {
    const submit = (formData) => {
       props.login(formData)
    }

    return (
        <div className={s.loginForm__wrapper}>
            <h3>Login page</h3>
            <LoginReduxForm onSubmit={submit} />
        </div>
    )
}

const mapStateToProps = (state) => ({
    userId : state.authData.userid
})

export default connect(mapStateToProps,{login})(Login)