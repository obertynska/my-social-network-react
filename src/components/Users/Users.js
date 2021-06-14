import s from './Users.module.css'
import React from "react";
import User from "./User/User";
import Preloader from "../common/Preloader/Preloader";


const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersAmount / props.usersPerPage)

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div className={s.userList_content}>

            {props.isFetching ?  <Preloader/> : null}

            <h2>Social network`s users</h2>

            <div className={s.pagination_wrapper}>
                {
                    pages.map(pageNumber => {
                        return <span key={pageNumber} onClick={() => props.onPaginationPageChange(pageNumber)}
                                     className={pageNumber === props.currentPage ? s.selectedPage : null}>{pageNumber}</span>
                    })
                }

            </div>

            {
                props.usersList.map(user => {
                    return <User id={user.id} key={user.id} name={user.name}
                                 followed={user.followed} imgSmallSrc={user.photos.small}
                                 toggleIsFollowed={props.toggleIsFollowed}
                                 toggleIsFetching={props.toggleIsFetching}
                                 showUserProfile={props.showUserProfile}
                                 usersAreBeingToggledFollowingStatus={props.usersAreBeingToggledFollowingStatus}
                                 disableFollowBtn={props.disableFollowBtn}
                    />
                })
            }

        </div>
    )

}

export default Users
