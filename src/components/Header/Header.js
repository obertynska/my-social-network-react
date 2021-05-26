import s from './Header.module.css'
import Logo from '../../images/logo.png'

const Header = () => {
    return(
        <header className={s.header}>
            <img
                src={Logo}
                alt="logo"/>
            <h1>My social network</h1>
        </header>
    )
}

export default Header;