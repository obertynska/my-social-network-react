import s from './UserInfo.module.css'


const UserInfo = () => {
    return (
            <div className={s.user_info}>
                <div className={s.user_info__img}>
                    <img
                        src="/ira.png"
                        alt="user-logo"/>
                </div>
                <div className={s.user_info__data}>
                    <p className={s.user_info__name}>Iryna O</p>
                    <p>birth date: 12/07/1996</p>
                    <p>country: UA</p>
                </div>
            </div>

    )
}

export default UserInfo