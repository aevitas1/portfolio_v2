import './index.scss';
import {useState} from 'react';
import {NavLink} from "react-router-dom";


const MobileMenu = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const handleClick = () => {
        if (mobileOpen) {
            setMobileOpen(false);
            document.body.classList.remove('mobile_active');
        } else {
            setMobileOpen(true);
            document.body.classList.add('mobile_active');
        }
    }
    return (
        <>
            <div className="mobile_menu_wrapper">
                <div className="mobile_toggle_wrapper" onClick={handleClick}>
                    <div className={mobileOpen ? 'mobile_toggle active' : 'mobile_toggle'}>
                        <div className="top_bar"></div>
                        <div className="middle_bar"></div>
                        <div className="bottom_bar"></div>
                    </div>
                </div>

                <div className={mobileOpen ? 'canvas_menu active' : 'canvas_menu'}>
                    <div className="canvas_menu_inner">
                        <ul>
                            <li>
                                <NavLink to="/" onClick={handleClick}>Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/about" onClick={handleClick}>About</NavLink>
                            </li>
                            <li>
                                <NavLink to="../projects" onClick={handleClick}>Projects</NavLink>
                            </li>
                            <li>
                                <NavLink to="../contact" onClick={handleClick}>Contact</NavLink>
                            </li>
                        </ul>
                        <div className="return_btn" onClick={handleClick}>Back</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MobileMenu;