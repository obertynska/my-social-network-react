import {connect} from "react-redux";
import React from "react"
import {withRouter} from "react-router-dom";
import Profile from "./Profile";
import {
    getProfileInfo,
    setUserProfileInfo,
    toggleIsFetching
} from "../../redux/profileReducer";
import {compose} from "redux"


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userid = this.props.match.params.userId || this.props.loginedUserId || 17511;
        this.props.getProfileInfo(userid)
    }

    render() {
        return (
            <Profile
                isFetching={this.props.isFetching}
                userProfileInfo={this.props.userProfileInfo}
                userId = {this.props.match.params.userId || this.props.loginedUserId || 17511}
            />
        )
    }
}


const mapStateToProps = (state) => {
    return {
        isFetching: state.profileData.isFetching,
        userProfileInfo: state.profileData.userProfileInfo,
        showedProfileId: state.usersData.showedProfileId,
        loginedUserId: state.authData.userid
    }
}

const mapDispatchToProps = {
    toggleIsFetching,
    setUserProfileInfo,
    getProfileInfo
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter,
    /*withAuthRedirect*/
)(ProfileContainer)
