import React from "react"
import Header from "./Header";
import * as axios from "axios";
import {toggleIsFetching, setAuthUserData, userAuthentication} from "../../redux/authReducer"
import {connect} from "react-redux";
import {authAPI} from "../../API/api";

class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.userAuthentication()
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
    setAuthUserData,
    userAuthentication
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);