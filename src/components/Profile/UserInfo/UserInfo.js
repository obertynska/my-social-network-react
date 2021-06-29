import s from './UserInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import userImg from "../../../images/user.png"
import UserStatusContainer from "./UserStatus/UserStatus";


const UserInfo = ({userInfo, userId}) => {

    if (!userInfo) {
        return <Preloader/>
    }

    return (

        <div className={s.user_info}>

            <div className={s.user_info__img}>
                <img
                    src={userInfo.photos.large ? userInfo.photos.large : userImg}
                    alt="user-image"/>
            </div>
            <h3 className={s.user_name}>{userInfo.fullName}</h3>
            <UserStatusContainer userId={userId}/>
            <div className={s.user_info__data}>
                <p><span>About me:</span> {userInfo.aboutMe ? userInfo.aboutMe : 'no information yet 😦'}</p>
                <p><span>My instagram:</span> {userInfo.contacts.instagram? userInfo.contacts.instagram : 'no information yet 😦' }</p>
                <p><span>My git:</span> {userInfo.contacts.github ? userInfo.contacts.github: 'no information yet 😦' }</p>
            </div>
        </div>


    )
}

export default UserInfo