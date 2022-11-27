import './index.scss';
import {NavLink} from 'react-router-dom';

const Menu = () => {
    return (
        <>
            <div className="nav_menu">
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="../projects">Projects</NavLink>
                    </li>
                    <li>
                        <NavLink to="../contact">Contact</NavLink>
                    </li>
                </ul>
            </div>

        </>
    )
}

export default Menu;