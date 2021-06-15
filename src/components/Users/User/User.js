import s from './User.module.css'
import userImage from "../../../images/user.png"
import {Link} from "react-router-dom";


const User = ({toggleIsFollowed, followed, id, name, imgSmallSrc, usersAreBeingToggledFollowingStatus}) => {

    return (
        <div className={s.userItem}>
            <Link to={`/profile/${id}`}>
                <img src={imgSmallSrc ? imgSmallSrc : userImage} alt="user-image"/>
                <p>{name}</p>
            </Link>
            <button
                disabled={usersAreBeingToggledFollowingStatus.some(userId => id === userId)}
                onClick={() => { toggleIsFollowed (id, followed) }}> {followed ? 'unfollow' : 'follow'}</button>
        </div>


    )
};

export default User