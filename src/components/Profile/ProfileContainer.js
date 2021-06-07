import {connect} from "react-redux";
import React from "react"
import {withRouter} from "react-router-dom";
import Profile from "./Profile";
import * as axios from "axios";
import {setUserProfileInfo, toggleIsFetching} from "../../redux/profileReducer";
import {profileAPI} from "../../API/api";


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userid = this.props.match.params.userId || this.props.loginedUserId || 2;

        this.props.toggleIsFetching(true)
        profileAPI.getProfileInfo(userid)
            .then(data => {
                this.props.setUserProfileInfo(data)
                this.props.toggleIsFetching(false)
            })
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
    setUserProfileInfo
}

const ProfileWithUrlIfoContainer = withRouter(ProfileContainer)

export default connect(mapStateToProps, mapDispatchToProps)(ProfileWithUrlIfoContainer)
