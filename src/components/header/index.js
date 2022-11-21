import './index.scss';
import Icons from "./icons";
import {useContext} from 'react';
import logo from '../../assets/logo_lm.png';
import logoDarkMode from '../../assets/logo_dm.png';
import {ThemeContext} from "../../context/ThemeContext";

const Header = () => {
    const {theme} = useContext(ThemeContext)
    return (
        <>
            <div className="header-bar">
                <img src={theme ? logo : logoDarkMode} alt=""/>
                <Icons/>
            </div>
        </>
    )
}

export default Header;