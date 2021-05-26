import s from './Navbar.module.css'
import {NavLink} from "react-router-dom"
import FriendsList from "./FriendsList/FriendsList";

const Navbar = ({data}) => {

      return (
        <nav className={s.nav_bar}>
            <ul>
                <li>
                    <NavLink to="/profile" activeClassName={s.current}>Profile</NavLink>
                </li>
                <li>
                    <NavLink to="/dialogs" activeClassName={s.current}>Messages</NavLink>
                </li>
                <li>
                    <NavLink to="/">News</NavLink>
                </li>
                <li>
                    <NavLink to="/">Music</NavLink>
                </li>
                <li>
                    <NavLink to="/">Settings <img src="/setting.png" alt="setting" className={s.settings_img}/></NavLink>
                </li>
            </ul>
            <FriendsList data={data}/>
        </nav>
    )
}

export default Navbar