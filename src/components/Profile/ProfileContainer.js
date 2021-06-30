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
import withAuthRedirect from "../../HOC/withAuthRedirect";


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userid= this.props.match.params.userId || this.props.authUserId;
        this.props.getProfileInfo(userid)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            let userid= this.props.match.params.userId || this.props.authUserId;
            this.props.getProfileInfo(userid)
        }
    }

    render() {
        return (
            <Profile
                isFetching={this.props.isFetching}
                userProfileInfo={this.props.userProfileInfo}
                userId = {this.props.match.params.userId || this.props.authUserId}
            />
        )
    }
}


const mapStateToProps = (state) => {
    return {
        isFetching: state.profileData.isFetching,
        userProfileInfo: state.profileData.userProfileInfo,
        showedProfileId: state.usersData.showedProfileId,
        authUserId: state.authData.userid
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
    withAuthRedirect
)(ProfileContainer)
