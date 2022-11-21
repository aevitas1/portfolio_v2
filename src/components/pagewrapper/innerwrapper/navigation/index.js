import './index.scss';
import {NavLink} from 'react-router-dom';

const Sidebar = () => {
    let d = new Date();
    let currentYear = d.getFullYear();
    window.addEventListener("load", () => {
        document.querySelector('.currentyear').innerHTML = '&COPY;' + '&nbsp;' + currentYear + '&nbsp;';
    })
    return (
        <>
            <div className="side_bar">
                <div className="nav_bar">
                    <nav>
                        <NavLink exact='true' className="nav_home" activeclassname='active' to='/'>
                            <h1>yo</h1>
                        </NavLink>
                        <NavLink exact='true' className="nav_about" activeclassname='active' to='/'>
                            Test 2
                        </NavLink>
                        <NavLink exact='true' className="nav_contact" activeclassname='active' to='/'>
                            Test 3
                        </NavLink>
                    </nav>
                </div>
                <div className="credits">
                    <div className="currentyear"></div>
                </div>
            </div>
        </>
    )
}

export default Sidebar;