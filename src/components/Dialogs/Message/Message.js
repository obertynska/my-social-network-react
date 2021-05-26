import s from './Message.module.css'


const Message = ({name, message, date}) => {
    return(
        <div className={s.message}>
            <div className={s.userAvatar}>
                <img src="/user.png" alt="avatar"/>
            </div>
            <div className={s.userName}>{name}</div>
            <div className={s.messageText}>{message}</div>
            <div className={s.messagetime}>{date}</div>
        </div>
    )
}

export default Message;