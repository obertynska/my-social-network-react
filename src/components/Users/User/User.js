import s from './User.module.css'
import userImage from "../../../images/user.png"
import {Link} from "react-router-dom";
import {followAPI} from "../../../API/api";

const User = ({toggleIsFollowed, toggleIsFetching, followed, id, name, imgSmallSrc, disableFollowBtn, usersAreBeingToggledFollowingStatus}) => {

    return (
        <div className={s.userItem}>
            <Link to={`/profile/${id}`}>
                <img src={imgSmallSrc ? imgSmallSrc : userImage} alt="user-image"/>
                <p>{name}</p>
            </Link>
            <button
                disabled={usersAreBeingToggledFollowingStatus.some(userId => id === userId)}
                onClick={() => {
                disableFollowBtn(true, id)
                toggleIsFetching(true)
                followAPI.toggleIsFollowed(id, followed ? 'unfollow' : 'follow')
                    .then(data => {
                        if (data.resultCode === 0) {
                            toggleIsFollowed(id)
                            toggleIsFetching(false)
                        }
                        disableFollowBtn(false, id)
                    })
            }}>{followed ? 'unfollow' : 'follow'}</button>
        </div>


    )
};

export default User