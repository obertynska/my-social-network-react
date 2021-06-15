import {connect} from "react-redux";
import React from "react"
import {withRouter} from "react-router-dom";
import Profile from "./Profile";
import {getProfileInfo, setUserProfileInfo, toggleIsFetching} from "../../redux/profileReducer";
import {profileAPI} from "../../API/api";


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userid = this.props.match.params.userId || this.props.loginedUserId || 2;

        this.props.getProfileInfo(userid)
    }

    render() {
        return (
            <Profile
                isFetching={this.props.isFetching}
                userProfileInfo={this.props.userProfileInfo}
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

const ProfileWithUrlIfoContainer = withRouter(ProfileContainer)

export default connect(mapStateToProps, mapDispatchToProps)(ProfileWithUrlIfoContainer)
