import React from "react"
import Header from "./Header";
import {toggleIsFetching, setAuthUserData, userAuthentication, logout} from "../../redux/authReducer"
import {connect} from "react-redux";


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
    userAuthentication,
    logout
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);