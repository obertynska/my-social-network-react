import {connect} from "react-redux";
import React from "react"
import {withRouter} from "react-router-dom";
import Profile from "./Profile";
import {
    getProfileInfo,
    getUserStatus,
    setUserProfileInfo,
    toggleIsFetching,
    updateUserStatus
} from "../../redux/profileReducer";
import {compose} from "redux"
import withAuthRedirect from "../../HOC/withAuthRedirect";


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userid = this.props.match.params.userId || this.props.loginedUserId || 17511;
        this.props.getUserStatus(userid)
        this.props.getProfileInfo(userid)
    }

    render() {
        return (
            <Profile
                isFetching={this.props.isFetching}
                userProfileInfo={this.props.userProfileInfo}
                updateUserStatus={this.props.updateUserStatus}
                userStatus={this.props.userStatus}
            />
        )
    }
}


const mapStateToProps = (state) => {
    return {
        isFetching: state.profileData.isFetching,
        userProfileInfo: state.profileData.userProfileInfo,
        showedProfileId: state.usersData.showedProfileId,
        loginedUserId: state.authData.userid,
        userStatus: state.profileData.userStatus
    }
}

const mapDispatchToProps = {
    toggleIsFetching,
    setUserProfileInfo,
    getProfileInfo,
    getUserStatus,
    updateUserStatus
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter,
    /*withAuthRedirect*/
)(ProfileContainer)
