import {connect} from "react-redux";
import {
    toggleIsFollowed,
    setUsers,
    setTotalUsersAmount,
    paginate,
    toggleIsFetching, showUserProfile
} from "../../redux/usersReducer";

import React from "react";
import Users from "./Users";
import {usersAPI} from "../../API/api";


class UsersContainer extends React.Component {

    componentDidMount() {
        if (this.props.usersList.length === 0) {
            this.props.toggleIsFetching(true)

            usersAPI.getUsers(this.props.currentPage, this.props.usersPerPage)
                .then(data => {
                    this.props.setUsers(data.items)
                    this.props.setTotalUsersAmount(data.totalCount)
                    this.props.toggleIsFetching(false)
                })
        }
    }

    onPaginationPageChange = (pageNumber) => {
        this.props.toggleIsFetching(true)
        this.props.paginate(pageNumber);

        usersAPI.getUsers(pageNumber, this.props.usersPerPage)
            .then(data => {
                this.props.setUsers(data.items)
                this.props.toggleIsFetching(false)
            })
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
        isFetching: state.usersData.isFetching
    }
}

const actionCreators = {
    toggleIsFollowed,
    setUsers,
    setTotalUsersAmount,
    paginate,
    toggleIsFetching,
    showUserProfile
}


export default connect(mapStateToProps, actionCreators)(UsersContainer)
