import s from './Header.module.css'
import Logo from '../../images/logo.png'
import {Link} from "react-router-dom";

const Header = ({userid,login, email,isAuthorised}) => {

    return(
        <header className={s.header}>
            <img
                src={Logo}
                alt="logo"/>
            <h1>My social network</h1>
            <div className={s.loginBlock}>
                {isAuthorised ? login : <Link to={'/login'} >Log in</Link> }
            </div>

        </header>
    )
}

export default Header;