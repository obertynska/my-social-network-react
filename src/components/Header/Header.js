import s from './Header.module.css'
import Logo from '../../images/logo.png'
import {Link} from "react-router-dom";

const Header = ({userid, login, logout, isAuthorised}) => {

    return (
        <header className={s.header}>
            <img
                src={Logo}
                alt="logo"/>
            <h1>My social network</h1>
            <div className={s.loginBlock}>
                {isAuthorised
                    ? <>
                        <Link to={`/profile/${userid}`} className={s.loginName}>{login}</Link>
                        <span onClick={logout} className={s.logoutBtn}></span>
                      </>
                    : <Link to={'/login'} className={s.loginBtn}>Log in</Link>}
            </div>

        </header>
    )
}

export default Header;