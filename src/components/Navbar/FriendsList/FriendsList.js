import s from './FriendsList.module.css'
import Friend from "./Friend/Friend";
import {NavLink} from "react-router-dom"

const FriendsList = ({friendsList, friendsCount}) => {

    return (
        <div className={s.friends_wrapper}>
            <NavLink to="/friends" activeClassName={s.current} className={s.friends_link}>
                <p className={s.friends_heading}>My friends</p>
            </NavLink>
            <div className={s.friends_count}>Friends: <span>{friendsCount}</span></div>
            <div className={s.friends_list}>
                {friendsList.map(friend => <Friend key={friend.id} id={friend.id} name={friend.name}/>)}
            </div>
        </div>
    )
}

export default FriendsList