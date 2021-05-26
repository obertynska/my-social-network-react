import s from './DialogItem.module.css'
import {NavLink} from "react-router-dom"

const DialogItem = ({date , id, name, message, isActive}) => {
    let path = `/dialogs/${id}`;

    return (
        <NavLink to={path}>
            <div className={isActive ? `${s.dialog} ${s.active}` : `${s.dialog}`}>
                <div className={s.userAvatar}>
                    <img src="/user.png" alt="avatar"/>
                </div>
                <div className={s.userName}>
                    {name}
                </div>
                <div className={s.lastMessage}>
                    {message}
                </div>
                <div className={s.dialog_date}>{date}</div>
            </div>
        </NavLink>
    )
}



export default DialogItem;