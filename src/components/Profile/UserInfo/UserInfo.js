import s from './UserInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import userImg from "../../../images/user.png"

const UserInfo = ({userInfo}) => {

    if (!userInfo) {
        return <Preloader/>
    }

    return (

        <div className={s.user_info}>

            <div className={s.user_info__img}>
                <img
                    src={userInfo.photos.large ? userInfo.photos.large : userImg}
                    alt="user-logo"/>
            </div>
            <div className={s.user_info__data}>
                <p className={s.user_info__name}>{userInfo.fullName}</p>
                <p><span>About me:</span> {userInfo.aboutMe ? userInfo.aboutMe : 'no information yet 😦'}</p>
                <p><span>My instagram:</span> {userInfo.contacts.instagram? userInfo.contacts.instagram : 'no information yet 😦' }</p>
                <p><span>My git:</span> {userInfo.contacts.github ? userInfo.contacts.github: 'no information yet 😦' }</p>
            </div>
        </div>


    )
}

export default UserInfo