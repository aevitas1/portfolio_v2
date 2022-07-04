import './index.scss';
import s from '../../assets/s_icon.png';
import {Link, NavLink} from 'react-router-dom';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHome, faUser, faEnvelope} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => (
    <div className="nav_bar">
        <Link className="logo" to="/">
            <img src={s} alt="Letter S"/>
        </Link>
        <nav>
            <NavLink exact='true' activeclassname='active' to='/'>
                <FontAwesomeIcon icon={faHome} color='#4d4d4e'/>
            </NavLink>
            <NavLink exact='true' activeclassname='active' to='/about'>
                <FontAwesomeIcon icon={faUser} color='#4d4d4e'/>
            </NavLink>
            <NavLink exact='true' activeclassname='active' to='/contact'>
                <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e'/>
            </NavLink>
        </nav>
    </div>
)

export default Sidebar;