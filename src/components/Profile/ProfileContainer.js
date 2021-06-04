import {connect} from "react-redux";
import React from "react"
import {withRouter} from "react-router-dom";
import Profile from "./Profile";
import * as axios from "axios";
import {setUserProfileInfo, toggleIsFetching} from "../../redux/profileReducer";


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userid = this.props.match.params.userId ?? 2;

        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userid}`)
            .then(respose => {
                this.props.setUserProfileInfo(respose.data)
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
        showedProfileId: state.usersData.showedProfileId
    }
}

const mapDispatchToProps = {
    toggleIsFetching,
    setUserProfileInfo
}

const ProfileWithUrlIfoContainer = withRouter(ProfileContainer)

export default connect(mapStateToProps, mapDispatchToProps)(ProfileWithUrlIfoContainer)
