import {connect} from "react-redux";
import {
    paginate,
    showUserProfile,
    getUsers, toggleIsFollowed
} from "../../redux/usersReducer";

import React from "react";
import Users from "./Users";
import withAuthRedirect from "../../HOC/withAuthRedirect";
import {compose} from "redux"


class UsersContainer extends React.Component {

    componentDidMount() {
        if (this.props.usersList.length === 0) {
            this.props.getUsers(this.props.currentPage, this.props.usersPerPage)
        }
    }

    onPaginationPageChange = (pageNumber) => {
        this.props.paginate(pageNumber);
        this.props.getUsers(pageNumber, this.props.usersPerPage)
    }

    render() {
        return (
            <Users {...this.props} onPaginationPageChange={this.onPaginationPageChange}/>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        usersList: state.usersData.usersList,
        usersPerPage: state.usersData.usersPerPage,
        totalUsersAmount: state.usersData.totalUsersAmount,
        currentPage: state.usersData.currentPage,
        isFetching: state.usersData.isFetching,
        usersAreBeingToggledFollowingStatus: state.usersData.usersAreBeingToggledFollowingStatus
    }
}

export default compose(
    connect(mapStateToProps,
        {
            paginate,
            showUserProfile,
            getUsers,
            toggleIsFollowed
        }),
    withAuthRedirect
)(UsersContainer)
