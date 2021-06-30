import React from "react"
import {Field, reduxForm} from 'redux-form'
import {connect} from "react-redux";
import {login} from "../../redux/authReducer";
import s from "./Login.module.css"
import {Redirect} from "react-router-dom";


const LoginForm = ({error, handleSubmit, login}) => {
    return (
        <form onSubmit={handleSubmit(login)} className={s.loginForm}>
            <Field name="email" component="input" placeholder="Email" type="email"/>
            <Field name="password" component="input" placeholder="Password" type="password"/>
            <div className={s.rememberMe}>
                <Field name="rememberMe" component="input" type="checkbox"/>
                <label htmlFor="rememberMe">remember me?</label>
            </div>
            {error &&
            <div className={s.errorMessage}>{error}</div>
            }
            <button type="submit">log in</button>
        </form>

    )
}


const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)


const Login = ({login, isAuth, userId}) => {
    if(isAuth){
        return <Redirect to = {`/profile`}/>
    }else{
        return (
            <div className={s.loginForm__wrapper}>
                <h3>Login page</h3>
                <LoginReduxForm login={login}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    userId: state.authData.userid,
    isAuth: state.authData.isAuthorised
})

export default connect(mapStateToProps, {login})(Login)