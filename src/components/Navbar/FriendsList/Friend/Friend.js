import s from './Friend.module.css'

const Friend = ({id, name}) =>{
    return (
    <div className={s.friend}>

        <img className={s.friend__img}
             src="/user.png"
             alt="friend-logo"/>

        <div className={s.friend_name}>{name}</div>
    </div>
    )
}

export default Friend