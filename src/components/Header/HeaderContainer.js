import React from "react"
import Header from "./Header";
import * as axios from "axios";
import {toggleIsFetching, setAuthUserData} from "../../redux/authReducer"
import {connect} from "react-redux";
import {authAPI} from "../../API/api";

class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        authAPI.auth()
            .then(data => {
                if (data.resultCode === 0) {
                    this.props.toggleIsFetching(false)
                    let {id, login, email}= data.data;
                    this.props.setAuthUserData(id, login, email)
                }

            })
    }

    render() {
        return (
            <Header {...this.props}/>
        )
    }
}

const mapStateToProps = state => ({
    userid: state.authData.userid,
    login: state.authData.login,
    email: state.authData.email,
    isAuthorised: state.authData.isAuthorised
})

const mapDispatchToProps = {
    toggleIsFetching,
    setAuthUserData
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);