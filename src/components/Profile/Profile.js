import s from './Profile.module.css'
import Posts from "./Posts/Posts";
import UserInfo from "./UserInfo/UserInfo";


const Profile = ({data: {posts, newPostCurrentMessage}, dispatch}) => {

    return (
        <div className={s.content}>
            <div className={s.content__image}>
                {/*   <img src="https://bluoo.digital/wp-content/uploads/2020/10/outstanding-social-media-campaigns-5f60d3e4bb13b.png"
                     alt="contentImg"/>*/}
            </div>
            <UserInfo/>
            <Posts posts={posts} dispatch={dispatch} newPostCurrentMessage={newPostCurrentMessage}/>
        </div>
    )
}

export default Profile
