import s from './Profile.module.css'
import UserInfo from "./UserInfo/UserInfo";
import PostsContainer from "./Posts/PostsContainer";


const Profile = () => {

    return (
        <div className={s.content}>
            <div className={s.content__image}>
                {/*   <img src="https://bluoo.digital/wp-content/uploads/2020/10/outstanding-social-media-campaigns-5f60d3e4bb13b.png"
                     alt="contentImg"/>*/}
            </div>
            <UserInfo/>
            <PostsContainer/>
        </div>
    )
}

export default Profile
