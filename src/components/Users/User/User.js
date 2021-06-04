import s from './User.module.css'
import userImage from "../../../images/user.png"
import {Link} from "react-router-dom";

const User = ({toggleIsFollowed, follow, id, name, imgSmallSrc, showUserProfile}) => {



    return (
        <Link to={`/profile/${id}`}>
        <div className={s.userItem}>
            <img src={imgSmallSrc ? imgSmallSrc : userImage} alt="user-image"/>
         <p>{name}</p>
            <p onClick={()=> toggleIsFollowed(id)}>{follow ? 'followed' : 'unfollowed'}</p>
        </div>
        </Link>

    )
};

export default User