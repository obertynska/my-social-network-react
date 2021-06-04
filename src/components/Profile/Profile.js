import s from './Profile.module.css'
import UserInfo from "./UserInfo/UserInfo";
import PostsContainer from "./Posts/PostsContainer";

import Preloader from "../common/Preloader/Preloader";


const Profile = (props) => {

    return (
        <div className={s.content}>
            {props.isFetching ? <Preloader/> : null}
            <div className={s.content__image}></div>
            <UserInfo userInfo={props.userProfileInfo}/>
            <PostsContainer/>
        </div>
    )
}

export default Profile