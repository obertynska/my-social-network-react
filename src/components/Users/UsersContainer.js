import {connect} from "react-redux";
import {
    toggleIsFollowed,
    setUsers,
    setTotalUsersAmount,
    paginate,
    toggleIsFetching, showUserProfile
} from "../../redux/usersReducer";

import React from "react";
import * as axios from "axios";
import Users from "./Users";


class UsersContainer extends React.Component {

    componentDidMount() {
        if (this.props.usersList.length === 0) {
            this.props.toggleIsFetching(true)
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.usersPerPage}`)
                .then(respose => {
                    this.props.setUsers(respose.data.items)
                    this.props.setTotalUsersAmount(respose.data.totalCount)
                    this.props.toggleIsFetching(false)
                })
        }
    }

    onPaginationPageChange = (pageNumber) => {
        this.props.toggleIsFetching(true)
        this.props.paginate(pageNumber);

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.usersPerPage}`)
            .then(respose => {
                this.props.setUsers(respose.data.items)
                this.props.toggleIsFetching(false)
            })
    }

    render() {
        return (
            <Users totalUsersAmount={this.props.totalUsersAmount}
                   usersPerPage={this.props.usersPerPage}
                   onPaginationPageChange={this.onPaginationPageChange}
                   currentPage={this.props.currentPage}
                   usersList={this.props.usersList}
                   toggleIsFollowed={this.props.toggleIsFollowed}
                   isFetching={this.props.isFetching}
                   showUserProfile={this.props.showUserProfile}
            />
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
